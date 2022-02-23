import React, { Component } from 'react';
import Die from "./Die";
import "./Rolldie.css";



    class Rolldie extends Component {
  static defaultProps = {
    sides: ["1", "2", "3", "4", "5", "6"]
  };
    
   constructor(props) {
    super(props);
    this.state = { die1: "1", die2: "1", rolling:false };
    this.roll = this.roll.bind(this);
  }

    

    roll(){
        const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

   

  
        const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
  

        this.setState({ rolling:true  });

    setTimeout(() => {
        this.setState({ die1: newDie1, die2: newDie2, rolling:false  });
        
    }, 1000);
    }

    render() { 
        return (
            <div className="Rolldie">
                <h1>Roll the Dice!</h1>
                    <div className="Rolldie-die">
                        <Die face={this.state.die1} roll={this.state.rolling}/>
                        <Die face={this.state.die2} roll={this.state.rolling}/>
                    </div>
                    
                <button className="Rolldie-button" disabled={this.state.rolling} onClick={this.roll}>{this.state.rolling? "Rolling..." : "Click to Roll!"}</button>
            </div>
        );
    }
}
 
export default Rolldie;








