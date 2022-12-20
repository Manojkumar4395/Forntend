
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Users from "./Pages/Users/Users";


function App() {
  return (
    <Router>
    <Routes>
    <Route path='*' exact element={<PageNotFound/>} />
      
      <Route exact path="/" element={<Login />} />
   
      <Route exact path="/users" element={<Users/>} />
    

    </Routes>
    </Router>
  );
}

export default App;
