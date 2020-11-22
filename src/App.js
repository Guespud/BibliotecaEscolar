import './App.css';
import Body from './Body';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Search/>
     <Body/>
    </div>
  );
}

export default App;
