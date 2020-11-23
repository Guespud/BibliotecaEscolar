import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Body from './Body'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="app__Background">
     <Search/>
     </div>
    </div>
  );
}

export default App;
