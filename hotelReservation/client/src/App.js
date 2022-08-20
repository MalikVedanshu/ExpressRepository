import React, { Children } from "react";
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData : {
        fname : "",
        lname : "",
        address : "",
        zip : "",
        city : "",
        state : "",
        eaddress : "",
        phone : "",
        checkindate : "",
        checkoutdate : "",
        checkintime : "",
        checkouttime : "",
        room : [],
        specialinstruction : ""
      },
    //   roomInfo : [[{Room1 : ''}, {adultroom1 : ''}, {childrenroom1 : ''}]]
    raumInfo : [['','', '']]
    }
  }
  onTrigger = (event) => {
    console.log(event.target.name, event.target.value)
  }
  onRoomNumSelect = (even) => {
    if(even.target.value > 1){
    let arr = [];
    for(let i = 0; i < even.target.value; i++) {
        arr.push(['','',''])
    }
    this.setState({
        raumInfo : arr
    })
    }
  }

  render () {
    return(
      <>
      <div className="testbox">
    <form>
      <div className="banner">
        <h1>Hotel Reservation Form</h1>
      </div>
      <br/>
      <fieldset>
        <legend>Reservation Details</legend>
        <div className="columns">
          <div className="item">
            <label htmlFor="fname">First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" onChange={this.onTrigger}/>
          </div>
          <div className="item">
            <label htmlFor="lname"> Last Name<span>*</span></label>
            <input id="lname" type="text" name="lname" onChange={this.onTrigger} />
          </div>
          <div className="item">
            <label htmlFor="address">Address<span>*</span></label>
            <input id="address" type="text"   name="address" onChange={this.onTrigger} />
          </div>
          <div className="item">
            <label htmlFor="zip">Zip Code<span>*</span></label>
            <input id="zip" type="text" name="zip" required onChange={this.onTrigger} />
          </div>
          <div className="item">
            <label htmlFor="city">City<span>*</span></label>
            <input id="city" type="text" name="city" onChange={this.onTrigger} />
          </div>
          <div className="item">
            <label htmlFor="state">State<span>*</span></label>
            <input id="state" type="text" name="state" onChange={this.onTrigger} />
          </div>
          <div className="item">
            <label htmlFor="eaddress">Email Address<span>*</span></label>
            <input id="eaddress" type="text" name="eaddress" onChange={this.onTrigger} />
          </div>
          <div className="item">
            <label htmlFor="phone">Phone<span>*</span></label>
            <input id="phone" type="tel" name="phone" onChange={this.onTrigger} />
          </div>
          </div>
      </fieldset>
      <br/>
      <fieldset>
      <legend>Dates</legend>
      <div className="columns">
      <div className="item">
      <label htmlFor="checkindate">Check-in Date <span>*</span></label>
      <input id="checkindate" type="date" name="checkindate" onChange={this.onTrigger} />
      <i className="fas fa-calendar-alt"></i>
      </div>
      <div className="item">
      <label htmlFor="checkoutdate">Check-out Date <span>*</span></label>
      <input id="checkoutdate" type="date" name="checkoutdate" onChange={this.onTrigger} />
      <i className="fas fa-calendar-alt"></i>
      </div>
      <div className="item">
      <p>Check-in Time </p>
      <select name="checkintime" onChange={this.onTrigger} >
      <option value="">Select time</option>
      <option value="Morning" >Morning</option>
      <option value="Afternoon">Afternoon</option>
      <option value="Evening">Evening</option>
      </select>
      </div>
      <div className="item">
      <p>Check-out Time </p>
      <select name="checkouttime" onChange={this.onTrigger}>
      <option  value="">Select time</option>
      <option value="Morning" >Morning</option>
      <option value="Afternoon">Afternoon</option>
      <option value="Evening">Evening</option>
      </select>
      </div>
      <div className="item" id="chwidth"> 
      <label htmlFor="room">Number of rooms</label>
      <input id="room" type="number" name="room" min="1" onChange={this.onRoomNumSelect} />
      </div>
      <div className="item">
    {
        // this.state.roomInfo.map((ele) => {
        //     ele.map((elem,idx) => (
        //         <div>{idx}</div>
        //     ))
        // })
        this.state.raumInfo.map((ele) => (
            <div className="item">
                <select name={ele}>
                {
                    ele.map((elem) => (
                        <>
                        <option value="">Type </option>
                        <option value="Standard">Standard</option>
                        <option value="Deluxe">Deluxe</option>
                        <option value="Suite">Suite</option>
                        </>
                    ))
                }
                </select>
            </div>
        ))
    }
    </div>

      </div>
      <div className="item">
      <label htmlFor="instruction">Special Instructions</label>
      <textarea id="instruction" rows="3" name="specialinstruction" onChange={this.onTrigger}></textarea>
      </div>
      </fieldset>
      <div className="btn-block">
      <button type="submit" href="/">Submit</button>
      </div>
    </form>
    </div>
      </>
    )
  }
}
export default App;