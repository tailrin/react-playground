import React from 'react';

class Bomb extends React.Component{
    state = {
        count: 0
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            const newCount = this.state.count + 1;
            this.setState({count: newCount});
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    getSound(){
        if(this.state.count === 8){this.componentWillUnmount(); return 'BOOM!!!!'}
        if(this.state.count % 2 === 0){
            return 'tick'
        }
        return 'tock'
    }

    render(){
        return (
            <div>
                <p>{this.getSound()}</p>
            </div>
        )
    }
}

export default Bomb;