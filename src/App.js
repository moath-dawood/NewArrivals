import './App.css';
import MainSectionTitle from './components/MainSectionTitle';
import SectionTitle from './components/SectionTitle';
import NewArrival from './components/Card';

function App() {
  return (
    <div className="App">
      <SectionTitle secTitle={"Featured"}/>
      <MainSectionTitle label={"New Arrival"}/>
      <NewArrival />
    </div>
  );
}

export default App;
