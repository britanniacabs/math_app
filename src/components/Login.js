import React, { useRef, useEffect, useState } from "react";
import AddNumbers from "./AddNumbers";

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
    <div>
      {!isLoggedIn ? (
        <div className="w-full max-w-sm mx-auto mt-10 bg-neutral-100">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                username:
              </label>
              <input
                ref={usernameRef}
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                password:
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          {errorMessage && (
            <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
          )}
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
