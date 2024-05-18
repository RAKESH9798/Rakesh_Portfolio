import React from 'react'
import Footer from "./Components/Footer/Footer.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import HomePage from './Components/Homepage/Homepage.jsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
