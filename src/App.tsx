import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Compose1 from "./pages/Compose1";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Home>
        <Routes>
          <Route path="/" element={<Compose1 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Home>
    </div>
  );
}

export default App;
