import './App.css';
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import withRouter from "./Context/withRouter"
import "./App.css"
// import AppRoutes from './AppRoutes';
import Schedule from './Pages/Schedule';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Speakers from './Pages/Speakers';
import Guidelines from './Pages/Guidelines';

function App() {
  const helmetContext = {}
  function ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return <>{props.children}</>;
  };
  const ScrollToTopMount = withRouter(ScrollToTop)
  return (
    <HelmetProvider context={helmetContext}>
      <Router >
        <Navbar />
        <ScrollToTopMount>
          <Home />
          <About />
          <Speakers />
          <Schedule />
          <Guidelines />
          <Register />
          <Contact />
        </ScrollToTopMount>
      </Router>
    </HelmetProvider>
  );
}

export default App;
