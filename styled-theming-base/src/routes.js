import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Home from './pages/Home';
import Post from './pages/Post';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';

export default function Routes() {
  const location = useLocation();
  const transition = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(50px)' },
    exitBeforeEnter: true,
    config: {
      duration: 200,
    },
  });

  return transition((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/posts"
          component={Posts}
        />
        <Route
          path="/posts/:id"
          component={Post}
        />
        <Route
          path="*"
          component={NotFound}
        />
      </Switch>
    </animated.div>
  ));
}
