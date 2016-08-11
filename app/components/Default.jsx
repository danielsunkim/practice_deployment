let React = require('react');
let ButtonCounter = require('ButtonCounter');


let Default = React.createClass({

  getInitialState: function () {
    return {
      count: 0,
      words: 'Come on and click the button!'
    }
  },

  randomHappy: function () {
    let list = ['yipee!', 'yahoo!', 'yeah!',
                'keep going!', 'awesome!', 'keep clicking!',
                'you can do it!', 'you know what I mean?', 'yes!',
                'are you fingers getting tired?', 'I can do this all day!',
                'yeah... I am getting hungry!', 'you want to bet $5 I can keep going?',
                'I am still here cheering you on!', 'stay hungry, stay foolish!',
                'dreams do come true!', 'wooo hoo!', 'YES!'
              ];
    let random = Math.floor(Math.random() * list.length);
    return list[random];
  },

  increase: function () {
    this.setState({
      count: this.state.count += 1,
      words: this.randomHappy()
    });
  },

  decrease: function () {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count -= 1,
        words: "Awww... but I want to go up! ;( "
      });
    }
  },

  render: function () {
    return (
      <div>
        <h1>Let us play the clicky game ;D</h1>
        <ButtonCounter words={this.state.words} count={this.state.count} increase={this.increase} decrease={this.decrease} />
      </div>
    );
  }
})

module.exports = Default;
