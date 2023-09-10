import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white dark:bg-black">
      <title>こっちを見ないでくださいませご主人様</title>
      <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-bold m-auto text-center max-w-full font-sans dark:text-white">
        <button
          onClick={() => {
            document.body.requestFullscreen();
          }}
        >
          こっち見んな👁️
        </button>
      </h1>
    </div>
  );
}

export default App;
