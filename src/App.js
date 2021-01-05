// import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar'
import Workspace from './pages/Workspace'




function App() {
  return (
    <div className="App">

      <div className="header">
        <MenuBar />
      </div>

      <div className="workspace">
        <Workspace />
      </div>

      <div className="footer" >
        <span style={{float:'right' }}>内存使用 100MB /131072MB(1%)</span>
      </div>

    </div>
  );
}

export default App;


