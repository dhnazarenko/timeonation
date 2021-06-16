import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import styles from './App.module.css';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: Login, exact: true },
  { path: '/register', Component: Register },
];

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
