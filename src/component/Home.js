import React, { useState } from 'react';
import Tether from 'tether';
import '../assets/style.css';
import '../assets/script.js';

window.Tether = Tether;

function Home() {
    return (
        <div>
            <div id="center-text"></div>
            <div id="body">
                <div id="chat-circle" className="btn btn-raised">
                    <div id="chat-overlay" />
                    <i className="material-icons">message</i>
                </div>

                <div className="chat-box">
                    <div className="chat-box-header">
                        ChatBot
                        <span className="chat-box-toggle"><i className="material-icons">close</i></span>
                    </div>
                    <div className="chat-box-body">
                        <div className="chat-box-overlay"></div>
                        <div className="chat-logs"></div>
                    </div>

                    <div className="chat-input">
                        <input type="text" id="chat-input" placeholder="Send a message..." />
                        <button type="submit" className="chat-submit" id="chat-submit">
                            <i className="material-icons">send</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
