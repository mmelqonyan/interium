import React, { useState } from 'react';

import { useForm } from "react-hook-form";

import axios from 'axios';



import CallIcon from '@material-ui/icons/Call';

import SimpleImageSlider from "react-simple-image-slider";

import { LoremIpsum } from 'react-lorem-ipsum';


import './App.css';


const images =  [          
  {url:'images/image2.jpg'},
  {url:'images/image3.jpg'},
  {url:'images/image4.jpg'},
  {url:'images/image5.jpg'},
  {url:'images/image6.jpg'},
  {url:'images/image7.jpg'},
  {url:'images/image8.jpg'},
  {url:'images/image9.jpg'},
  {url:'images/image10.jpg'},
  {url:'images/image11.jpg'},
  {url:'images/image12.jpg'},
  
];

let divStyle = {
  color: 'green',
  border: '1px solid grey',
  width: "30%", 
marginLeft: '35%'
};
let uStyle = {
  color: "red",
   marginRight: "15px",
   marginLeft: "15px"
}
let background = {
  marginLeft: "10%",
  align: "center",
  backgroundImage:"url('images/header.jpg')",
  width:"80%",
  height: "350px",
  backgroundSize:"contain",
  backgroundPosition:"top",
  background: "cover",
  backgroundRepeat: "no-repeat"
}


function App() {
  useState('');

 const { handleSubmit, register } = useForm();
 const onSubmit = values => {

  console.log(window.innerWidth)
  axios.post('http://localhost:5000/user',values)
  .then(function(response){
    console.log("success",response.data)
})
.catch(function(response){
    console.log("error", response);
}); 


   console.log(values);
 };

  return (
    <div className="App">
      <div style={background}>
     <h1>Interium</h1>
     </div>
     <p><CallIcon/>+7(988) 148 93 37</p>
     <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style= {{
            display: "flex",
            columnGap: "120px",
            
        }}>
    <u style={uStyle}>zakazat zvonok</u>
    <u style={uStyle}>zakazat zamer</u>
    <u style={uStyle}>zakazat raschyot</u>

    </div>
  </div>
     
    <br/><br/>
    <div style={divStyle}>
       <p>ostavte zayavku i nash operator s vami svyajetsya</p>
     
     
     
       <form onSubmit={handleSubmit(onSubmit)}>
        <p>
           imya
        </p>
       <input type="text" name="imya" 
       ref={register()}
        required onChange={(e) => {}}/>
        <p>
         nomer
        </p>
       <input name="nomer" ref={register()} type="number"/>
<br/>
<br/>
<input type="submit" value="Отправить" />

       </form>
       <br/>
       <br/>

       
     </div>

     <br/><br/><br/>

<div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

     <SimpleImageSlider
                    width={400}
                    height={504}
                    images={images}
                 
                />
     </div>
     
     <br/><br/><br/>
     <div>kak mi rabotaem
       <LoremIpsum p={2}/>
     </div>
     <div>
       nashi raboti
       <LoremIpsum p={2} />
     </div>
    </div>
  );
}

export default App;
