import './App.css';
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import Korzina from "./pages/Korzina/Korzina";

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='/busket' element={<Korzina/>}/>
        </Routes>
    </>
  );
}

export default App;
