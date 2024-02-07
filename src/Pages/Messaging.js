import React from "react";
import Navbar from "../Components/Navbar";
import "../Styling/message.css";

function Messaging() {
    return (
        <div className="MessagesM">
            <div className="topSection">
                <div className="title">
                    <div className="title0">
                        <text>Payload</text>
                    </div>
                    <div className="title1">
                        <text>Help and Support</text>
                    </div>
                </div>
                <div className="navbar">
                    <Navbar />
                </div>
            </div>

            <div className="MessagesMain">
                <div className="messageSearch">
                    <div className="messageSearchText">User Search</div>
                    <div className="messagesSearchbar">
                        <input
                            className="searchInput"
                            name="searchInput"
                            type="text"
                        />
                        <button className="searchButton">Search</button>
                    </div>
                </div>
                <div className="messagesView">
                    <div className="listOfUsers">
                        {/*Use the actual test dataset of the app  */}
                    </div>
                    <div className="Message">
                        {/**
                          Use the map function to create a list that renders the messsage as a list after it has been Entered into the chat
                          Do the left ones separately or maybe toggle between left and right.
                      */}
                        <div className="previousMessages"></div>
                        <div className="sendMessage">
                            <textarea
                                name="messageTextarea"
                                cols="10"
                                rows="3"
                                placeholder="Enter your message..."
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messaging;
