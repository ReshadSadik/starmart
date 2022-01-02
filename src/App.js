import './App.css';

import Login from '../src/components/Authentication/Login/Login';

import AuthProvider from './context/AuthProvider';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import About from './components/Homepage/About/About';
import Contact from './components/Homepage/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
         <Login> </Login> 
         <About></About> 
         <Contact></Contact> 
        <Footer></Footer> 
      </AuthProvider>
    </div>
  );
}

export default App;
