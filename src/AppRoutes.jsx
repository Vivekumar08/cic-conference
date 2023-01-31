import React from "react";
import Home from "./Pages/Home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import withRouter from "./Context/withRouter";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Schedule from "./Pages/Schedule";

const AnimatedSwitch = withRouter(({ router }) => (
  <TransitionGroup>
    <CSSTransition
      key={router.location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" exact />
        <Route element={<Contact />} path="/contact" exact />
        <Route element={<Register />} path="/register" exact />
        <Route element={<Schedule />} path="/schedule" exact />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

const AppRoutes = () => {
  return (
    <div>
      <AnimatedSwitch />
    </div>
  );
};

export default AppRoutes;