import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './Components/Books';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />}>BOOKS</Route>
        <Route path="/categories" element={<Categories />}>CATEGORIES</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
