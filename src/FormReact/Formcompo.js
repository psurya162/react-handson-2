import React, { Component } from 'react';
// import './App.css'

export default class Handson extends Component {
  state = {
    name: '',
    department: '',
    rating: '',
    data: []
  };

  handleClick = () => {
    const obj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating
    };

    const newData = [...this.state.data, obj];

    this.setState({ data: newData, name: '', department: '', rating: '' }, () => {
      console.log(this.state.data);
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
        
      <>
      <div className="main">

        
      </div>
       <h1>EMPLOYEE FEEDBACK FORM</h1>
      <div className='mainContainer'>
       
      <label htmlFor="name">Name :</label>
        <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />

        <label htmlFor="department">Department : </label>
        <input name="department" placeholder="Department" value={this.state.department} onChange={this.handleChange} />

        <label htmlFor="rating">Rating :</label>
        <input name="rating" placeholder="Rating" value={this.state.rating} onChange={this.handleChange} /><br />

        <button onClick={this.handleClick}>Submit</button>
      </div>
       
        <div className='SecondContainer'>
        {this.state.data.map((item, index) => {
          return (
            <div key={index} className='data'>
              <h1 className='data2'> Name : {item.name} |</h1>
              <h1 className='data2'>Department: {item.department} |</h1>
              <h1 className='data2'>Rating: {item.rating}</h1>
            </div>
          );
        })}
        </div>
        
      </>
    );
  }
}
