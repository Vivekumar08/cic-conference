import React from "react";
import Home from "./Pages/Home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import withRouter from "./Context/withRouter";
import { Route, Routes } from "react-router-dom";

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