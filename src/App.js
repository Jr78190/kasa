// import './App.css';
// import Header from './compenents/Header/Header';
// import Footer from './compenents/Footer/Footer'
// import Home from './pages/Home/Home';

// import CardGrid from './compenents/Card/CardG';
// import { BrowserRouter as Router } from 'react-router-dom';


// function App() {
//   return (
//   <Router>
//     <div className="app">
//       <Header />
//       <Home />
//       <CardGrid /> 
//       <Footer />
//     </div>
//   </Router>
//   );
// }

// export default App;
// src/App.js
import './App.css';
import './compenents/Footer/Footer.css';
import RouteConfig from './compenents/routes';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <RouteConfig />
    </div>
  );
}

export default App;

