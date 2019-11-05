import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
    };
    
    handleButtonClick = (event) => {
        const clicked = event.target.id
        this.setState({currentTabIndex: clicked})
        console.log(`button ${clicked} was clicked`)
    }
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} id={index} onClick={this.handleButtonClick}>
            {tab.name}
          </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
    }

    render() {
        return (
          <div>
            {this.renderButtons()}
            {this.props.tabs.length && this.renderContent()}
          </div>
        )
    }
  }

export default Tabs;