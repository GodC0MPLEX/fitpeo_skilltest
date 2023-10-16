import Header from "./components/Header";
import Card from "./components/Card";
import Body1 from "./components/Body1";
import Dashboard from "./components/Dashboard";
import './app.css'
import Body2 from "./Body2";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <img src=""/>
      <div id="aside"><Dashboard /></div>
      <div id="main">
        <Header />
        <Body1 />
        <Body2 />
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
