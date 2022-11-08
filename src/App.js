import './AppReset.css';
import Header from './Components/header/Header.jsx'
import Banner from './Components/hero/Banner.jsx'
import Body from './Components/body/Body.jsx'
import Footer from './Components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
