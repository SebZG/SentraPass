import "./Hero.css";
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div id="hero" className="row flex-lg-row-reverse align-items-center py-5">
			<div className="col-10 col-sm-8 col-lg-6">
				<img
					src="https://placehold.co/700x500"
					className="d-block img-fluid"
					alt="Product Demo"
					width="700"
					height="500"
					loading="lazy"
				/>
			</div>
			<div className="col-lg-6 text-start">
				<h1 id= "welcomeHeader" className="display-5 fw-bold lh-1 mb-3">Welcome to SentraPass</h1>
				<p className="lead">
					Streamlined Password Management SentraPass offers free and secure
					access to your passwords and usernames directly in your browser,
					providing a hassle-free solution for managing your digital
					credentials. Experience convenience without compromise. Welcome to a
					worry-free online journey with SentraPass.
				</p>
				<Link to="/login" className="btn"><button type="button" className="btn btn-primary btn-lg px-4">Login</button></Link>
				<div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
			</div>
		</div>
	);
};

export default Hero;

//@connor se lines 13 to 19 and replace with product demo/ features (as appropriate)
//