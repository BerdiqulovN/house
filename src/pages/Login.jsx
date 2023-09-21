import logo from "../assets/images/logo.png" 
const Login = () => {
    return (
        <>
          <section className="login d-flex align-items-center" style={{height:"100vh"}}>
            <div className="container w-100  m-auto d-flex align-items-center justify-content-center flex-column ">
            <img src={logo} alt="" />
                <div className="p-5 mt-3 d-flex align-items-center flex-column rounded-3  border border-2 border-primary">
                    <h1>Please sign in</h1>
                    <form className="mt-3 d-flex gap-4 align-items-center flex-column">
                        <label htmlFor="">
                            <input type="text" placeholder="Username..." className=" form-control"/>
                        </label>
                        <label htmlFor="" className="">
                            <input type="password" placeholder="Password..." className=" form-control"/>
                        </label>
                        <button className="btn bg-primary text-white fw-bold">Submit</button>
                    </form>
                </div>
            </div>
            </section>  
        </>
    );
};

export default Login;