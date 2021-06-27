import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: Login, exact: true },
  { path: '/register', Component: Register },
  { path: '/main', Component: Main },
  { path: '/search', Component: Search },
];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ Component, ...routeProps }) => (
          <Route key={routeProps.path} {...routeProps}>
            <Component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
