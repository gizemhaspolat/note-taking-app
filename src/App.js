import InputArea from "./components/InputArea";
import Header from "./components/Header";
import NoteCards from "./components/NoteCards";
import "./App.css";
import SearchNotes from "./components/SearchNotes";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchNotes />
      <InputArea />
      <NoteCards />
    </div>
  );
}

export default App;
