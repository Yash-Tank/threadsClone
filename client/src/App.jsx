import Header from "./components/common/Header"
import Loading from "./components/common/Loading"
import {BrowserRouter , Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>}></Route>
        <Route exact path="/contact" element={<h1>Contact</h1>}></Route>
        <Route exact path="/user" element={<h1>User Profile</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
 