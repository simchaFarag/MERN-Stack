
import {Routes, Route} from 'react-router-dom';
import UsersComp from './Demo1_FREMP/Users';
import CreateUserComp from './Demo1_FREMP/CreateUser';
import UpdateUser from './Demo1_FREMP/UpdateUser';
import { useNavigate } from 'react-router-dom';
import "./App.css"
function App() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
        <span onClick={() => navigate("/")} className="nav-item">Home</span>
        <span onClick={() => navigate("/create")} className="nav-item">Create</span>
        <span onClick={() => navigate("/edit")} className="nav-item">Update</span>
      </div>


    <Routes>
      <Route path="" element={<UsersComp />} />
      <Route path="/create" element={<CreateUserComp />} />
      <Route path="/edit" element={<UpdateUser/>} />
    </Routes>


    <footer> 
    © 2023 All Rights Reserved.
    </footer>

    </>
  )
}

export default App
