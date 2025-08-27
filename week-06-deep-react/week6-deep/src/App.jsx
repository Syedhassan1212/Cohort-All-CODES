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

//Week 6.2 Hooks use effect, usecallback, usememo
//use effect 

// import { useEffect, useState } from "react";

// function App() {
//   const [address, setAddress] = useState(null);

//   useEffect(() => {
//     fetch("https://fakerapi.it/api/v2/addresses?_quantity=1")
//       .then((res) => res.json())
//       .then((json) => setAddress(json))
//       .catch((err) => console.error("fetch cooked:", err));
//   }, []); //useEffect(fn, []) → runs once → like onMount. or useEffect(fn, [x]) → runs whenever x changes →

//   return (
//     <div>
//       <h1>Random Address</h1>
//       {address ? (
//         <pre>{JSON.stringify(address, null, 2)}</pre>
//       ) : (
//         <p>Loading…</p>
//       )}
//     </div>
//   );
// }

//useMemo
//use callback 


//Context prop drilling ContextApi
//routing 
// import {BrowserRouter, Routes , Route, useNavigate  } from 'react-router-dom'
// import { Dashboard } from './pages/Dashboard';
// import { Landing } from './pages/Landing';
// function App(){
//     return (
//         <div>
//         {/* <div style={{background: "black" , color:"white"}}> top bar</div> */}
//         {/*Client side render*/}

//         {/* <div>
//             <button onClick={()=>{
//                 window.location.href('/dashboard')
//             }
//             }>dashboard</button>
//             <button onClick={()=>{
//                 window.location.href('/landing')
//             }
//             }>landing</button>
            
//         </div> */}
//         {/* used navigate for minimum reload */}
//         <div>
//         <button onClick={() => navigate("/dashboard")}>Dashboard</button>
//         <button onClick={() => navigate("/landing")}>Landing</button>
//       </div>

//         <BrowserRouter>
//         <Routes>
//             <Route path="/dashboard" element = {<Dashboard></Dashboard>}></Route>
//             <Route path = "/landing" element = {<Landing></Landing>}></Route>
//         </Routes>
//         </BrowserRouter>
//         </div>
//     )
// }



// export default App;

// fixed bugs
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Dashboard } from "./pages/Dashboard";
// import { Landing } from "./pages/Landing";
import React from "react";
//integrate lazy loading for effiecient parse
const Dashboard = React.lazy(()=> import("./pages/Dashboard"))
const Landing = React.lazy(()=> import("./pages/Landing"))


function App() {
  const navigate = useNavigate(); // now it's usable

  return (
    <div>
      {/* Navigation buttons */}
      <div>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/landing")}>Landing</button>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

// BrowserRouter should wrap the App component at the root
function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;