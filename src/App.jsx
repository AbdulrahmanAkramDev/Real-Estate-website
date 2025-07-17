import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Cmpanies from './Components/Cmpanies/Cmpanies'
import Residencies from './Components/Residencies/Residencies'
import Value from './Components/Value/Value'
import Contact from './Components/Contact/Contact'
import GetStarted from './Components/GetStarted/GetStarted'
import Footer from './Components/Footer/Footer'

import './App.css'







function App() {
  return (
    <div className="app">
      <div>
        <div className='white-gradient'></div>
        <Header />
        <Hero />
      </div>
      <Cmpanies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />

    </div>
  );
}

export default App;
