import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileShare from "./FileShare";
import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/upload" element={<FileShare/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
