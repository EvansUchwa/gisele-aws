import { Route, Routes, useLocation } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./routes/Home";
import Review from "./routes/Review";
import './assets/styles/default.css';
import './assets/styles/slick.min.css';

import './assets/styles/uis.css';
import './assets/styles/review.css';
import './assets/styles/index.css';
import './assets/styles/places.css';

import { PhHeart, PhHouseSimple, PhMapTrifold, RiStarSmileFill } from "./components/icons";
import Places from "./routes/Places";


function App() {
  const location = useLocation();

  const appRoutes = [
    { icon: <PhHouseSimple />, label: 'Accueil', link: '/', el: <Home /> },
    { icon: <PhMapTrifold />, label: 'Lieux', link: '/places', el: <Places /> },
    { icon: <RiStarSmileFill />, label: 'Notes', link: '/review', el: <Review /> },
  ]
  return (
    <div className="App">
      <Routes>
        {
          appRoutes.map((item, i) => <Route to='/review' key={'app route nb' + i}
            path={item.link} element={item.el} />)
        }
      </Routes>
      <nav className="bottomNav">
        {
          appRoutes.map((item, i) => <Link to={item.link} key={'app route for nav nb' + i}
            className={location.pathname === item.link && 'routeActive'}>
            {item.icon}
            <span>{item.label}</span>
          </Link>)
        }
      </nav>
    </div>
  );
}

export default App;
