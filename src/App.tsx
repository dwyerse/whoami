import "./App.css";
import Movies from "./Movies";
import { useState } from "react";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import AppLayout from "@cloudscape-design/components/app-layout";
import {
  applyMode,
  applyDensity,
  Density,
  Mode,
} from "@cloudscape-design/global-styles";
import { Autosuggest, Grid } from "@cloudscape-design/components";

export type Guess = {
  text: string;
};

export type Clue = {
  text: string;
};

applyMode(Mode.Dark);
applyDensity(Density.Comfortable);

function App() {
  return <AppLayout navigationHide toolsHide content={<Content />}></AppLayout>;
}

const Content = () => {
  const movieList = () =>
    Movies().map((movie: any) => {
      return { value: movie.label };
    });
  const movies = movieList();

  const initialGuesses = [
    { text: "..." },
    { text: "..." },
    { text: "..." },
    { text: "..." },
    { text: "..." },
  ];

  const [filter, setFilter] = useState("");
  const [guessIndex, setGuessIndex] = useState(0);
  const [guesses, setGuesses] = useState(initialGuesses);

  const clues: Clue[] = [
    { text: "A movie from the 90s" },
    { text: "Staring Sean Connery" },
    { text: "..." },
    { text: "..." },
    { text: "..." },
  ];

  return (
    <SpaceBetween size="l">
      <Header variant="h1">Who Am I?</Header>

      <Grid
        gridDefinition={[
          { colspan: { default: 12, xxs: 6 } },
          { colspan: { default: 12, xxs: 6 } },
        ]}
      >
        <Container>
          <SpaceBetween size="s">
            <Header variant="h2">Clues</Header>
            {clues.map(({ text }, index) => {
              return (
                <strong>
                  {index + 1}. {text}
                </strong>
              );
            })}
          </SpaceBetween>
        </Container>
        <Container>
          <SpaceBetween size="s">
            <Header variant="h2">Guesses</Header>
            {guesses.map(({ text }: Guess, index) => {
              return (
                <strong>
                  {index + 1}. {text}
                </strong>
              );
            })}
          </SpaceBetween>
        </Container>
      </Grid>

      <Grid
        gridDefinition={[
          { colspan: { default: 12, xxs: 6 } },
          { colspan: { default: 12, xxs: 6 } },
        ]}
      >
        <Autosuggest
          onChange={({ detail }) => setFilter(detail.value)}
          value={filter}
          options={movies}
          enteredTextLabel={(value) => `Use: "${value}"`}
          ariaLabel="Autosuggest example with suggestions"
          placeholder="Enter value"
          empty="No matches found"
        />
        <Button
          variant="primary"
          onClick={() => {
            guesses[guessIndex] = { text: filter };
            setGuesses([...guesses]);
            setGuessIndex(guessIndex + 1);
            setFilter("");
          }}
        >
          Submit
        </Button>
      </Grid>
    </SpaceBetween>
  );
};

export default App;
