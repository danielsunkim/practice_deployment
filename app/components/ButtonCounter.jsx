let React = require('react');

let ButtonCounter = ({words, count, increase, decrease}) => {
    return (
      <div>
        <h2>{count}</h2><h5>{words}</h5>
        <button onClick={increase} >Increase</button>
        <button onClick={decrease} >Decrease</button>
      </div>
    )
}
module.exports = ButtonCounter;
