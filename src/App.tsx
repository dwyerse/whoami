import "./App.css";
import Autosuggest from "./components/Autosuggest/Autosuggest";
import Button from "./components/Button/Button";
import Clues from "./components/Clues/Clues";
import Movies from "./Movies";
import { Clue } from "./components/Clues/Clues";
import Guesses from "./components/Guesses/Guesses";
import { useRef, useLayoutEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";

function App() {
  const movieList = Movies().map((movie: any) => {
    return movie.label;
  });

  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const initialGuesses = [
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
  ];

  const [filter, setFilter] = useState("");
  const [guessIndex, setGuessIndex] = useState(0);
  const [guesses, setGuesses] = useState(initialGuesses);

  const clues: Clue[] = [
    { text: "A movie from the 90s" },
    { text: "Staring Sean Connery" },
    { text: "" },
    { text: "" },
    { text: "" },
  ];

  return (
    <div className="main">
      <div className="title">Who Am I?</div>
      <div className="content-container">
        <div className="central-content">
          <div className="clues-answers-row">
            <Clues clues={clues} />
            <div className="divider"></div>
            <Guesses guesses={guesses} />
          </div>

          <div className="input-area" ref={ref}>
            <Autosuggest
              choices={movieList}
              containerWidth={width}
              filter={filter}
              setFilter={setFilter}
            />
            <div style={{ marginLeft: 8 }}>
              <Button
                title={"Submit"}
                onClick={() => {
                  setFilter("");
                  guesses[guessIndex] = { text: filter };
                  setGuesses([...guesses]);
                  setGuessIndex(guessIndex + 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
