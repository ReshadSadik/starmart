import './App.css';
import Navigation from '../src/components/shared/Navbar/Navbar.js'
import Banner from '../src/components/Homepage/Banner/Banner'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomepageContainer from './components/Homepage/HomePageContainer/HomepageContainer';
import Services from './components/Homepage/Services/Services';

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
      <Services/>
    </div>
  );
}

export default App;
