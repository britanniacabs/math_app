// withAuth.js
import React, { useState } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
      // logic to check if the user is authenticated
      setTimeout(() => {
        setIsAuth(true);
      }, 2000);
    };

    return (
      <div>
        {isAuth ? (
          <WrappedComponent {...props} />
        ) : (
          <div class="login">
            <p class="question">Please login to see more..</p>
            <button onClick={login} class="check-button">
              Login
            </button>
          </div>
        )}
      </div>
    );
  };
};

export default withAuth;
