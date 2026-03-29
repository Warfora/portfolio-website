import { useEffect, useMemo, useState } from "react";
import "./ImageSlider.css";

const PROJECTS_PER_SLIDE = 2;
const SLIDE_AUTO_MS = 4200;

const projectTextByKey = {
	AutorunnerGame: "2D autorunner prototype focused on movement and obstacle timing.",
	CampfireGame: "Atmospheric pixel-art adventure with survival-style mechanics.",
	Ghost_2D_Game: "Simple platforming game with combat and level progression.",
	RaspberryCaseModel: "Custom 3D Raspberry Pi case model with practical ventilation details.",
	RobbingSimulatorGame: "3D burglary simulator prototype with physics interactions and scoring.",
	ElementsOfAI: "Completed AI fundamentals course and earned certification.",
	Snake_2D_Game: "Classic Snake clone built in Python with score tracking.",
	MobileGameDesigns: "Character sprite design study with multiple action states.",
};

function normalizeName(rawName) {
	return rawName
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/[_-]+/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

function compareNatural(a, b) {
	return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function buildProjectsFromImages() {
	const modules = import.meta.glob(
		"../../assets/ImageSliderData/**/*.{png,jpg,jpeg,webp}",
		{ eager: true, import: "default" }
	);

	const projectMap = new Map();

	Object.entries(modules).forEach(([path, imageSrc]) => {
		const normalized = path.replace(/\\/g, "/");
		const fileName = normalized.split("/").pop() || "";
		const folderMatch = normalized.match(/ImageSliderData\/([^/]+)\//);
		const projectKey = folderMatch ? folderMatch[1] : fileName.replace(/\.[^.]+$/, "");

		if (!projectMap.has(projectKey)) {
			projectMap.set(projectKey, []);
		}

		projectMap.get(projectKey).push({ fileName, src: imageSrc });
	});

	return [...projectMap.entries()]
		.map(([key, items]) => {
			const sortedItems = items.sort((a, b) => compareNatural(a.fileName, b.fileName));

			return {
				key,
				title: normalizeName(key),
				description:
					projectTextByKey[key] ||
					"Project gallery with screenshots and development snapshots.",
				images: sortedItems.map((item) => item.src),
			};
		})
		.sort((a, b) => compareNatural(a.title, b.title));
}

function chunkProjects(projects, size) {
	const chunks = [];
	for (let i = 0; i < projects.length; i += size) {
		chunks.push(projects.slice(i, i + size));
	}
	return chunks;
}

const ImageSlider = () => {
	const projects = useMemo(() => buildProjectsFromImages(), []);
	const slides = useMemo(
		() => chunkProjects(projects, PROJECTS_PER_SLIDE),
		[projects]
	);

	const [slideIndex, setSlideIndex] = useState(0);
	const [lightboxProject, setLightboxProject] = useState(null);
	const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

	if (projects.length === 0) {
		return <p className="slider-empty">No project images found.</p>;
	}

	const totalSlides = slides.length;

	const goNext = () => {
		setSlideIndex((prev) => (prev + 1) % totalSlides);
	};

	const goPrev = () => {
		setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
	};

	useEffect(() => {
		if (totalSlides <= 1) {
			return undefined;
		}

		if (lightboxProject) {
			return undefined;
		}

		const timer = setInterval(() => {
			setSlideIndex((prev) => (prev + 1) % totalSlides);
		}, SLIDE_AUTO_MS);

		return () => clearInterval(timer);
	}, [lightboxProject, totalSlides]);

	const openLightbox = (project) => {
		setLightboxProject(project);
		setLightboxImageIndex(0);
	};

	const closeLightbox = () => {
		setLightboxProject(null);
		setLightboxImageIndex(0);
	};

	const goLightboxNext = () => {
		if (!lightboxProject || lightboxProject.images.length <= 1) {
			return;
		}

		setLightboxImageIndex(
			(prev) => (prev + 1) % lightboxProject.images.length
		);
	};

	const goLightboxPrev = () => {
		if (!lightboxProject || lightboxProject.images.length <= 1) {
			return;
		}

		setLightboxImageIndex(
			(prev) => (prev - 1 + lightboxProject.images.length) % lightboxProject.images.length
		);
	};

	useEffect(() => {
		if (!lightboxProject) {
			return undefined;
		}

		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				closeLightbox();
			}

			if (event.key === "ArrowRight") {
				goLightboxNext();
			}

			if (event.key === "ArrowLeft") {
				goLightboxPrev();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [lightboxProject]);

	return (
		<section className="project-slider" aria-label="Project image slider">
			<div className="slider-header">
				<h2>Project Gallery</h2>
			</div>

			<div className="project-slider-shell">
				<button
					type="button"
					className="slider-side-arrow slider-side-arrow-left"
					onClick={goPrev}
					aria-label="Previous projects"
				>
					&#10094;
				</button>

				<button
					type="button"
					className="slider-side-arrow slider-side-arrow-right"
					onClick={goNext}
					aria-label="Next projects"
				>
					&#10095;
				</button>

				<div className="project-slider-viewport">
					<div
						className="project-slider-track"
						style={{ transform: `translateX(-${slideIndex * 100}%)` }}
					>
						{slides.map((slide, panelIndex) => (
							<div className="project-slider-panel" key={`panel-${panelIndex}`}>
								<div className="project-slide-grid">
									{slide.map((project) => {
										return (
											<article
												className="project-card"
												key={project.key}
												onClick={() => openLightbox(project)}
												onKeyDown={(event) => {
													if (event.key === "Enter" || event.key === " ") {
														event.preventDefault();
														openLightbox(project);
													}
												}}
												tabIndex={0}
												role="button"
												aria-label={`Open ${project.title} images`}
											>
												<div className="project-image-wrap">
													<img
														src={project.images[0]}
														alt={`${project.title} screenshot`}
													/>
												</div>
												<div className="project-card-body">
													<h3>{project.title}</h3>
													<p>{project.description}</p>
												</div>
											</article>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{lightboxProject ? (
				<div
					className="project-lightbox"
					onClick={closeLightbox}
					role="presentation"
				>
					<div
						className="project-lightbox-content"
						onClick={(event) => event.stopPropagation()}
						role="dialog"
						aria-modal="true"
						aria-label={`${lightboxProject.title} gallery`}
					>
						<button
							type="button"
							className="project-lightbox-close"
							onClick={closeLightbox}
							aria-label="Close image viewer"
						/>

						<img
							className="project-lightbox-image"
							src={lightboxProject.images[lightboxImageIndex]}
							alt={`${lightboxProject.title} screenshot ${lightboxImageIndex + 1}`}
						/>

						<div className="project-lightbox-caption">
							<h3>{lightboxProject.title}</h3>
							<p>{lightboxProject.description}</p>
						</div>

						{lightboxProject.images.length > 1 ? (
							<>
								<button
									type="button"
									className="project-lightbox-arrow project-lightbox-arrow-prev"
									onClick={goLightboxPrev}
									aria-label="Previous image"
								/>
								<button
									type="button"
									className="project-lightbox-arrow project-lightbox-arrow-next"
									onClick={goLightboxNext}
									aria-label="Next image"
								/>
							</>
						) : null}
					</div>
				</div>
			) : null}
		</section>
	);
};

export default ImageSlider;
