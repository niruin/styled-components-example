import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Routes} from './router';

import {LayoutHeader, LayoutContent, LayoutFooter} from './components/layout';

function PageLoader() {
  return <div>loading...</div>;
}

function NotFound() {
  return <div>404</div>;
}

function RootRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {Routes.map(({path, exact, component}) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export function App() {
  return (
    <>
      <LayoutHeader />
      <LayoutContent>
        <RootRouter />
      </LayoutContent>
      <LayoutFooter />
    </>
  );
}
