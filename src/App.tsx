import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {writeText} from '@tauri-apps/api/clipboard'; 
import "./App.css";

function App() {
  const [StartstampMsg, StartStamp] = useState("");
  const [EndstampMsg, EndStamp] = useState("");
  
  async function end_stamp() {
      EndStamp(await invoke("end_stamp"));
 }

  async function start_stamp() {
      StartStamp(await invoke("start_stamp"));
 }
  async function writeStartStampClipboard(){
    // start stamp to clipboard
    await writeText(EndstampMsg)
  }
  async function writeEndStampClipboard(){
    // end stamp to clipboard
    await writeText(EndstampMsg)
  }
  
  return (
    <div className="container">
      <h1>Welcome to ChronoStamp</h1>

      <p>各ボタンで出退勤のタイムスタンプコメントを生成します</p>

      <div className="row">
        <div>
          <button type="button" onClick={() => start_stamp()}>
            出勤
          </button>
          <button type="button" onClick={() => end_stamp()}>
            退勤
          </button>
        </div>
      </div>
      <p>{EndstampMsg}</p>
      <p>{StartstampMsg}</p>
          <button type="button" onClick={() => writeStartStampClipboard()}>
            Start Clip 
          </button>
          <button type="button" onClick={() => writeEndStampClipboard()}>
            End   Clip 
          </button>
    </div>
  );
}

export default App;

