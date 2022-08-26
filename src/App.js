import "./App.css";

function App() {
  const [activity, setActivity] = useState("");
  const [todos, setTodos] = useState([]);

  // ketika submit
  const saveTodoHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, activity]);
    setActivity("");
  };
  return (
    <div className="mx-auto container p-0">
      <Navbar/>
    </div>
  );
}

export default App;
