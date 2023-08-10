import { Routes, BrowserRouter, Route } from "react-router-dom";
import LoginPages from "./pages/login";
import ErorPages from "./pages/Eror";
import RegistPages from "./pages/regist";
import Landingpages from "./pages/landingPage";
import Home from "./pages/Home";

const App =()=>{
return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPages/>} />
        <Route path="/register" element={<RegistPages/>} />
        <Route path="/" element={<Landingpages/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<ErorPages/>}/>
      </Routes>
    </BrowserRouter>
)
}


export default App