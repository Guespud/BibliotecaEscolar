import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';

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
