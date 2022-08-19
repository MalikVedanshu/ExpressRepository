import React, { Component } from "react";
import './App.css';
class App extends Component{
  constructor() {
    super();
    this.state = {
      userdata : {
        fname : '',
        lname : '',
        email : '',
        gender : '',
        techstack : '',
        dob : '',
        profile : '',
        bio : ''
      }
    }

  }
  onChange = (ev) => {
    console.log(ev.target.name,ev.target.value);
  }
  render() {
    return(
      <>
      <center>
        <form>
        <h1> Customer Form </h1>
        <label htmlFor="fname">First Name : </label>
        <input type="text" name="fname" onChange={this.onChange} /><br /><br />
        
        <label htmlFor="lname"> Last name : </label>
        <input type="text" name="lname" onChange={this.onChange}/><br /><br />
        
        <label htmlFor = "email">Email Address : </label>
        <input type="email" name="email" onChange={this.onChange} /><br /><br />
        {/* <input type="radio" id="gender" name="fav_language" value="Male" />
        <label htmlFor="html">Male</label><br></br> */}
        
        <input type = "radio" name="gender" onChange={this.onChange} value = "Male" /><label htmlFor="male"> Male </label>
        <input type = "radio" name="gender" onChange={this.onChange} value = "Female" /><label htmlFor="female"> Female </label>
        <input type = "radio" name="gender" onChange={this.onChange} value = "Others"/><label htmlFor="others"> Others </label><br /><br />

        <label htmlFor= "techStack">Enter your Tech Stack : </label>
        <select name="techstack" onChange={this.onChange}>
          <option>None</option>
          <option value="PHP">PHP</option>
          <option value="JS">JS</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="Javascript">Javascript</option>
        </select> <br /><br />

        <label htmlFor="date">Enter DOB : </label>
        <input type="date" name = "dateofbirth" onChange={this.onChange} /> <br /><br />

        <label htmlFor="profile">Enter your profile URL : </label>
        <input type="url" name = "profileurl" onChange={this.onChange} /> <br /><br />

        <label htmlFor="bio">Enter your Bio : </label>
        <textarea name="bio" rows="4" cols = "50" onChange={this.onChange} /> <br /><br />

        <input type="submit" value = "Submit" />

        </form>
        </center>
      </>
    )
  }
}

export default App;
