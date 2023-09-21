import {Link, NavLink} from "react-router-dom"
const Sidebar = () => {
	return (
		<>
			<section>
				<div
					className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
					style={{width:"280px"}}
				>
					<p
						className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
					>
						<span className="fs-4 text-primary">Dashboard</span>
					</p>
					<hr />
					<ul className="nav nav-pills flex-column mb-auto">
						<li className="nav-item">
							<NavLink to="/banks" className="nav-link " aria-current="page">
								Banks
							</NavLink>
						</li>
						<li>
							<NavLink to="/credits" className="nav-link link-body-emphasis">
								Credits
							</NavLink>
						</li>
						<li>
							<NavLink to="/companies" className="nav-link link-body-emphasis">
								Companies
							</NavLink>
						</li>
						<li>
							<NavLink to="/complex" className="nav-link link-body-emphasis">
								Complex
							</NavLink>
						</li>
					</ul>
					<hr />
					<div className="dropdown">
						<Link
							to="#"
							className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<strong>mdo</strong>
						</Link>
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
			</section>
		</>
	);
};

export default Sidebar;
