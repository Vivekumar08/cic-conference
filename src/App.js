import './App.css';
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import withRouter from "./Context/withRouter"
import AppRoutes from './AppRoutes';

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
          <AppRoutes />
        </ScrollToTopMount>
      </Router>
    </HelmetProvider>
  );
}

export default App;
