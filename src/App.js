// import logo from './logo.svg';
import './App.css';


import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Sidebar />
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;