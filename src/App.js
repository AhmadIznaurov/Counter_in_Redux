import Desktop from "./Desktop/Desktop";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";
import './App.css'
import Clock from "./ClockOnline/Clock";

function App() {
  return (
      <div className="app_wrapper">
        <Desktop />
        <Section />
        <Footer />
       <Clock />
      </div>
  );
}

export default App;