var React=require('react');
var ReactDom=require('react-dom');

var objOne={
    name:"Ben",
    location:"Seattle"
}
var objTwo={
    age:24,
    ...objOne
}
console.log(objTwo);
ReactDom.render(
    <h1>This is the Boilerplate</h1>,
    document.getElementById('app')
);