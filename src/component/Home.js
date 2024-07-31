import React, { useState } from 'react';
import Tether from 'tether';
import '../assets/style.css';
import '../assets/script.js';  
import axios from 'axios';

// Attach Tether to the window object
window.Tether = Tether;

function Home() {
    const [question, setQuestion] = useState("");

    // Async function to generate answer
    async function generateAnswer(event) {
      console.log("loading");
        

        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAHourGI4um3wLcLun1pPuHfY5oSMeu4pQ",
                method: "post",
                data: {
                    contents: [
                        { parts: [{ text:  question}] },
                    ],
                },
            });

            console.log(
                response['data']['candidates'][0]['content']['parts'][0]['text']
            
            
            ); 


        } catch (error) {
            console.error('Error generating answer:', error);
        }
    }

    return (
        <div>
            <div id="center-text"></div>
            <div id="body">

                {/* message icon on web page */}

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
                        <div className="chat-logs"></div> {/* chat-log */}
                    </div>

                    <div className="chat-input">
                      
                        
                            
                            <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} type="text" id="chat-input" placeholder="Send a message..." />
                            <button onClick={generateAnswer} type="submit" className="chat-submit" id="chat-submit">
                                <i className="material-icons">send</i>
                            </button>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
