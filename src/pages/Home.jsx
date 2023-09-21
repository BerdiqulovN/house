import Header from "../components/Header";
import houseImg from "../assets/images/house-img.jpeg";
import bankImg from "../assets/images/bank-logo.png";
import calculatorImg from "../assets/images/calculator.png";

const Home = () => {
	return (
		<>
			<Header />
			<section className="hero">
				<div className="container">
					<form className=" d-flex gap-5 align-items-center justify-content-between">
						<label htmlFor="company" className="fw-bolder w-25">
							Choose Company:
							<select
								id="company"
								className="form-select mt-3 text-secondary fw-bold border border-primary border-3 "
								aria-label="Default select example"
								role="button"
							>
								<option selected disabled>
									Tashkent City
								</option>
								<option value="1">Tashkent</option>
								<option value="2">Tashkent</option>
							</select>
						</label>
						<label htmlFor="complex" className="fw-bolder w-25">
							Choose Complex:
							<select
								id="complex"
								className="form-select mt-3 text-secondary fw-bold border border-primary border-3"
								aria-label="Default select example"
								role="button"
							>
								<option selected disabled>
									Tashkent City
								</option>
								<option value="chilonzor">Tashkent City Chilonzor</option>
								<option value="olmazor">Tashkent City Olmazor</option>
								<option value="nrg">NRG</option>
							</select>
						</label>
						<label htmlFor="rooms" className="fw-bolder w-25">
							Choose Number of Rooms:
							<select
								id="rooms"
								className="form-select mt-3 text-secondary fw-bold border border-primary border-3"
								aria-label="Default select example"
								role="button"
							>
								<option selected disabled>
									Choose Number of Rooms
								</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</select>
						</label>
						<label htmlFor="mortgage" className="fw-bolder w-25">
							Choose Mortgage duration:
							<select
								id="mortgage"
								className="form-select mt-3 text-secondary fw-bold border border-primary border-3"
								aria-label="Default select example"
								role="button"
							>
								<option disabled selected>
									Choose Mortgage duration
								</option>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
							</select>
						</label>
					</form>
				</div>
			</section>
			<section className="main mt-5 mb-5">
				<div className="container px-5 pb-4 border border-2 border-primary rounded-3">
					<ul className=" list-unstyled mt-5 d-flex align-items-start justify-content-around ">
						<li className=" shadow-lg p-3 rounded-3 w-25">
							<div className="" style={{ height: "160px" }}>
								<img src={houseImg} alt="" className="rounded-3" width={280} />
							</div>
							<div className="mt-3">
								<h1>NRG</h1>
								<p>
									Room: <span className="text-primary">{3}</span>
								</p>
								<p>
									Meter price: <span className="text-primary">{8000000}</span>
								</p>
								<p>
									Meter squere:{" "}
									<span className="text-primary">
										{70}m<sup>2</sup>
									</span>
								</p>
								<p>
									Location:{" "}
									<span className="text-primary">O`zbekiston Toshkent</span>
								</p>
							</div>
						</li>
						<li className=" shadow-lg p-3 rounded-3 w-25">
							<div className="d-flex align-items-center" style={{ height: "160px" }}>
								<img src={bankImg} alt="" className="rounded-3 w-100" />
							</div>
							<div className="mt-3">
								<h1>Agrobank</h1>
								<p>
									Money bank can give: <span className="text-primary">{3500000000}</span>
								</p>
								<p>
									Mortgage duraction: <span className="text-primary">{10} year</span>
								</p>
								<p>
									Starting payment: 
									<span className="text-primary"> {5}%</span>
								</p>
							</div>
						</li>
						<li className=" shadow-lg p-3 rounded-3 w-25">
							<div className="d-flex justify-content-center" style={{ height: "160px" }}>
								<img
									src={calculatorImg}
									alt=""
									className="rounded-3 w-75"
								/>
							</div>
							<div className="mt-3">
								<h1>Calculator</h1>
								<p>
									House Price: <span className="text-primary">{560000000}</span>
								</p>
								<p>
									Starting Payment: <span className="text-primary">{28000000}</span>
								</p>
								<p>
									Monthly Payment: 
									<span className="text-primary"> {4433333}</span>
								</p>
								<p>
									Bank Servise:  
								<span className="text-primary"> {2500000}</span>
								</p>
                                <p>
									Payment Duration: 
									<span className="text-primary"> {10} year</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Home;
