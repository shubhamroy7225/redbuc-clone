import React, { Component } from 'react';
const axios = require("axios");
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          age: null,
          passenger_number:null,
          Mobile:null,
          fair:this.props.fare,
          seat:this.props.seatNumber,
          busId:this.props.busId,
          source:this.props.source,
          destination:this.props.destination,
          date:this.props.date

        };
      }
      mySubmitHandler = (event) => {
        console.log(this.state.busId)
        event.preventDefault();
        
              axios
              .post("http://localhost:5000/bus/Tickets", {
                data: {
                   username: this.state.username,
                   age: this.state.age,
                 passenger_number:this.state.passenger_number,
                    Mobile:this.state.Mobile,
                   fare:this.state.fair,
                    seatNumber:this.state.seat,
                    source:this.state.source,
                    destination:this.state.destination,
                    date:this.state.date
                       
                  
                },
              })
              .then(
                (response) => {
                  console.log(response);
                  alert('ticket booked')
                  localStorage.setItem("username", this.state.username);
                  localStorage.setItem("busId", this.state.busId);
                  localStorage.setItem("source", this.state.source);
                  localStorage.setItem("destination", this.state.destination);
                  localStorage.setItem("date", this.state.date);
                  
                },
                (error) => {
                  console.log(error);
                }
              );



              axios
    .put("http://localhost:5000/bus/Seats", {
      params: {
        busId : this.state.busId
        
      },
    })
    .then(
      (response) => {
        console.log(response);
       
      },
      (error) => {
        console.log(error);
      }
    )
          
            }
         
      
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      } 
      render() {
        return (
          <form onSubmit={this.mySubmitHandler}>
          <p>Enter your name:</p>
          <input className='form-input form-control'
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Enter your age:</p>
          <input className='form-input form-control'
            type='text'
            name='age'
            onChange={this.myChangeHandler}
          />

         <p>Number of Passengers:</p>
          <input className='form-input form-control'
            type='text'
            name='passenger_number'
            onChange={this.myChangeHandler}
          />

           <p>Mobile Number:</p>
          <input className='form-input form-control'
            type='text'
            name='Mobile'
            onChange={this.myChangeHandler}
          />
          <br/>
            <input className="proceed-button" type='submit' />
          </form>
        );
      }
    }
 
export default UserInfo;