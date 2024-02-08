import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
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
                    <div className="message">
                        {/**
                          Use the map function to create a list that renders the messsage as a list after it has been Entered into the chat
                          Do the left ones separately or maybe toggle between left and right.
                          Use the indexes as a way of shifting where the indices take a side, either left or right
                      */}
                        <div className="previousMessages">
                            <div className="leftMessages">
                                <p className="rightChat">
                                    Hi I have a problem connecting with the
                                    person I am Delivering the goods to
                                </p>
                            </div>
                            <div className="rightMessages">
                                <p className="rightChat">
                                    Hi, I am Abel from our Control Center. Pls
                                    send me the details of the customer
                                </p>
                            </div>
                            <div className="leftMessages">
                                <p className="leftChat">
                                    ID: 2131234daadsaf34 Phone: 0203082030
                                </p>
                            </div>
                            <div className="rightMessages">
                                <p className="rightChat">
                                    Pls your issue has been resolved. Kindly
                                    continue with the delivery
                                </p>
                            </div>

                            <div className="leftMessages">
                                <p className="leftChat">Thank you very much</p>
                            </div>
                            <div className="rightMessages">
                                <p className="rightChat">
                                    No worries, thank you for your service
                                </p>
                            </div>
                        </div>
                        <div className="bottomOfChat">
                            <hr className="bar"></hr>
                            <div className="sendMessage">
                                <input
                                    type="text"
                                    id="chatInput"
                                    placeholder="Enter your message..."
                                />
                                <CiLocationArrow1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messaging;
