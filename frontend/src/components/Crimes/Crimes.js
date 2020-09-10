import React, { Component } from 'react';
import { UncontrolledCollapse, Button } from 'reactstrap';
import CrimeTable from './CrimeTable/CrimeTable';
import './Crimes.css'
import { useForkRef } from '@material-ui/core';
export class Crimes extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoaded: false, lat: '',long:'', data: null,crimeScore:null, };
    }


    componentDidMount() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"lat":"37.72694991292525","long":"-122.47603947349434"});
        var requestOptions = {
            method: 'POST',
            headers:myHeaders,
            body: raw,
            };


        fetch("/radiusQuery", requestOptions)
        .then(res => res.json())
            .then(data => {
                this.setState({ data: data })
            })
            .then(()=>{
                this.calculateScore();
            })
            .catch(console.log)
    }

    calculateScore(){

        let currentData = this.state.data;
        console.log(currentData)
                let currentScore = 0;
        for(let idx in currentData){
            currentScore+= parseInt(currentData[idx].CrimeRating.S)
        }
        console.log(currentScore)

        if(currentScore < 1000){
            this.setState({crimeScore:"A"})
        }else if(currentScore < 1500){
            this.setState({crimeScore:"B"})
        }else if(currentScore < 2000){
            this.setState({crimeScore:"B"})
        }else if(currentScore < 3000){
            this.setState({crimeScore:"C"})
        }else if(currentScore < 3500){
            this.setState({crimeScore:"D"})
        }else{
            this.setState({crimeScore:"F"})
        }
    }

    createScoreElement(){
        let element;
        if(this.state.crimeScore){
            switch(this.state.crimeScore) {
                case "A":
                  element = <h2 className="good center">{this.state.crimeScore}</h2>
                  break;
                case "B":
                  element = <h2 className="good center">{this.state.crimeScore}</h2>
                  break;
                case "C":
                    element = <h2 className="ok center">{this.state.crimeScore}</h2>
                  break;
                case "D":
                  element = <h2 className="bad center">{this.state.crimeScore}</h2>
                  break;
                case "F":
                  element = <h2 className="bad center">{this.state.crimeScore}</h2>
                  break;
              } 
        }else{
            element = <></>
        }
            return element;
    }



    render(){
        let score = this.createScoreElement()
        if(this.state.crimeScore){
            return (
                <div>
                    <h1 className="center">Crime Score</h1>
                    {score}
                    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                        View Crimes
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                        <CrimeTable crimedata= {this.state.data}/>
                    </UncontrolledCollapse>
                </div>
            );
        }
        else{
            return(<></>)
        }
    
    }
}
export default Crimes;