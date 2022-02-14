import Header from './components/header/Header';
import './App.css';
import Card from './components/Card/Card';
import data from './components/data/data'
import Footer from './components/Footer/Footer';

function App() {
  let travelData = data.map(item=>{
    return (
      <Card
      key={item.title}
      img= {item.imageUrl}
      title={item.title}
      location={item.location}
      googleMaps={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      ></Card>

      
    )
  })
  
  return (
    <div className="App">
      <Header></Header>
      <section>{travelData}</section>
      <Footer></Footer>
    </div>
  );
}

export default App;
