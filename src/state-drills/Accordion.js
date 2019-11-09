import React from 'react';
import Section from './Section.js';

class Accordion extends React.Component{
    static defaultProps = {
        sections: []
    }

    state = {
        selectedIndex: 0
    }

    handleClick = event => {
        this.setState({selectedIndex: parseInt(event.target.id)})
    }

    renderContent(){
        return this.props.sections.map((section, i) => {
            return (
                <Section handler={this.handleClick.bind(this)} id={i} key={i} title={section.title} content={section.content} selectedIndex={this.state.selectedIndex}/>
            )
        })
        
    }

    render(){
        
        return (
            <ul>
                {!!this.props.sections.length && (
                    this.renderContent()
                )}
            </ul>
        )
    }
}

export default Accordion;