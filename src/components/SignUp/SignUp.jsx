import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-toastify";
import styles from "../../styles/styles";
import backgroundImg2 from "../../assets/image/loginBackground2.jpg";
import useUserStore from "../../store/userStore";
import ReactLoading from "react-loading";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avater, setAvater] = useState(null);
  const [name, setName] = useState("");
  const defaultToastOption = {
    type: "success",
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
  };
  const navigate = useNavigate();
  const userStore = useUserStore();

  const notify = (message, option) => toast(message, option);
  const prepareFormData = () => {
    const newForm = new FormData();
    newForm.append("email", email);
    newForm.append("file", avater);
    newForm.append("name", name);
    newForm.append("password", password);
    return newForm;
  };
  const handleGoToLogin = () => {
    navigate("/login");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvater(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newForm = prepareFormData();
    try {
      setIsLoading(true);
      let res = await userStore.createUser(newForm);
      console.log(res);
      if (res.code === 1) {
        notify("User Created Successfully", {
          ...defaultToastOption,
          type: "success",
        });
      }
      // navigate("/login");
    } catch (err) {
      console.log(err.response.data.message);
      notify(err.response.data.message, {
        ...defaultToastOption,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div
        className="h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pb-60 px-5 sm:bg-cover "
        style={{
          backgroundImage: `url(${backgroundImg2})`,
          // Ensures the image covers the entire div

          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-stone-300">
            Register New Account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div
            className="bg-transparent transition duration-600 py-8 px-4 shadow-md hover:shadow-xl sm:rounded-lg sm:px-10"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
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
                    className="appearance-none block w-full px-3 py-2 border text-gray-300 bg-transparent shadow-sm border-stone-500 rounded-md  placeholder-stone-400 focus:outline-none focus:ring-stone-500 focus:border-stone-600 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
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
                    className="appearance-none block w-full px-3 py-2 border text-gray-300 bg-transparent shadow-sm border-stone-500 rounded-md  placeholder-stone-400 focus:outline-none focus:ring-stone-500 focus:border-stone-600 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
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
                    className="appearance-none block w-full px-3 py-2 border text-gray-300 bg-transparent shadow-sm border-stone-500 rounded-md  placeholder-stone-400 focus:outline-none focus:ring-stone-500 focus:border-stone-600 sm:text-sm"
                  />
                  {visible ? (
                    <IoEyeSharp
                      className="absolute top-2 right-2 size-5 text-gray-300"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="absolute top-2 right-2 size-5 text-gray-300"
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
                        className="h-full w-full object-cover rounded-full text-gray-300"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8 text-gray-300" />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center px-4 py-2 border border-stone-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-transparent hover:border-stone-200 hover:text-gray-600"
                  >
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileInputChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
              <div className={`${styles.normalFlex} w-full`}>
                <button
                  type="submit"
                  className=" w-full relative text-gray-50 flex justify-center gap-4 px-5 py-3 rounded-lg transition delay-0 bg-amber-500 hover:bg-amber-600"
                >
                  {isLoading ? (
                    <ReactLoading
                      className="absolute my-auto mr-[90px]  "
                      type="spin"
                      color="#fff"
                      height={20}
                      width={20}
                    />
                  ) : null}
                  <div>Submit</div>
                </button>
              </div>
              <div className={`${styles.normalFlex} text-gray-600`}>
                Already have an account? &nbsp;
                <span
                  onClick={handleGoToLogin}
                  className="text-indigo-500 cursor-pointer select-none"
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
