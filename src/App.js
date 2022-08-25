import "./App.css";
import Down from "./components/Down";

function App() {
  return (
    <div className="h-max container mx-auto py-3">
      <nav>
        <div className="flex w-full  justify-between items-center">
          <h1 className="text-gray-700 text-2xl font-semibold">TodoApp</h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1={4} y1={6} x2={20} y2={6} />
              <line x1={4} y1={12} x2={20} y2={12} />
              <line x1={4} y1={18} x2={20} y2={18} />
            </svg>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center mt-5 h-max">
        <img src="hero.svg" alt="" className="w-60 p-5 drop-shadow-xl" />
        <form>
          <div className="w-full shadow-xl mt-10 bg-slate-200 rounded-lg px-3 py-4">
            <div>
              <label
                htmlFor="todo"
                className="text-slate-700 font-semibold text-lg"
              >
                Activity
              </label>
              <input
                type="text"
                id="todo"
                className="w-full outline-none border-b-2 border-slate-500 bg-transparent peer"
              />
              <button className=" peer-focus:opacity-100 scale-95 peer-focus:scale-100 opacity-0 transition-all duration-700 bg-green-500 text-slate-700 w-full mt-3 font-semibold ease-in-out rounded">
                Add
              </button>
            </div>
          </div>

          <div className="w-full shadow-xl mt-8 bg-slate-200 rounded-lg px-3 py-4">
            <h1 className="text-slate-700 font-semibold text-center">
              Todo List
            </h1>
            <div className="border-b-2 border-slate-500"></div>
            <div className="mt-3">
              <div className="bg-white rounded p-2 flex items-center justify-between">
                <input type="checkbox" name="" id="" />
                <h1 className="text-slate-800 font-medium text-sm">Olahraga</h1>
                <Down />
              </div>
            </div>
            <div className="mt-3">
              <div className="bg-white rounded p-2 flex items-center justify-between">
                <input type="checkbox" name="" id="" />
                <h1 className="text-slate-800 font-medium text-sm">Olahraga</h1>
                <Down />
              </div>
            </div>
            <div className="mt-3">
              <div className="bg-white rounded p-2 flex items-center justify-between">
                <input type="checkbox" name="" id="" />
                <h1 className="text-slate-800 font-medium text-sm">Olahraga</h1>
                <Down />
              </div>
            </div>
            <div className="mt-3">
              <div className="bg-white rounded p-2 flex items-center justify-between">
                <input type="checkbox" name="" id="" />
                <h1 className="text-slate-800 font-medium text-sm">Olahraga</h1>
                <Down />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex w-full items-center justify-center mt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-copyright"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#94a3b8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx={12} cy={12} r={9} />
          <path d="M14.5 9a3.5 4 0 1 0 0 6" />
        </svg>
        <h1 className="text-slate-400 text-sm">MohamadFahriKurniawan2022</h1>
      </div>
    </div>
  );
}

export default App;
