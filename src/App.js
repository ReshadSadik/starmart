import './App.css';
import Navigation from '../src/components/shared/Navbar/Navbar.js'
import Banner from '../src/components/Homepage/Banner/Banner'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 {/* <BrowserRouter>
 <Routes>
    <Route> </Route> */}
 {/* </Routes>
 </BrowserRouter> */}
          
 <Navigation/>
      <Banner/>
    </div>
  );
}

export default App;
