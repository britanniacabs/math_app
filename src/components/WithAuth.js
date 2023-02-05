// withAuth.js
import React, { useState } from "react"

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuth, setIsAuth] = useState(false)

    const login = () => {
      // logic to check if the user is authenticated
      setTimeout(() => {
        setIsAuth(true)
      }, 2000)
    }

    return (
      <div>
        {isAuth ? (
          <WrappedComponent {...props} />
        ) : (
          <div>
            <p>Please login to see the component</p>
            <button onClick={login}>Login</button>
          </div>
        )}
      </div>
    )
  }
}

export default withAuth
