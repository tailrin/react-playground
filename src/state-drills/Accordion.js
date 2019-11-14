import React from 'react';
<<<<<<< HEAD
=======
import Section from './Section.js';
>>>>>>> 49d20339081b25682e6a38634fc6685368697eea

class Accordion extends React.Component{
    static defaultProps = {
        sections: []
    }

<<<<<<< HEAD
    
=======
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
>>>>>>> 49d20339081b25682e6a38634fc6685368697eea
}

export default Accordion;