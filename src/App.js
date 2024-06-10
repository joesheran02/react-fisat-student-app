import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStud from './Components/AddStud';
import DeleteStud from './Components/DeleteStud';
import SearchStud from './Components/SearchStud';
import ViewAllStuds from './Components/ViewAllStuds';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddStud/>}/>
    <Route path='/Search' element={<SearchStud/>}/>
    <Route path='/Delete' element={<DeleteStud/>}/>
    <Route path='/View' element={<ViewAllStuds/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
