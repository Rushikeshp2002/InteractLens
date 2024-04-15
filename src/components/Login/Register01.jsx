import Img from "../../Assets/1.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register01 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [full, setFull] = useState("");
  const [last, setLast] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [res, setRes] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    register();
  };

  const Data = {
    first_name: full,
    last_name: last,
    email: email,
    phone: phone,
    username: username,
    password: password,
    age: age,
  };

  async function register() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(Data),
    };
    // console.log(data);

    let result = await fetch(
      "http://127.0.0.1:8000/authenticate/user/signup",
      options)
      .then((response) => {
      return response
        .text()
        .then((data) => {
          return data;
        })
        .then((data) => localStorage.setItem("register", JSON.stringify(Data)))
        .then((response) => setRes(response))
        .catch((e) => console.log(e));
    });

    // console.log(result)
    // console.log(res)
    console.log(localStorage.getItem("register"));
    if (localStorage.getItem("register")) {
      navigate("/");
    }
  }

  return (
    <div className="bg-gray-300 overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
      <div className="Register-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
        <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-red-400 flex relative order-2 lg:order-1 rounded-lg">
          <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
            <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-yellow-300 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
              Find Click Save
            </span>
          </div>

          <div className="product absolute right-10 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
            <img
              src={Img}
              alt="product"
              className="-mb-5 lg:mb-0 -ml-12 lg:ml-0  h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-24 2xl:group-hover:translate-x-48 transition-all duration-700 lg:duration-700 ease-in-out rounded-lg"
            />

            <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
          </div>

          <div className="hidden lg:block w-1/3 bg-white ml-auto"></div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-2">
              <div className="form-caption flex items-end justify-center text-center space-x-3 mb-5">
                <span className="text-3xl font-semibold text-gray-700">
                  Register
                </span>
              </div>

              <div className="form-element m-auto w-3/4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-orange-300"
                  onChange={(e) => setFull(e.target.value)}
                />
              </div>
              <div className="form-element m-auto w-3/4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-orange-300"
                  onChange={(e) => setLast(e.target.value)}
                />
              </div>
              <div className="form-element m-auto w-3/4">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-orange-300"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-element m-auto w-3/4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-orange-300"
                  onChange={(e) => setPhone(e.target.value)}
                />
                </div>
                 <div className="form-element  m-auto w-3/4">
                    <input
                      type="text"
                      placeholder="Age"
                      className="block text-sm py-3 px-4 rounded-lg w-full border outline-orange-300"
                      onChange={(e)=>setAge(e.target.value)}
                    />
                  </div>
                <div className="form-element m-auto w-3/4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-orange-300"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  </div>
                

                  <div className="form-element  m-auto w-3/4">
                    <input
                      type="text"
                      placeholder="Password"
                      className="block text-sm py-3 px-4 rounded-lg w-full border outline-orange-300"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                 

        

                  <div className="form-element m-auto w-56">
                    <button
                      onClick={handleSubmit}
                      className=" mt-2 w-full py-2 text-xl text-white bg-red-400 rounded-lg hover:bg-red-500 transition-all"
                    >
                      Create Account
                    </button>
                    <div className="mt-4 text-sm flex ">
                      Already Have An Account?
                      <p className="cursor-pointer mx-1 text-indigo-600 hover:text-indigo-800">
                        <Link to="/login">Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    
  );
};

export default Register01;
