import React from 'react';

class Section extends React.Component{
    static defaultProps = {
        title: "",
        content: ""
    }

    render(){
        const selected = this.props.selectedIndex === this.props.id;
        return (
            <li onClick={this.props.handler} id={this.props.id}>
                {this.props.title}
                {!!selected && (
                    <p>{this.props.content}</p>
                )}
            </li>
        )
    }
}

export default Section;