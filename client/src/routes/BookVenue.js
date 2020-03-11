import React, { useState, useEffect, useContext } from "react";
import SEO from "../components/SEO";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";

function BookVenue() {
  const [meetingTitle, setMeetingTitle] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bookings, setBookings] = useState("");
  const [venue, setVenue] = useState();
  var id = sessionStorage.getItem("vId");
  var { user } = useContext(AuthContext);

  // const handleVenue = event => {
  //   setVenue(event.target.value);
  // };

  // const cancelBooking = event => {
  //   event.preventDefault();
  //   alert("cancel btn clicked!");
  // };

  useEffect(() => {
    console.log(id);
    fetch(`/api/venue/${id}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          console.log(data.body);
          setVenue(data.body);
        }
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`/api/booking/${id}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          console.log(data.body);
          setBookings(data.body);
          console.log({ bookings });
        }
      })
      .catch(error => console.log(error));
  }, []);

  const checkTwo = (date, stime, etime) => {
    bookings.map(booking => {
      if (date === booking.date) {
        if (stime >= booking.startTime && stime <= booking.endTime) {
          return true;
        } else if (etime <= booking.endTime && etime >= booking.startTime) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
  };

  const createBooking = event => {
    event.preventDefault();
    if (endTime <= startTime) {
      alert("End Time earlier than Start Time");
    } else if (checkTwo(bookingDate, startTime, endTime)) {
      alert(
        "Your selected duration has been booked. please select an unbooked time."
      );
    } else {
      try {
        fetch("/api/users/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: meetingTitle,
            date: bookingDate,
            startTime,
            endTime,
            venueId: id,
            description,
            userId: user._id
          })
        })
          .then(response => {
            if (response.status === 200) {
              alert("Venue booked successfully");
            } else if (response.status === 403) {
              console.log(response);
              alert(
                "The venue is booked at your specified time. Please pick another time!"
              );
            } else {
              alert("network error, please try again in a bit");
            }
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        alert("Signup failed. Please try again");
        console.log(error);
      }
    }
  };
  console.log({ venue });
  return (
    <div className="container-fluid">
      <SEO
        title="Book!T | Book Venue"
        name="Book Venue"
        content={`Book a venue `}
      />
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-7">
          <div className="booking">
            <p>Book</p>
          </div>
          <div className="booking-board">
            <p>
              <b>New</b>
            </p>
            <form
              onSubmit={event => {
                event.preventDefault();
                console.log(
                  bookingDate,
                  startTime,
                  endTime,
                  meetingTitle,
                  venue
                );
              }}
              id="venue-booking"
            >
              <div className="form-group">
                <label htmlFor="InputTitle">Meeting Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="InputTitle"
                  value={meetingTitle}
                  onChange={event => {
                    setMeetingTitle(event.target.value);
                  }}
                />
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="InputDate">Date</label>
                  <DatePicker
                    selected={bookingDate}
                    onChange={date => setBookingDate(date)}
                    minDate={new Date()}
                    maxDate={addMonths(new Date(), 6)}
                    className="form-control"
                  />
                </div>
                <div className="col-1"></div>
                <div className="form-group col">
                  <label htmlFor="InputStartTime">Start Time</label>
                  <DatePicker
                    selected={startTime}
                    onChange={date => setStartTime(date)}
                    showTimeSelect
                    // showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="form-control"
                  />
                </div>
                <div className="col-1"></div>
                <div className="form-group col">
                  <label htmlFor="InputEndTime">End Time</label>
                  <DatePicker
                    selected={endTime}
                    onChange={date => setEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="form-control"
                  />
                </div>
              </div>
              {/* <div className="form-group">
                <label htmlFor="InputVenue">Venue</label>
                <select
                  value={venue}
                  onChange={handleVenue}
                  className="form-control"
                >
                  <option value="ikoyi">Ikoyi</option>
                  <option value="lekki">Lekki</option>
                  <option value="apapa">Apapa</option>
                  <option value="surulere">Surulere</option>
                </select>
              </div> */}
              <div className="form-group">
                <label htmlFor="InputDescription">Description</label>
                <textarea
                  className="form-control"
                  id="InputDescription"
                  value={description}
                  onChange={event => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
              <div className="booking-btn-container">
                <Link to="/conference">
                  <Button defaultBtnColor="change-btn">Cancel</Button>
                </Link>
                <span style={{ marginLeft: "10px" }}></span>
                <Button type="submit" defaultBtnColor="change-btn">
                  Book space
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-2 calendar-board">
          <p className="check-availiability">Check Availiability</p>
        </div>
      </div>
    </div>
  );
}

export default BookVenue;
