import logo from './logo.svg';
import './App.css';

// Importing components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Importing CSS
import './styles/Navbar.css';
import './styles/Sidebar.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;