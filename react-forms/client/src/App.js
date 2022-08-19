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
        dateofbirth : '',
        profileurl : '',
        interests : [],
        bio : ''
      }
    }
    
  }


  onChange = (ev) => {
      this.setState ({
        userdata : {
          ...this.state.userdata, 
          [ev.target.name]: ev.target.value.toUpperCase()
        }
      })
    }
    onCheck = (even) => {
      let interestArr = this.state.userdata.interests;
      even.target.checked ? interestArr.push(even.target.value) : interestArr.splice(interestArr.indexOf(even.target.value),1)
      this.setState ({
        userdata : {
          ...this.state.userdata,
        interests : interestArr
        }
      })
    }
  onSubmit = (eve) => {
    eve.preventDefault();
    console.log(this.state.userdata);
  }
  render() {
    const { fname, lname, email,profileurl, bio} = this.state.userdata;
    return(
      <>
      <center>
        <form>
        <h1> Customer Form </h1>
        <label htmlFor="fname">First Name : </label>
        <input type="text" name="fname" onChange={this.onChange} required value={fname}/><br /><br />
        
        <label htmlFor="lname"> Last name : </label>
        <input type="text" name="lname" onChange={this.onChange} required value={lname}/><br /><br />
        
        <label htmlFor = "email">Email Address : </label>
        <input type="email" name="email" onChange={this.onChange} required value={email}/><br /><br />
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
        <input type="url" name = "profileurl" onChange={this.onChange} value = {profileurl}/> <br /><br />
        
        <label htmlFor="interests"> Interests </label> <br />
        <input type="checkbox" name="interests" value="Management" onChange={this.onCheck} />
        <label htmlFor="skills"> Management </label>
        <input type="checkbox" name="interests" value="CustomerSupport" onChange={this.onCheck} />
        <label htmlFor="skills"> Customer-Support </label>
        <input type="checkbox" name="interests" value="InformationTechnology" onChange={this.onCheck} />
        <label htmlFor="skills"> Information-Technology </label>
        <input type="checkbox" name="interests" value="Teaching" onChange={this.onCheck} />
        <label htmlFor="skills"> Teaching </label> <br /> <br />

        <label htmlFor="bio">Enter your Bio : </label>
        <textarea name="bio" rows="4" cols = "50" onChange={this.onChange} value = {bio} /> <br /><br />

        <input type="submit" value = "Submit" onClick={this.onSubmit}/>

        </form>
        </center>
      </>
    )
  }
}

export default App;
