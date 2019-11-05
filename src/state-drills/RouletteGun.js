import React from 'react';

class RouletteGun extends React.Component{
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    componentWillUnmount(){
        clearInterval(this.timeout);
    }

    componentDidMount(){
        const p1 = new Promise((resolve)=>{

            this.timeout = setInterval(()=>{
                const newChamber = Math.ceil(Math.random() * 8);
                this.setState({chamber: newChamber, spinningTheChamber: false});
                resolve();
            }, 2000);
        })

        p1.then(response => {this.componentWillUnmount()})
        
    }

    renderDisplay(){
        if(this.state.spinningTheChamber === true){
            return "spinning the chamber and pulling the trigger! ...."
        }else if(this.props.bulletInChamber === this.state.chamber){
            return "BANG!!!"
        }else{
            return "You're safe!!"
        }
    }

    pullTheTrigger=()=>{
        this.setState({spinningTheChamber: true});
        this.componentDidMount();   
    }

    render(){
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.pullTheTrigger}>Pulling the trigger</button>
            </div>
        )
    }
}

export default RouletteGun;