import React, { useState } from 'react';
import Tether from 'tether';
import '../assets/style.css';
import '../assets/script.js';

window.Tether = Tether;

function Home() {
    return (
        <div>
            <h1>Hi, I'm the AI Chatbot</h1>
            <div class="outer-wrap">
                <div class="wrap">
                    <div class="bot">
                        <div class="bot-wrap">
                            <div class="antenna">
                                <div class="antenna-base"></div>
                                <div class="antenna-hook-left"></div>
                                <div class="antenna-hook-right"></div>
                            </div>
                            <div class="head">
                                <div class="eyes-wrap">
                                    <div class="eyes"></div>
                                    <div class="eyes"></div>
                                </div>
                            </div>
                            <div class="body"></div>
                            <div class="bottom"></div>
                        </div>
                        <div class="shadow"></div>
                    </div>
                    <div class="text"></div>
                </div>
            </div>


            <div>
                <div id="center-text"></div>
                <div id="body">
                    <div id="chat-circle" class="btn btn-raised">
                        <div id="chat-overlay"></div>
                        <i class="material-icons">smart_toy</i>
                    </div>

                    <div class="chat-box">
                        <div class="chat-box-header">
                            <div class="online-status">
                                <div class="online-dot"></div>
                                Chatbot
                            </div>
                            <span class="chat-box-toggle"><i class="material-icons">close</i></span>
                        </div>
                        <div class="chat-box-body">
                            <div class="chat-box-overlay"></div>
                            <div class="chat-logs"></div>
                        </div>

                        <div class="chat-input">
                            <input type="text" id="chat-input" placeholder="Send a message..." />
                            <button type="submit" class="chat-submit" id="chat-submit">
                                <i class="material-icons">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
