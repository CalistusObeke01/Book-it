import React from 'react';
import usersMap from "../images/Picture1111.png";

function Users() {
    return(
        <div className="users">
            <div className="col-sm-8 col-md-8">
                <p className="lead user-header"><b>Book!T</b> has users in over 100 cities</p>
                <p className="user-text">
                    Processing thousands of bookings every month for venues across africa,
                    Book!T is the leading cloud solution for managing space inn Africa. We're proud
                    of our rock solid data-security standards, industry-leading uptime and 
                    performance and our uber-helpful support.
                </p>
                <p>
                    So throw away that notepad and join the thousands of venues already 
                    enjoying a smarter way to manage their bookings!
                </p>
                <p className="user-footer-note">Save time and space!</p>
            </div>
            <div className="col-sm-4 col-md-4">
                <img src={usersMap} alt="Map" className="img-responsive" width="100%" />
            </div>
        </div>
    )
}

export default Users