import "./App.css";
import Autosuggest from "./components/Autosuggest/Autosuggest";
import Button from "./components/Button/Button";
import Clues from "./components/Clues/Clues";
import Movies from "./Movies";
import { Clue } from "./components/Clues/Clues";
import Guesses from "./components/Guesses/Guesses";

function App() {
  const movieList = Movies().map((movie: any) => {
    return movie.label;
  });

  const clues: Clue[] = [
    { text: "A movie from the 90s" },
    { text: "Staring Sean Connery" },
    { text: "..." },
    { text: "..." },
    { text: "..." },
  ];

  const guesses = [
    { text: "A movie from the 90s" },
    { text: "Staring Sean Connery" },
    { text: "..." },
    { text: "..." },
    { text: "..." },
  ];

  return (
    <div className="main-container">
      <div className="central-content">
        <div className="clues-answers-row">
          <Clues clues={clues} />
          <div className="divider"></div>
          <Guesses guesses={guesses} />
        </div>

        <div className="input-area">
          <Autosuggest choices={movieList} />
          <div style={{ marginLeft: 8 }}>
            <Button title={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
