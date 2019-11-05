import React from 'react';

class Counter extends React.Component {
    state = {
      who: 'world'
    };
  
    handleFriend= () => {
        this.setState({who: 'friend'});
    }
    handleReact= () => {
        this.setState({who: 'React'});
    }
    
    handleWorld= () => {
        this.setState({who: 'world'});
    }

      render() {
        return (
          <div>
            <p>Hello, {this.state.who}!</p>
            <button onClick={this.handleFriend}>Friend</button>
            <button onClick={this.handleReact}>React</button>
            <button onClick={this.handleWorld}>World</button>
          </div>
        )
      }
  }

  export default Counter;