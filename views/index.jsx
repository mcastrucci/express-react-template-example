const React = require('react');


class HelloMessage extends React.Component {
    render() {
      return <div>Hello {this.props.name}, this is a react component</div>
    }
  }
  
  module.exports = HelloMessage