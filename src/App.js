import "./App.css";

function App() {
  // const [activity, setActivity] = useState("");
  // const [todos, setTodos] = useState([]);

  // // ketika submit
  // const saveTodoHandler = (event) => {
  //   event.preventDefault();
  //   setTodos([...todos, activity]);
  //   setActivity("");
  // };
  return (
    // <div className="mx-auto container p-0">
    //   <Navbar/>

    //   <main>
    //     <div className="px-3">
    //       <form onSubmit={saveTodoHandler}>
    //         <div className="relative mt-20 h-fit">
    //           <input
    //             type="text"
    //             id="input"
    //             className="border-b-2 border-slate-500 w-full outline-none focus:border-blue-500 transition-all duration-300 placeholder-transparent text-2xl font-semibold text-blue-500 font-main pb-1 peer bg-transparent"
    //             placeholder="hello"
    //             onChange={(event) => setActivity(event.target.value)}
    //             value={activity}
    //           />
    //           <label
    //             htmlFor="input"
    //             className="font-bold text-slate-600 text-base absolute top-1 left-0 peer-focus:-top-5  peer-focus:text-slate-400 transition-all duration-300 font-main"
    //           >
    //             Activity
    //           </label>
    //           <div className="absolute top-0 cursor-pointer right-1 peer-focus:opacity-100 opacity-0 transition-all duration-300">
    //             <button
    //               type="submit"
    //               className="bg-green-600 px-4 rounded font-medium text-lg text-white "
    //             >
    //               Add
    //             </button>
    //           </div>
    //         </div>
    //       </form>

    //       <div className="bg-slate-200 rounded-lg shadow-lg px-3 py-5 mt-14">
    //         <h1 className="text-slate-600 text-center text-2xl font-bold">
    //           <span className="text-blue-500">Todo</span>List
    //         </h1>
    //         <div className="space-y-5 mt-5">
    //           {todos.map((todo) => {
    //             return <TodoListCard>{todo}</TodoListCard>;
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
