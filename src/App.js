import InputArea from "./components/InputArea";
import Header from "./components/Header";
import NoteCards from "./components/NoteCards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <InputArea />
      <NoteCards />
    </div>
  );
}

export default App;
