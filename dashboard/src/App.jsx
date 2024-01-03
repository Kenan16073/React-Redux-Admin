import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/Auth/Login"
import { RequareAuth } from "../src/components/RequareAuth"
import { Dashboard } from "./components/Dashboard"
import { List } from "flowbite-react"




function App() {

  return (
    <>

      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

          <Route element={<RequareAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/list" element={<List />} />
          </Route>
        </Routes>


      </Router>



    </>
  )
}

export default App
