// import { useState } from 'react'
// import './App.css'
// import React from 'react'

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






export default App
