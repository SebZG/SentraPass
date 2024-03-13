//PlaceHolder.jsx

// git add . && git commit -m "message" && git push

//css//
import "./PlaceHolder.css";

const LandingPlaceHolder = () => {
  return (
    <>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 background-image-container">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://picsum.photos/id/6/700/500"
            className="d-block img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 text-start">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Welcome to SentraPass –
          </h1>
          <p className="lead">
            Streamlined Password Management SentraPass
            offers free and secure access to your passwords and usernames
            directly in your browser, providing a hassle-free solution for
            managing your digital credentials. Experience convenience without
            compromise. Welcome to a worry-free online journey with SentraPass.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
          <button type="button" class="btn btn-primary">Login/Register</button>
        </div>
      </div>
    </>
  );
};

export default LandingPlaceHolder;

//@connor se lines 13 to 19 and replace with product demo/ features (as appropriate)