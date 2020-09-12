import React, { Component } from 'react';
import { UncontrolledCollapse, Button } from 'reactstrap';
import CrimeTable from './CrimeTable/CrimeTable';
import './Crimes.css'
export class Crimes extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoaded: false, lat: '',long:'', data: null,crimeScore:null,settingUp:false };
    }

    createScoreElement(){
        let element;
        if(this.props.letterGrade){
            switch(this.props.letterGrade) {
                case "A":
                  element = <h2 className="good center">A</h2>
                  break;
                case "B":
                  element = <h2 className="good center">B</h2>
                  break;
                case "C":
                    element = <h2 className="ok center">C</h2>
                  break;
                case "D":
                  element = <h2 className="bad center">D</h2>
                  break;
                case "F":
                  element = <h2 className="bad center">F</h2>
                  break;
              } 
        }else{
            element = <></>
        }
            return element;
      }


    render(){
        let scoreElement = this.createScoreElement();
        console.log()
            return (
                <div>
                    <h1 className="center">Crime Score</h1>
                    {scoreElement}
                    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                        View Crimes
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <CrimeTable crimedata= {this.props.data}/>
                    </UncontrolledCollapse>
                </div>
            );
       
    
    }
}
export default Crimes;