import './App.css';
import Counter from './components/Counter';
import SocialCard from './components/SocialCard';
import Store from './store/Store';

function App() {
  return (
    <div className="app">
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>MobX Demo with Rick and Morty</h2>
      <div className="app_Card">
        <SocialCard store={Store} />  
        <Counter store={Store} />
      </div>
    </div>
  );
}

export default App;
