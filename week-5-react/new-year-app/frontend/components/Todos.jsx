// export  function Todos({ todos }){

// return <div>
//     {todos.map(function (todo) {
//         return <div>
//             <h1>{todo.title}</h1>
//             <h2>{todo.description}</h2>
//             <button>{todo.completed == true ? "completed" : "mark as complete"}</button>
            
//         </div>
//     })}
// </div>
// } 

export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}






// export function Todos({ todo = [] }) {
//     return (
//       <div>
//         {todo.map(function (todoItem, index) {
//           return (
//             <div key={index}>
//               <h1>{todoItem.title}</h1>
//               <h2>{todoItem.description}</h2>
//               <button>{todoItem.completed ? "completed" : "mark as complete"}</button>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
  