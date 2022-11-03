import './App.css';
import FormCard from './components/FormCard';
import wobotLogo from "./wobot-logo_blue 1.png"

function App() {
  return (
    <div className="App">
      <div className='CompanyLogo'>
       <img src={wobotLogo} alt="wobotLogo" />
      </div>
      <div className="Main-rectangle"/>
      <div className="Rectangle-one"/>
      <div className="Rectangle-two"/>
      <FormCard />
    </div>
  );
}

export default App;
