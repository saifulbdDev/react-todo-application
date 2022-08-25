import "./App.css";
import DownIcon from "./components/DownIcon";

function App() {
  return ( 
    <div className="bg-slate-200 container p-2">
      
    <nav>
      <div className="flex justify-between items-center">
        <h1 className="font-bold font-main text-4xl text-slate-700 ">TodoApp</h1>
        <DownIcon/> 
      </div>
    </nav>

    </div>
  );
}

export default App;
