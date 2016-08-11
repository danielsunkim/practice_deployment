var React = require('react');
var ReactDOM = require('react-dom');
let Main = require('Main');
let About = require('About');
let Default = require('Default');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <IndexRoute component={Default} />
    </Route>
  </Router>,
    document.getElementById('app')
);
