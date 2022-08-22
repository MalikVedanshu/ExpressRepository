import React from "react";
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {
        fname: "",
        lname: "",
        address: "",
        zip: "",
        city: "",
        state: "",
        eaddress: "",
        phone: "",
        checkindate: "",
        checkoutdate: "",
        checkintime: "",
        checkouttime: "",
        roomnums: "",
        roominfo: {},
        specialinstruction: ""
      },
      raumInfo: [],
      renderRooms : false
    }
  }
  onTrigger = (event) => {
    console.log(event.target.name, event.target.value)
    this.setState({
      userData: { ...this.state.userData, [event.target.name]: event.target.value.toUpperCase() }
    })
  }
  onRoomNumSelect = (even) => {

      if (even.target.value >= 0) {
        let obj = this.state.userData.roominfo;
        let arr = this.state.raumInfo;
        if(even.target.value >= arr.length){
            for (let i = arr.length; i < even.target.value; i++) {
                obj[`${i+1}0`] = '';
                obj[`${i+1}1`] = '';
                obj[`${i+1}2`] = '';
                arr.push([`${i+1}0`, `${i+1}1`, `${i+1}2`]);
              }
        } else {
            let delCount = arr.length - even.target.value;
            let delkeys = arr.splice(even.target.value,delCount);
            // arr = arr.splice(0,even.target.value);
            for(let i = 0; i < delkeys.length; i++) {
                delete obj[delkeys[i][0]]
                delete obj[delkeys[i][1]]
                delete obj[delkeys[i][2]]
            }
        }
        
        this.setState({
          raumInfo: arr,
          userData: {
            ...this.state.userData, roominfo: obj,roomnums: even.target.value
          },
          renderRooms : true,
        })
      } 
  }
  
  onRoomInput = (eventt) => {
    let obj = {...this.state.userData.roominfo}
    obj[eventt.target.name] = eventt.target.value
    this.setState({
      userData: {
        ...this.state.userData, roominfo : obj
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    let date = new Date().toLocaleDateString().split('/').map(ele => ele < 10 ? '0' + ele : ele)
    let todaysdate = `${date[2]}${date[0]}${date[1]}`;
    let checkin = this.state.userData.checkindate.split('-').join('')
    let checkout = this.state.userData.checkoutdate.split('-').join('')
    if(todaysdate > checkin || checkin >= checkout){
        console.log(checkin,checkout,date)
        alert("Wrong dates input")
    }
    else if(Object.values(this.state.userData.roominfo).includes("") || Object.values(this.state.userData).includes("") ){
        alert("Details cannot be blank")
    }else {
        console.log(this.state.userData);
    }
  }

  render() {
    const { fname, lname, address, zip, city, state, eaddress, phone, checkindate, checkoutdate, specialinstruction } = this.state.userData
    return (
      <>
        <div className="testbox">
          <form>
            <div className="banner">
              <h1>Hotel Reservation Form</h1>
            </div>
            <br />
            <fieldset>
              <legend>Reservation Details</legend>
              <div className="columns">
                <div className="item">
                  <label htmlFor="fname">First Name<span>*</span></label>
                  <input id="fname" type="text" name="fname" required value={fname} onChange={this.onTrigger} />
                </div>
                <div className="item">
                  <label htmlFor="lname"> Last Name<span>*</span></label>
                  <input id="lname" type="text" name="lname" required value={lname} onChange={this.onTrigger} />
                </div>
                <div className="item">
                  <label htmlFor="address">Address<span>*</span></label>
                  <input id="address" type="text" name="address" required value={address} onChange={this.onTrigger} />
                </div>
                <div className="item">
                  <label htmlFor="zip">Zip Code<span>*</span></label>
                  <input id="zip" type="text" name="zip" required value={zip} onChange={this.onTrigger} />
                </div>
                <div className="item">
                  <label htmlFor="city">City<span>*</span></label>
                  <input id="city" type="text" name="city" required value={city} onChange={this.onTrigger} />
                </div>
                <div className="item">
                  <label htmlFor="state">State<span>*</span></label>
                  <input id="state" type="text" name="state" required value={state} onChange={this.onTrigger} />
                </div>
                <div className="item">
                  <label htmlFor="eaddress">Email Address<span>*</span></label>
                  <input id="eaddress" type="text" name="eaddress" required value={eaddress} onChange={this.onTrigger} />
                </div>
                <div className="item">
                  <label htmlFor="phone">Phone<span>*</span></label>
                  <input id="phone" type="tel" name="phone" required value={phone} onChange={this.onTrigger} />
                </div>
              </div>
            </fieldset>
            <br />
            <fieldset>
              <legend>Dates</legend>
              <div className="columns">
                <div className="item">
                  <label htmlFor="checkindate">Check-in Date <span>*</span></label>
                  <input id="checkindate" type="date" name="checkindate" required value={checkindate} onChange={this.onTrigger} />
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="item">
                  <label htmlFor="checkoutdate">Check-out Date <span>*</span></label>
                  <input id="checkoutdate" type="date" name="checkoutdate" required value={checkoutdate} onChange={this.onTrigger} />
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
                    <option value="">Select time</option>
                    <option value="Morning" >Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                <div className="item" id="chwidth">
                  <label htmlFor="room">Number of rooms</label>
                  <input id="room" type="number" name="roomnums" min="0" max="9" onChange={this.onRoomNumSelect} />
                </div>

                {
                  (this.state.renderRooms === true) ? this.state.raumInfo.map((ele, idx) => (
                    <fieldset className="columns" key={idx}>
                      <legend>Room {idx + 1}</legend>
                      <div className="item">
                        <select name={ele[0]} onChange={this.onRoomInput}>
                          <option defaultValue="">Type </option>
                          <option value="Standard">Standard</option>
                          <option value="Deluxe">Deluxe</option>
                          <option value="Suite">Suite</option>
                        </select>
                      </div>
                      <div className="item"></div>
                      <div className="item">
                        <select name={ele[1]} onChange={this.onRoomInput}>
                          <option defaultValue="0" >Number of adults</option>
                          <option value="1" >1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div className="item">
                        <select name={ele[2]} required onChange={this.onRoomInput}>
                          <option value="">Number of children</option>
                          <option defaultValue="0" >0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </fieldset>
                  )) : (<div></div>)
                }
              </div>
              <div className="item">
                <label htmlFor="instruction">Special Instructions</label>
                <textarea id="instruction" rows="3" name="specialinstruction" required value={specialinstruction} onChange={this.onTrigger}></textarea>
              </div>
            </fieldset>
            <div className="btn-block">
              <button type="submit" href="/" onClick={this.onSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}
export default App;