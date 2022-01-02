import './App.css';

import Banner from '../src/components/Homepage/Banner/Banner'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomepageContainer from './components/Homepage/HomePageContainer/HomepageContainer';
import Services from './components/Homepage/Services/Services';

function App() {
  return (
    <div className="App">
 
          
    
      <Banner/>
      <Services/>
    </div>
  );
}

export default App;
