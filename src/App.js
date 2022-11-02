// 

import './App.css'
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';

// import React from 'react'

function App() {
  return (
<>
<Navbar title="TextUtils" about="About Textutils"/>
<div className="container">
{/* <TextForm heading="Enter the text to anlyze below"/> */}
<About/>
</div>

</>
);
}
export default App;
