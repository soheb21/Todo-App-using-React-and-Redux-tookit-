import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShowUsers from './components/ShowUsers';
import Update from './components/Update';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ShowUsers />} />
          <Route path='/form' element={<Form />} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
