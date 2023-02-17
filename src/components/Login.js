import React, { useRef, useEffect, useState } from "react";
import AddNumbers from "./AddNumbers";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
  integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;
const Login = () => {
  const usernameRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "123") {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect username or password");
      setIsLoggedIn(false);
      usernameRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center items-center h-80 bg-gray-300 ">
      {!isLoggedIn ? (
        <div>
          <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-lg text-center block font-semibold">
              <i class="fa-solid fa-right-to-bracket"></i> Login
              <hr className="mt-3" />
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <label className="block font-base mb-2" htmlFor="username">
                  username:
                </label>
                <input
                  ref={usernameRef}
                  type="text"
                  id="username"
                  className="border rounded w-full px-2 py-1 text-base focus:outline-none focus:ring-0 focus:border-gray-600"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label className="block font-base mb-2" htmlFor="password">
                  password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="border rounded w-full px-2 py-1 text-base focus:outline-none focus:ring-0 focus:border-gray-600"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 w-full mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <AddNumbers />
        </div>
      )}
    </div>
  );
};

export default Login;
