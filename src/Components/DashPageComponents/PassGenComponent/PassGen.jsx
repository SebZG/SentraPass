import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { writePassword, copyToClipboard } from "./script";

import "./PassGen.css";

const PassGen = () => {
	const [password, setPassword] = useState("");

	const handleGeneratePassword = () => {
		const generatedPassword = writePassword();
		setPassword(generatedPassword);
	};

	return (

		<div className="col-lg-6 px-5 py-5">
			<div className="card" id="passGenBody">
				<div className="card-body">
					<h1 className="card-title" id="passwordTitle">
						Password Generation
					</h1>
					<div className="row px-5">
						<div className="col-md-8 mb-3 d-flex align-items-center">
							<label
								htmlFor="passwordLength"
								className="form-label"
								id="passLength"
							>
								Password Length (8-128 characters):
							</label>
						</div>
						<div className="col-md-4 mb-3 justify-content-center d-flex align-items-center">
							<input
								type="number"
								id="passwordLength"
								min="8"
								max="128"
								className="form-control mb-3 w-auto"
							/>
						</div>
					</div>

				</div>
				<div className="row px-5">
					<div className="form-check mb-3 ">
						<input
							type="checkbox"
							className="form-check-input me-2"
							id="upperCase"
						/>
						<label className="form-check-label" htmlFor="upperCase">
							Include Uppercase Characters
						</label>
					</div>
				</div>
				<div className="row px-5">
					<div className="form-check mb-3">
						<input
							type="checkbox"
							className="form-check-input me-2"
							id="lowerCase"
						/>
						<label className="form-check-label" htmlFor="lowerCase">
							Include Lowercase Characters
						</label>
					</div>
				</div>
				<div className="row px-5">
					<div className="form-check mb-3">
						<input
							type="checkbox"
							className="form-check-input me-2"
							id="numbers" />
						<label className="form-check-label" htmlFor="numbers">
							Include Numbers
						</label>
					</div>
				</div>
				<div className="row px-5">
					<div className="form-check mb-3">
						<input
							type="checkbox"
							className="form-check-input me-2"
							id="specialChars"
						/>
						<label className="form-check-label" htmlFor="specialChars">
							Include Special Characters
						</label>
					</div>
				</div>
				<button
					onClick={handleGeneratePassword}
					className="btn d-block mx-auto my-3 px-5 py-3"
				>
					Generate Password
				</button>
				<div className="d-flex justify-content-evenly mx-5 my-3">
					{/* <div className=" mb-3"> */}
					<input
						type="text"
						className="form-control me-2"
						placeholder="Generated Password"
						aria-label="Generated Password"
						value={password}
						readOnly
					/>
					<button
						onClick={() => copyToClipboard(password)}
						className="btn"
						id="generatedPassword"
						type="button"
					>
						<FontAwesomeIcon icon={faCopy} />
					</button>
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default PassGen;


