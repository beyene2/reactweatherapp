var React=require('react');
var ReactDom=require('react-dom');
var Main=require("Main");
var Nav=require("Nav");

var {Route, Router,IndexRoute, hashHistory}=require("react-router");

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>,
        </Route>
    </Router>,
    document.getElementById('app')
);