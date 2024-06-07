import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import DeleteList from './components/DeleteList';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/delete" element={<DeleteList/>}/>
        <Route path="/viewall" element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
