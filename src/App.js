import './App.css';

function App() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
  const mapUrl = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=Tokyo%20Station&destination=Nagoya%20Station&mode=driving`;

  return (
    <div className="App">
      <h1>東京駅から名古屋駅までのルート</h1>
      <iframe
        title="Tokyo to Nagoya driving route"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
      />
    </div>
  );
}

export default App;
