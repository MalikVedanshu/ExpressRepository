import React from "react";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData : []
    }
  }

  render() {
    return (
      <>
        <div className = "testbox">
          <form action="/">
            <h1>Bank Customer Feedback Form</h1>
            <h4>Type of Feedback<span>*</span></h4>
            <select>
              <option value=""></option>
              <option value="">Enquiry</option>
              <option value="2">Complaint</option>
              <option value="3">Compliment</option>
              <option value="4">Suggestion</option>
            </select>
            <h4>Feedback/Enquiry on<span>*</span></h4>
            <select>
              <option value=""></option>
              <option value="1">Credit and Debit Cards</option>
              <option value="2">Deposit</option>
              <option value="3">Housing and Renovation Loan</option>
              <option value="4">iBanking</option>
              <option value="5">Treasures</option>
            </select>
            <h4>Name<span>*</span></h4>
            <div className="title-block">
              <select>
                <option defaultValue="title" >Title</option>
                <option value="ms">Ms</option>
                <option value="miss">Miss</option>
                <option value="mrs">Mrs</option>
                <option value="mr">Mr</option>
              </select>
              <input className="name" type="text" name="name" placeholder="First" />
              <input className="name" type="text" name="name" placeholder="Last" />
            </div>
            <h4>Email Address<span>*</span></h4>
            <input type="text" name="name" />
            <h4>Contact Number<span>*</span></h4>
            <input type="text" name="name" />
            <h4>Name of Staff who served me</h4>
            <input type="text" name="name" />
            <h4>Branch visited</h4>
            <input type="text" name="name" />
            <h4>Feedback/Enquiry</h4>
            <p className="small">Please do not indicate your account or credit card number and banking instruction in your comments. Thank you for your time and valuable feedback.</p>
            <textarea rows="5"></textarea>
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