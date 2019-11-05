import React from 'react';

class HelloWorld extends React.Component{
    state = {
        who: 'world'
      };

      handleClicks = (event) => {
            this.setState({who: event.target.id});
      }
    
        render() {
          return (
            <div id="hello-world">
              <p>Hello, {this.state.who}!</p>
              <button onClick={this.handleClicks} id="friend">Friend</button>
              <button onClick={this.handleClicks} id="React">React</button>
              <button onClick={this.handleClicks} id="world">World</button>
            </div>
          )
        }
    }

export default HelloWorld;