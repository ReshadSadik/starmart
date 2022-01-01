import './App.css';

import Login from '../src/components/Authentication/Login/Login';

import AuthProvider from './context/AuthProvider';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar></Navbar>
        <Login> </Login>
      </AuthProvider>
    </div>
  );
}

export default App;
