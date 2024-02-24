import React, { Component } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import Navbar from "../Components/Navbar";
import "../Styling/message.css";

class Messaging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            messages: [],
            selectedRider: [],
            users: [
                {
                    id: 1,
                    name: "User 1",
                    // messages: ["Hi there", "Who are you"],
                    messages: [],
                },
                {
                    id: 2,
                    name: "User 2",
                    // messages: ["I am a tiger", "What do you want"],
                    messages: [],
                },
                {
                    id: 3,
                    name: "User 3",
                    // messages: ["I want a color", "Which color"],
                    messages: [],
                },
                {
                    id: 4,
                    name: "User 4",
                    // messages: ["Color blue-red", "or green-brown"],
                    messages: [],
                },
            ],
        };
    }

    handleInputChange = (e) => {
        this.setState({ inputText: e.target.value });
    };

    handleSubmit = () => {
        const { inputText, selectedRider, users } = this.state;
        if (!selectedRider || inputText.trim() === "") return;

        const newMessage = {
            text: inputText,
            sender: "admin",
            timestamp: new Date(),
        };

        const updatedMessages = {
            ...selectedRider,
            messages: [...selectedRider.messages, newMessage],
        };

        const updatedUsers = users.map((user) =>
            user.id === selectedRider.id ? updatedMessages : user
        );

        this.setState({
            inputText: "",
            users: updatedUsers,
            selectedRider: updatedMessages,
        });
    };

    handleUserCLick = (rider) => {
        this.setState({ selectedRider: rider });
    };

    render() {
        const { inputText, selectedRider, users } = this.state;

        return (
            <>
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
                        <div className="messagesView">
                            <div className="ridersList">
                                {/*Use the actual test dataset of the app  */}
                                {users?.map((rider) => (
                                    <div
                                        key={rider.id}
                                        className="riders"
                                        onClick={() =>
                                            this.handleUserCLick(rider)
                                        }
                                    >
                                        {rider.name}
                                        <br></br>
                                    </div>
                                ))}
                            </div>

                            <div className="message">
                                <div className="previousMessages">
                                    {selectedRider?.messages?.map(
                                        (message, index) => (
                                            <div
                                                key={index}
                                                className={`message ${
                                                    message.sender === "admin"
                                                        ? "rightMessage"
                                                        : "leftMessage"
                                                }`}
                                            >
                                                <p>{message.text}</p>
                                            </div>
                                        )
                                    )}
                                    <br />
                                </div>

                                <div className="bottomOfChat">
                                    <hr className="bar"></hr>

                                    <div className="sendMessage">
                                        <input
                                            id="chatInput"
                                            type="text"
                                            value={inputText}
                                            onChange={this.handleInputChange}
                                            placeholder="Enter your message..."
                                        />
                                        {/* Render messages */}
                                        {/* {messages?.map((msg, index) => (
                                        <div
                                            key={index}
                                            className="rightMessage"
                                        >
                                            <p>{msg.message}</p>
                                        </div>
                                    ))} */}

                                        <div
                                            className="icon-button"
                                            onClick={this.handleSubmit}
                                        >
                                            <CiLocationArrow1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Messaging;
