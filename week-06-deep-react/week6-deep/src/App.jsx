// import { useState } from 'react'
// import './App.css'
// import React from 'react'

// import { useEffect } from "react"

//function App() {
//   const [title, setTitle] = useState("my name is hassan")
// function setTitle1(){
//   setTitle("my name is" + Math.random())
// }

//   return (
//     <div> 
//     <button onClick={setTitle1} > update</button>
//     <Header title={title} />
//       <Header title='hassan'></Header>
//       <Header title = "hassan"></Header>

//     </div>
//   )
// }

// //first method make differnet fn to render 

// // function Rerender(){
// //   const [title, setTitle] = useState("my name is hassan")
// // function setTitle1(){
// //   setTitle("my name is" + Math.random())
// // }
// // return <div>
// //   <button onClick={setTitle1} > update</button>
// //     <Header title={title} />
// // </div>

// // }

// //use keyword memo //it will make it rerender components have changes
// const Header = React.memo(
// function Header({title}){
//   return <div>
//     {title}
//   </div>
// })





//building wrapper
// function App(){
//     return <div>
// <CardWrapper innerComponent={< Textcomponent /> }></CardWrapper>
// <CardWrapper innerComponent={< Textcomponent /> }></CardWrapper>
// </div>}

// function Textcomponent (){
//     return <div>
//          hi there 
//          </div>
// }
// function CardWrapper ({innerComponent}){
//     return <div style={{border : "2px solid black" , padding : 20}}> 
//         {innerComponent}
//         </div>

// }

// New way of doing it

// function App(){
//     return <div>
//         <CardWrapper>
//             <CardWrapper>
//                 hello
//                 <CardWrapper> fdfd </CardWrapper>
//             </CardWrapper>
//             hi there
//         </CardWrapper>
//     </div>
// }
// function CardWrapper({children}){
//     return <div style={{padding: 20, border: "2px solid black"}}>
//         {children}
//     </div>
// }

//hooks use effect, usecallback, usememo
//use effect 

import { useEffect, useState } from "react";

function App() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v2/addresses?_quantity=1")
      .then((res) => res.json())
      .then((json) => setAddress(json))
      .catch((err) => console.error("fetch cooked:", err));
  }, []); //useEffect(fn, []) → runs once → like onMount. or useEffect(fn, [x]) → runs whenever x changes →

  return (
    <div>
      <h1>Random Address</h1>
      {address ? (
        <pre>{JSON.stringify(address, null, 2)}</pre>
      ) : (
        <p>Loading…</p>
      )}
    </div>
  );
}

export default App;

