import './App.css';
import Header from './components/Header';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <div className="app">
      <div className="overlay">
        <Header />
        <Recommendations />
      </div>
    </div>
  );
}

export default App;
