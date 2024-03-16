import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allbook from "./components/Allbook";
import Header from "./components/Header";
import Book from "./components/Book";
import Create_book from "./components/Create_book";
import './App.css'

export default function App() {
  return (
    
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Allbook />}/>
        <Route path="/book/:id" element={<Book />} />
        <Route path="/create" element={<Create_book />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);