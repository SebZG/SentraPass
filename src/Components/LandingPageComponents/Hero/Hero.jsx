import "./Hero.css";
import { Link } from "react-router-dom";
import websiteMockupsImage from "../../../assets/images/website_mockups.png";


const Hero = () => {
	return (
		<div id="hero" className="row flex-lg-row-reverse align-items-center py-5">
			<div className="col-10 col-sm-8 col-lg-6 mt-5 pt-5">
				<img
					src={websiteMockupsImage}
					className="d-block img-fluid"
					alt="Product Demo"
					width="700"
					height="500"
					loading="lazy"
				/>
			</div>
			<div className="col-lg-6 text-start display-flex">
				<h1 id="welcomeHeader" className="display-5 fw-bold lh-1 mb-3">
					Welcome to SentraPass
				</h1>
				<p className="lead">
					Streamlined Password Management SentraPass offers free and secure
					access to your passwords and usernames directly in your browser,
					providing a hassle-free solution for managing your digital
					credentials. Experience convenience without compromise. Welcome to a
					worry-free online journey with SentraPass.
				</p>
				<div className="d-flex justify-content-center">
					<Link to="/login" className="btn">
						Login
					</Link>
				</div>
				<div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
			</div>
		</div>
	);
};

export default Hero;
