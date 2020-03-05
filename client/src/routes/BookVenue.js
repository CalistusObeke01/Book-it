import React, { useState, useEffect, useContext } from "react";
import SEO from "../components/SEO";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import { AuthContext } from "../components/AuthContext";

function BookVenue() {
  const [meetingTitle, setMeetingTitle] = useState("");
  const [bookingDate, setBookingDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bookings, setBookings] = useState("");
  const [venue, setVenue] = useState("");
  var id = sessionStorage.getItem("vId");
  var { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`/api/venue/${id}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          setVenue(data.body);
        }
      })
      .catch(error => console.log(error));
  });

  useEffect(() => {
    fetch(`/api/booking/${id}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          setBookings(data.body);
        }
      })
      .catch(error => console.log(error));
  });

  const timeToNumber = time => {
    time = time.split(":");
    console.log(time);
    time = time.join(".");
    return parseFloat(time);
  };

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

  const createbooking = event => {
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

  return (
    <div className="container-fluid">
      <SEO
        title="Book!T | Book Venue"
        name="Book Venue"
        content={`Book a venue `}
      />
      <div className="row">
        {/* <div className="col-md-3">
          <Sidebar />
        </div> */}
        <div className="col-md-8">
          <form
            onSubmit={event => {
              event.preventDefault();
              console.log(
                { meetingTitle },
                { description },
                { bookingDate },
                { startTime },
                { endTime },
                parseFloat(startTime),
                parseFloat(endTime)
              );
            }}
          >
            <div className="booking">
              <p>{venue.name}</p>
              <div>
                <Button defaultBtnColor="change-btn">Cancel</Button>
                <span style={{ marginLeft: "10px" }}></span>
                <Button type={"submit"} defaultBtnColor="change-btn">
                  Book space
                </Button>
              </div>
            </div>
            <div className="booking-board">
              <p>
                <b>New Meeting</b>
              </p>
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
                  <input
                    type="date"
                    className="form-control"
                    id="InputDate"
                    value={bookingDate}
                    onChange={event => setBookingDate(event.target.value)}
                  />
                </div>
                <div className="col-1"></div>
                <div className="form-group col">
                  <label htmlFor="InputStartTime">Start Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="InputStartTime"
                    onChange={event => {
                      setStartTime(timeToNumber(event.target.value));
                    }}
                  />
                </div>
                <div className="col-1"></div>
                <div className="form-group col">
                  <label htmlFor="InputEndTime">End Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="InputEndTime"
                    onChange={event => {
                      setEndTime(timeToNumber(event.target.value));
                    }}
                  />
                </div>
              </div>
              {/* <div className="form-group">
                                <label htmlFor="InputVenue">Venue</label>
                                <select value={venue} onChange={handleChange} className="form-control">
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
            </div>
          </form>
        </div>
        <div className="col-md-4 calendar-board">
          <p className="check-availiability">Check Availability</p>
        </div>
      </div>
    </div>
  );
}

export default BookVenue;
