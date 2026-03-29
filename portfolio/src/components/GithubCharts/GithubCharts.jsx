import { useEffect, useMemo, useState } from "react";
import "./GithubCharts.css";

const DEFAULT_USERNAME = "Warfora";
const DEFAULT_MONTHS = 12;

function getMonthKey(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	return `${year}-${month}`;
}

function buildRecentMonths(months) {
	const now = new Date();
	const result = [];

	for (let i = months - 1; i >= 0; i -= 1) {
		const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
		const key = getMonthKey(d);
		const label = d.toLocaleDateString("en-US", {
			month: "short",
			year: "numeric",
		});

		result.push({ key, label, count: 0 });
	}

	return result;
}

function extractContributionCount(item) {
	if (typeof item?.count === "number") {
		return item.count;
	}

	if (typeof item?.contributionCount === "number") {
		return item.contributionCount;
	}

	if (typeof item?.contributions === "number") {
		return item.contributions;
	}

	return null;
}

function extractContributionEntries(payload) {
	const entries = [];
	const stack = [payload];

	while (stack.length > 0) {
		const current = stack.pop();

		if (Array.isArray(current)) {
			current.forEach((value) => stack.push(value));
			continue;
		}

		if (!current || typeof current !== "object") {
			continue;
		}

		const count = extractContributionCount(current);
		if (typeof current.date === "string" && typeof count === "number") {
			entries.push({ date: current.date, count });
		}

		Object.values(current).forEach((value) => {
			if (value && (Array.isArray(value) || typeof value === "object")) {
				stack.push(value);
			}
		});
	}

	return entries;
}

const GithubCharts = ({ username = DEFAULT_USERNAME, months = DEFAULT_MONTHS }) => {
	const [contributions, setContributions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		let ignore = false;

		async function loadEvents() {
			setLoading(true);
			setError("");

			try {
				const response = await fetch(
					`https://github-contributions-api.jogruber.de/v4/${username}?y=last`
				);

				if (!response.ok) {
					throw new Error(`GitHub API error: ${response.status}`);
				}

				const data = await response.json();
				if (!ignore) {
					setContributions(extractContributionEntries(data));
				}
			} catch (err) {
				if (!ignore) {
					setError("Could not load GitHub contributions right now.");
					setContributions([]);
				}
			} finally {
				if (!ignore) {
					setLoading(false);
				}
			}
		}

		loadEvents();

		return () => {
			ignore = true;
		};
	}, [username]);

	const chartData = useMemo(() => {
		const baseMonths = buildRecentMonths(months);
		const countsByMonth = new Map(baseMonths.map((m) => [m.key, 0]));

		contributions.forEach((item) => {
			if (!item?.date) {
				return;
			}

			const monthKey = item.date.slice(0, 7);
			if (countsByMonth.has(monthKey)) {
				countsByMonth.set(monthKey, countsByMonth.get(monthKey) + item.count);
			}
		});

		return baseMonths.map((m) => ({
			...m,
			count: countsByMonth.get(m.key) || 0,
		}));
	}, [months, contributions]);

	const maxCount = Math.max(1, ...chartData.map((d) => d.count));
	const totalContributions = chartData.reduce((sum, d) => sum + d.count, 0);

	return (
		<section className="github-chart" aria-labelledby="github-chart-title">
			<div className="github-chart-head">
				<h2>GitHub Contributions</h2>
				<p>
					Last {months} months
				</p>
			</div>

			{loading ? <p className="github-chart-note">Loading activity...</p> : null}
			{error ? <p className="github-chart-note github-chart-error">{error}</p> : null}

			{!loading && !error ? (
				<>
					<div className="github-chart-bars" role="img" aria-label={`Contribution chart with ${totalContributions} contributions in the last ${months} months`}>
						{chartData.map((month) => {
							const barHeight = (month.count / maxCount) * 100;

							return (
								<div className="github-chart-day" key={month.key} title={`${month.label}: ${month.count} contributions`}>
									<div className="github-chart-bar-wrap">
										<div
											className="github-chart-bar"
											style={{ height: `${barHeight}%` }}
											aria-hidden="true"
										/>
									</div>
									<span className="github-chart-count">{month.count}</span>
									<span className="github-chart-label">{month.label}</span>
								</div>
							);
						})}
					</div>

					<p className="github-chart-note">Total contributions: {totalContributions}</p>
				</>
			) : null}
		</section>
	);
};

export default GithubCharts;
