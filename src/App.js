import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "pivotal-ui/css/copy-to-clipboard";

const App = () => {
  const routeComponents = routes.map(({ path, component, label }) => (
    <Route exact path={path} component={component} key={label} />
  ));
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar></Navbar>
      <Suspense fallback={"Loading..."}>
        <Switch>{routeComponents}</Switch>
      </Suspense>
    </div>
  );
};

export default App;
