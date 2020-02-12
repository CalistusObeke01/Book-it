import React, {useState} from 'react';
import SEO from '../components/SEO';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';

function BookVenue() {
    const [venue, setValue] = useState('lekki');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <div className="container-fluid">
            <SEO title="Book!T | Book Venue" 
                content ={`Book a venue `} />
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-7">
                    <div className="booking">
                        <p>Book a Venue</p>
                        <div>
                            <Button defaultBtnColor="change-btn" >
                                Cancel
                            </Button>
                            <span style={{marginLeft: '10px'}}></span>
                            <Button defaultBtnColor="change-btn">
                                Book space
                            </Button>
                        </div>
                    </div>
                    <div className="booking-board">
                        <p><b>New Meeting</b></p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="InputTitle">Meeting Title</label>
                                <input type="text" className="form-control" id="InputTitle" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="InputDate">Date</label>
                                    <input type="date" className="form-control" id="InputDate" />
                                </div>
                                <div className="col-1"></div>
                                <div className="form-group col">
                                    <label htmlFor="InputStartTime">Start Time</label>
                                    <input type="time" className="form-control" id="InputStartTime" />
                                </div>
                                <div className="col-1"></div>
                                <div className="form-group col">
                                    <label htmlFor="InputEndTime">End Time</label>
                                    <input type="time" className="form-control" id="InputEndTime" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputVenue">Venue</label>
                                <select value={venue} onChange={handleChange} className="form-control">
                                    <option value="ikoyi">Ikoyi</option>
                                    <option value="lekki">Lekki</option>
                                    <option value="apapa">Apapa</option>
                                    <option value="surulere">Surulere</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputDescription">Description</label>
                                <textarea className="form-control" id="InputDescription" />
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