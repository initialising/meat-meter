import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>🥩 Meat Meter</h1>
      <p>Willkommen bei Meat Meter – deinem persönlichen Fleisch-Tracker.</p>
      <button style={{
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: '#c0392b',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Bestellung aufgeben 🍔
      </button>
    </div>
  );
}

export default App;
