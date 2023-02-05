// App.js
import React from "react"
import AddNumbers from "./components/AddNumbers"
import withAuth from "./components/WithAuth"

const AuthenticatedAddNumbers = withAuth(AddNumbers)

function App() {
  return (
    <div className="App">
      <AuthenticatedAddNumbers />
    </div>
  )
}

export default App
