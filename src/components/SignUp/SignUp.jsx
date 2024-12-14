import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import styles from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/image/loginBackground.jpg";
import { RxAvatar } from "react-icons/rx";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avater, setAvater] = useState(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleGoToLogin = () => {
    navigate("/login");
  };
  const handleSubmit = () => {
    console.log("hello");
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvater(file);
  };
  return (
    <>
      <div
        className="h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pb-60"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register New Account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div
            className="bg-transparent transition duration-600 py-8 px-4 shadow-md hover:shadow-xl sm:rounded-lg sm:px-10"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="appearance-none block w-full px-3 py-2 border text-gray-500 bg-transparent border-indigo-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="appearance-none block w-full px-3 py-2 border text-gray-500 bg-transparent border-indigo-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="appearance-none block w-full px-3 py-2 border bg-transparent text-gray-500 border-indigo-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {visible ? (
                    <IoEyeSharp
                      className="absolute top-2 right-2 size-5"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="absolute top-2 right-2 size-5"
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-2 flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avater ? (
                      <img
                        src={URL.createObjectURL(avater)}
                        alt="avater"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                </div>
              </div>
              <div className={`${styles.normalFlex} w-full`}>
                <button
                  type="submit"
                  className=" w-full text-gray-50 px-5 py-3 rounded-lg transition delay-100 bg-indigo-600 hover:bg-indigo-700"
                >
                  Submit
                </button>
              </div>
              <div className={`${styles.normalFlex} text-gray-600`}>
                Already have an account? &nbsp;
                <span
                  onClick={handleGoToLogin}
                  className="text-indigo-700 cursor-pointer select-none"
                >
                  Login
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
