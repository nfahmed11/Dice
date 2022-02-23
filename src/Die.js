import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import "./Die.css"

class Die extends Component {
    
    render () {

        
      const dice = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]

      
      return (
            <div>
      
              <div className="Die flex flex-col flex-space-width items-center justify-center  py-2">
                <FontAwesomeIcon className={this.props.roll? "shake": ""}icon={dice[this.props.face -1] } />
              </div>
            </div>
        ) 
    }
}
 
export default Die
