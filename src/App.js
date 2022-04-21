import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Main/>
      <div>footer</div>
    </div>
  );
}



export default App;
