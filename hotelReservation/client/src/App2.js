import React from "react";
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
        room : "",
        numofadults : "",
        numofchildren : "",
        roomonetype : "",
        roomtwotype : "",
        specialinstruction : ""
      },
      roomInfo : []
    }
  }
  onTrigger = (event) => {
    console.log(event.target.name, event.target.value)
  }
  onRoomNumSelect = (even) => {
    let arr = [];
    for(let i = 0; i < even.target.value; i++) {
      let obj = {[`room${i+1}type`] : '', [`adultsinroom${i+1}`] : '',[`childreninroom${i+1}`] : ''};
      arr.push(obj);
    }
    this.setState({
      roomInfo : arr
    })
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

      {
        this.state.roomInfo.map(elemen,idx => (
          <>
            <div className="item">
            <p>Room {Object.values[elemen[0]]}</p>
            <select name={Object.keys(elemen[0])} onChange={this.onTrigger}>
            <option value="">Type </option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            </select>
            </div>
            <div className="item"></div>
            <div className="item">
            <select name="numofadults" onChange={this.onTrigger}>
            <option value="" >Number of adults</option>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            </div>
            <div className="item">
            <select name="numofchildren" onChange={this.onTrigger} >
            <option value="">Number of children</option>
            <option value="0" >0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            </div>
          </>
          
        ))
      }

      <div className="item">
      <p>Room 1 type</p>
      <select name="roomonetype" onChange={this.onTrigger}>
      <option value="">Type </option>
      <option value="Standard">Standard</option>
      <option value="Deluxe">Deluxe</option>
      <option value="Suite">Suite</option>
      </select>
      </div>
      <div className="item"></div>

      <div className="item">
      <select name="numofadults" onChange={this.onTrigger}>
      <option value="" >Number of adults</option>
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>
      </div>

      <div className="item">
      <select name="numofchildren" onChange={this.onTrigger} >
      <option value="">Number of children</option>
      <option value="0" >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>
      </div>
      
          
      <div className="item">
      <p>Room 2 type</p>
      <select name="roomtwotype" onChange={this.onTrigger}>
      <option value="">Type</option>
      <option value="Standard">Standard</option>
      <option value="Deluxe">Deluxe</option>
      <option value="Suite">Suite</option>
      </select>
      </div>
      <div className="item"></div>
      <div className="item">
      <select name="numofadults" onChange={this.onTrigger}>
      <option value="" >Number of adults</option>
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>
      </div>

      <div className="item">
      <select name="numofchildren" onChange={this.onTrigger} >
      <option value="">Number of children</option>
      <option value="0" >0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>
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