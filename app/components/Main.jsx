let React = require('react');
let Nav = require('Nav');

let Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

module.exports = Main;
