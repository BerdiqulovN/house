import Sidebar from "../components/SideBar";

// import {Link, NavLink} from "react-router-dom"
const Dashboard = () => {
	return (
		<>
        <Sidebar/>
			{/* <section>
				<div
					className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
					style={{width:"280px"}}
				>
					<NavLink
						to="/"
						className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
					>
						<span className="fs-4">Sidebar</span>
					</NavLink>
					<hr />
					<ul className="nav nav-pills flex-column mb-auto">
						<li className="nav-item">
							<NavLink to="/" className="nav-link active" aria-current="page">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="#" className="nav-link link-body-emphasis">
								Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink to="#" className="nav-link link-body-emphasis">
								Orders
							</NavLink>
						</li>
						<li>
							<NavLink to="#" className="nav-link link-body-emphasis">
								Products
							</NavLink>
						</li>
						<li>
							<NavLink to="#" className="nav-link link-body-emphasis">
								Customers
							</NavLink>
						</li>
					</ul>
					<hr />
					<div className="dropdown">
						<NavLink
							to="#"
							className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<strong>mdo</strong>
						</NavLink>
						<ul className="dropdown-menu text-small shadow">
							<li>
								<Link className="dropdown-item" to="#">
									New project...
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" to="#">
									Settings
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" to="#">
									Profile
								</Link>
							</li>
							<li>
								<hr className="dropdown-divider" />
							</li>
							<li>
								<Link className="dropdown-item" to="#">
									Sign out
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default Dashboard;
