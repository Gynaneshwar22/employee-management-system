
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <HeaderComponent/>
        <BrowserRouter>
            <div className='container flex-grow-1'>
              <Routes>
                <Route exact path='/' element={<ListEmployeeComponent/>}></Route>
                <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
                <Route path='/add-employee' element={<CreateEmployeeComponent/>}></Route>
                <Route path='/update-employee/:id' element={<UpdateEmployeeComponent/>}></Route>
              </Routes>
            </div>
        </BrowserRouter>
        <FooterComponent/>
    </div>
  );
    
}

export default App;
