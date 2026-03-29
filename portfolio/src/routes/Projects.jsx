import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GithubCharts from "../components/GithubCharts/GithubCharts.jsx";
import ScrollToTop from "react-scroll-to-top";
import "./ProjectsStyles.css";
import ImageSlider from "../components/ImageSlider/ImageSlider.jsx";

const Projects = () => {
	return (
		<div>
			<ScrollToTop
				smooth
				top={20}
				className="scroll-top-btn"
				color="#0f172a"
				component={(
					<svg viewBox="0 0 24 24" aria-hidden="true" className="scroll-top-icon">
						<path d="M12 19V5" />
						<path d="M5 12l7-7 7 7" />
					</svg>
				)}
			/>
			<Navbar />

			<main className="projects-page">
				<h1>Projects</h1>
				<p>Checkout my activity on GitHub!</p>
				<GithubCharts username="Warfora" months={12} />
                <p>Checkout my various projects!</p>
                <ImageSlider />
			</main>
			<Footer />
		</div>
	);
};

export default Projects;
