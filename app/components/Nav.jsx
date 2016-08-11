let React = require('react');
let {Link} = require('react-router');

let Nav = (props) => {
  return (
    <div>
      <h1>This is the Nav bar</h1>
      <Link to='/'>Home page</Link>
      <Link to='about'>about page</Link>
    </div>
  )
};

module.exports = Nav;
