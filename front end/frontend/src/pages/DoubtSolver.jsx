import { useState } from "react";
import axios from "axios";

function DoubtSolver() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    const userMessage = { type: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post("http://127.0.0.1:8000/ask-ai", {
        question,
      });

      const aiMessage = { type: "ai", text: res.data.answer };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "Error connecting to AI." },
      ]);
    }

    setQuestion("");
  };

  return (
    <div className="layout">

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="logo">AI Campus</h2>
        <div className="menu">Dashboard</div>
        <div className="menu active">Doubt Solver</div>
        <div className="menu">Schedule</div>
        <div className="menu">Attendance</div>
        <div className="menu">Planner</div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="overlay" onClick={()=>setSidebarOpen(false)} />}

      {/* Main */}
      <div className="main">

        {/* Top bar */}
        <div className="topbar">
          <button className="menuBtn" onClick={()=>setSidebarOpen(!sidebarOpen)}>☰</button>
          <h2>AI Doubt Solver</h2>
        </div>

        {/* Chat Area */}
        <div className="chatArea">

          {messages.length === 0 && (
            <div className="emptyState">
              Ask any programming or study doubt 🤖
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={msg.type === "user" ? "userRow" : "aiRow"}>
              <div className={msg.type === "user" ? "userBubble" : "aiBubble"}>
                <div style={{whiteSpace:"pre-wrap"}}>{msg.text}</div>
              </div>
            </div>
          ))}

        </div>

        {/* Input */}
        <div className="inputBar">
          <input
            placeholder="Ask your doubt..."
            value={question}
            onChange={(e)=>setQuestion(e.target.value)}
            onKeyDown={(e)=>e.key==="Enter" && askAI()}
          />

          <button onClick={askAI}>Send</button>
        </div>

      </div>


<style>{`

*/* GLOBAL FIX */

html, body, #root{
height:100%;
width:100%;
}

*{
box-sizing:border-box;
margin:0;
padding:0;
}

/* MAIN LAYOUT */

.layout{
display:flex;
height:100vh;
width:100vw;
background:#0f1224;
color:white;
font-family:Inter, sans-serif;
overflow:hidden;
}

/* SIDEBAR */

.sidebar{
width:240px;
flex-shrink:0;
background:#0b0e1c;
padding:20px;
border-right:1px solid #1c1f3a;
display:flex;
flex-direction:column;
gap:10px;
transition:0.3s;
height:100%;
}

.logo{
margin-bottom:20px;
font-size:20px;
font-weight:600;
}

.menu{
padding:12px;
border-radius:8px;
color:#aaa;
cursor:pointer;
transition:0.2s;
}

.menu:hover{
background:#151a34;
}

.active{
background:linear-gradient(90deg,#6b5cff,#8a5cff);
color:white;
}

/* MAIN AREA */

.main{
flex:1;
display:flex;
flex-direction:column;
height:100%;
width:100%;
overflow:hidden;
}

/* TOP BAR */

.topbar{
display:flex;
align-items:center;
gap:15px;
padding:14px 20px;
border-bottom:1px solid #1c1f3a;
flex-shrink:0;
}

.topbar h2{
font-size:18px;
font-weight:600;
}

.menuBtn{
display:none;
background:none;
border:none;
color:white;
font-size:22px;
cursor:pointer;
}

/* CHAT AREA */

.chatArea{
flex:1;
overflow-y:auto;
padding:20px;
display:flex;
flex-direction:column;
gap:16px;
min-height:0;
}

/* EMPTY */

.emptyState{
margin:auto;
opacity:0.5;
text-align:center;
font-size:14px;
}

/* MESSAGE ROWS */

.userRow{
display:flex;
justify-content:flex-end;
}

.aiRow{
display:flex;
justify-content:flex-start;
}

/* CHAT BUBBLES */

.userBubble{
background:#3b82f6;
padding:12px 16px;
border-radius:18px 18px 4px 18px;
max-width:600px;
width:fit-content;
word-break:break-word;
}

.aiBubble{
background:#1a1f3a;
padding:14px 16px;
border-radius:18px 18px 18px 4px;
border:1px solid #00e0ff;
max-width:600px;
width:fit-content;
word-break:break-word;
}

/* INPUT BAR */

.inputBar{
display:flex;
gap:10px;
padding:14px 18px;
border-top:1px solid #1c1f3a;
flex-shrink:0;
background:#0f1224;
}

.inputBar input{
flex:1;
padding:12px;
border-radius:10px;
border:none;
outline:none;
background:#1a1f3a;
color:white;
font-size:14px;
}

.inputBar button{
background:#7c3aed;
border:none;
color:white;
padding:12px 18px;
border-radius:10px;
cursor:pointer;
font-weight:500;
}

/* MOBILE */

@media (max-width:768px){

.sidebar{
position:fixed;
left:-260px;
top:0;
height:100vh;
z-index:20;
}

.sidebar.open{
left:0;
}

.overlay{
position:fixed;
inset:0;
background:rgba(0,0,0,0.5);
z-index:10;
}

.menuBtn{
display:block;
}

.chatArea{
padding:16px;
}

.userBubble,
.aiBubble{
max-width:100%;
}

.inputBar{
padding:12px;
}

}
`}</style>

    </div>
  );
}

export default DoubtSolver;