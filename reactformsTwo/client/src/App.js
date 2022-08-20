import React from "react";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userFeedback : {
        feedbacktype : '',
        inquiryon : '',
        salutation : '',
        fname : '',
        lname : '',
        email : '',
        phonenumber : '',
        staffname : '',
        branch : '',
        feedback : ''
      }
    }
  }
  onTrigger = (event) => {
    // console.log(event.target.name, event.target.value);
    this.setState ({
      userFeedback : {
        ...this.state.userFeedback, [event.target.name] : event.target.value.toUpperCase()
      }
    })
  }

  render() {
    return (
      <>
        <div className = "testbox">
          <form action="/">
            <h1>Bank Customer Feedback Form</h1>
            <h4>Type of Feedback<span>*</span></h4>
            <select name="feedbacktype" onChange={this.onTrigger}>
              <option value=""></option>
              <option value="Enquiry">Enquiry</option>
              <option value="Complaint">Complaint</option>
              <option value="Compliment">Compliment</option>
              <option value="Suggestion">Suggestion</option>
            </select>
            <h4>Feedback/Enquiry on<span>*</span></h4>
            <select name = "inquiryon" onChange={this.onTrigger}>
              <option value=""></option>
              <option value="Credit and Debit Cards">Credit and Debit Cards</option>
              <option value="Deposit">Deposit</option>
              <option value="Housing and Renovation Loan">Housing and Renovation Loan</option>
              <option value="iBanking">iBanking</option>
              <option value="Treasures">Treasures</option>
            </select>
            <h4>Name<span>*</span></h4>
            <div className="title-block">
              <select name="salutation" onChange={this.onTrigger}>
                <option defaultValue="title" >Title</option>
                <option value="ms">Ms</option>
                <option value="miss">Miss</option>
                <option value="mrs">Mrs</option>
                <option value="mr">Mr</option>
              </select>
              <input className="name" type="text" name="fname" placeholder="First" onChange={this.onTrigger} />
              <input className="name" type="text" name="lname" placeholder="Last" onChange={this.onTrigger} />
            </div>
            <h4>Email Address<span>*</span></h4>
            <input type="text" name="email" onChange={this.onTrigger}/>
            <h4>Contact Number<span>*</span></h4>
            <input type="text" name="phonenumber" onChange={this.onTrigger}/>
            <h4>Name of Staff who served me</h4>
            <input type="text" name="staffname" onChange={this.onTrigger}/>
            <h4>Branch visited</h4>
            <input type="text" name="branch" onChange={this.onTrigger}/>
            <h4>Feedback/Enquiry</h4>
            <p className="small">Please do not indicate your account or credit card number and banking instruction in your comments. Thank you for your time and valuable feedback.</p>
            <textarea rows="5" name="feedback" onChange={this.onTrigger}></textarea>
            <div className="btn-block">
              <button type="submit" href="/">Send Feedback</button>
            </div>
          </form>
        </div>
      </>
    )
  }


}
export default App;