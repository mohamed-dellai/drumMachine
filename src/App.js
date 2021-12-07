import React from "react";
import {useState,useEffect} from 'react';

function App() {
  const [vol,setVol]=useState("");
  const [vol2,setVol2]=useState(1);
  const [note,setNote]=useState("");
  const handleSubmit = (e) =>{

    e.preventDefault();
    if(vol<0 || vol>1 || isNaN(vol)){
      alert('choose a number between 1 and 0');
      setVol('');
    }
      
        else{
          document.getElementById('one').volume = vol;
          document.getElementById('two').volume = vol;
          document.getElementById('three').volume = vol;
          document.getElementById('four').volume = vol;
          document.getElementById('five').volume = vol;
          document.getElementById('six').volume = vol;
          document.getElementById('seven').volume = vol;
          document.getElementById('eight').volume = vol;
          document.getElementById('nine').volume = vol;
          setVol2(vol);
          setVol('');
      }
  }

  useEffect(() => {document.addEventListener('keydown', logKey)

      return ()=>{document.removeEventListener("keydown",logKey)}
} 
  
  )

  function logKey(e) {
    if(e.code==='KeyQ'){
    document.getElementById('one').play() ; setNote(note+'A');}
   if(e.code==='KeyW'){
   document.getElementById('two').play() ; setNote(note+"Z");}
   if(e.code==='KeyE'){
   document.getElementById('three').play() ; setNote(note+"E");}
   if(e.code==='KeyA'){
    document.getElementById("four").play(); setNote(note+"Q")  }
  if(e.code==='KeyS'){
    document.getElementById('five').play() ; setNote(note+"S")}
    if(e.code==='KeyD'){
      document.getElementById('five').play() ; setNote(note+"D")}
    if(e.code==='KeyZ'){
      document.getElementById('six').play() ; setNote(note+'W')}
    if(e.code==='KeyX'){
      document.getElementById('seven').play() ; setNote(note+'X')}
    if(e.code==='KeyC'){
      document.getElementById('seven').play() ; setNote(note+'C')}
      return ''
  }
  
  return (
    <div className="App">
       <div className='audio'>
        <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' id='one' controls></audio>
        <audio  id='two' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        <audio  id='three' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        <audio  id='four' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        <audio  id='five' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        <audio  id='six' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        <audio  id='seven' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        <audio  id='eight' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        <audio  id='nine' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
      </div>
       <div className='container'>
         <div className='keys'>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('one').play();setNote(note+"A")}}>A</button>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('two').play();setNote(note+"Z")}}>Z</button>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('three').play();setNote(note+"E")}}>E</button>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('four').play();setNote(note+"R")}}>R</button>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('five').play();setNote(note+"T")}}>T</button>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('six').play();setNote(note+"Y")}}>Y</button>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('seven').play();setNote(note+"U")}}>U</button>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('eight').play();setNote(note+"I")}}>I</button>
           <button className='btn btn-primary' onClick={()=>{document.getElementById('nine').play();setNote(note+"O")}}>O</button>
         </div>
         <div className='settings'>
           <form onSubmit={handleSubmit} className='settings'>
           <input type='text' placeholder='Volume From 0 to 1' className="form-control" onChange={(e)=>setVol(e.target.value)} value={vol}></input>
           <input type='submit' value='change' className='btn btn-danger volumebtn '></input>
             <div className='current'><p className='currenttext'>Current Volume</p><input type='text' className='form-control' value={vol2}></input></div>
              <p className='currenttext'>Currnet note</p><input type='text' value={note} className='form-control'></input>
              <input type='button' className='btn btn-danger' onClick={()=>setNote('')} value='reset'/>
           </form>
         </div>
       </div>
    </div>
  );
}

export default App;
