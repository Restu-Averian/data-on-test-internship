import './App.css';
import HomeView from './views/HomeView';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import LoginView from './views/LoginView';
import CityNews from './views/CityNews';
function App() {
  return (
    <div className="App bg-[#2A2E43] w-[360px] mx-auto container p-5">
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/city-news" element={<CityNews />}></Route>
          <Route path="/login" element={<LoginView />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
