import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
	return (
		<>
			<header>
				<div className="container py-4">
					<div className=" d-flex align-items-center justify-content-between">
						<a href="/">
							<img src={logo} alt="company logo" />
						</a>
						<Link
							to="/login"
							className="text-warning text-decoration-none fw-bolder"
						>
							Admin
						</Link>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
