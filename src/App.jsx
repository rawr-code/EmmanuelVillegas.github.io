import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles/reset.scss';

// Layout
import Layout from './components/Layout';

// Pages
import { Home, About, Projects } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
