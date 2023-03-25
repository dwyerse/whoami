import { useState } from "react";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import AppLayout from "@cloudscape-design/components/app-layout";
import Grid from "@cloudscape-design/components/grid";
import Icon from "@cloudscape-design/components/icon";
import Autosuggest from "@cloudscape-design/components/autosuggest";
import Popover from "@cloudscape-design/components/popover";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import { applyMode, Mode } from "@cloudscape-design/global-styles";

import { Answers } from "./Answers";
import { getTodaysClue } from "./Clues";

export type Guess = {
  text: string;
};

export type Clue = {
  text: string;
};

enum GameStates {
  Pending,
  Success,
  Failure,
}

applyMode(Mode.Dark);

function App() {
  return <AppLayout navigationHide toolsHide content={<Content />}></AppLayout>;
}

const Content = () => {
  const [gameState, setGameState] = useState(GameStates.Pending);

  const answers = Answers.map((answer) => {
    return {
      value: answer,
    };
  });

  const clue = getTodaysClue();
  const { name, clue1, clue2, clue3, clue4, clue5 } = clue;
  const answer = name;

  const clues: Clue[] = [
    { text: clue1 },
    { text: clue2 },
    { text: clue3 },
    { text: clue4 },
    { text: clue5 },
  ];

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

  return (
    <SpaceBetween size="m">
      <Header variant="h1">Who Am I?</Header>

      <Grid
        gridDefinition={[
          { colspan: { default: 12, xxs: 6 } },
          { colspan: { default: 12, xxs: 6 } },
        ]}
      >
        <Container>
          <SpaceBetween size="xs">
            <Header variant="h3">Clues</Header>
            {clues.map(({ text }, index) => {
              if (index > guessIndex && gameState === GameStates.Pending) {
                return <strong key={`clue-${index}`}>{index + 1}.</strong>;
              }

              return (
                <strong key={`clue-${index}`}>
                  {index + 1}. {text}
                </strong>
              );
            })}
          </SpaceBetween>
        </Container>
        <Container>
          <SpaceBetween size="xs">
            <Header variant="h3">Guesses</Header>
            {guesses.map(({ text }: Guess, index) => {
              const icon = IconVariant(text, answer);
              if (index >= guessIndex) {
                return <strong key={`guess-${index}`}>{index + 1}.</strong>;
              }
              return (
                <SpaceBetween
                  key={`guess-${index}`}
                  direction="horizontal"
                  size="xs"
                >
                  <strong>
                    {index + 1}. {text}
                  </strong>
                  {icon}
                </SpaceBetween>
              );
            })}
          </SpaceBetween>
        </Container>
      </Grid>

      {gameState === GameStates.Pending && (
        <Grid
          gridDefinition={[
            { colspan: { default: 12, xxs: 6 } },
            { colspan: { default: 12, xxs: 6 } },
          ]}
        >
          <Autosuggest
            onChange={({ detail }) => setFilter(detail.value)}
            value={filter}
            options={answers}
            enteredTextLabel={(value) => `Use: "${value}"`}
            ariaLabel="Autosuggest example with suggestions"
            placeholder="Enter value"
            empty="No matches found"
          />
          <Button
            variant="primary"
            onClick={() => {
              if (filter && Answers.indexOf(filter) > -1 && guessIndex < 5) {
                if (filter === answer) {
                  setGameState(GameStates.Success);
                } else if (guessIndex >= 4) {
                  setGameState(GameStates.Failure);
                }
                guesses[guessIndex] = { text: filter };
                setGuesses([...guesses]);
                setGuessIndex(guessIndex + 1);
                setFilter("");
              }
            }}
          >
            Submit
          </Button>
        </Grid>
      )}

      {gameState !== GameStates.Pending && (
        <SpaceBetween size="s">
          <Container>
            <SpaceBetween direction="horizontal" size="l">
              {gameState === GameStates.Success && <h1>Victory!</h1>}
              {gameState === GameStates.Failure && (
                <h1>Better luck next time!</h1>
              )}
              {gameState === GameStates.Success && (
                <Icon name="status-positive" size="large" variant="success" />
              )}
              {gameState === GameStates.Failure && (
                <Icon name="status-negative" size="large" variant="error" />
              )}
            </SpaceBetween>
            <h3>The answer was {answer}.</h3>
            <Popover
              dismissButton={false}
              position="top"
              size="small"
              triggerType="custom"
              content={
                <StatusIndicator type="success">
                  Copied to clipboard
                </StatusIndicator>
              }
            >
              <Button
                iconAlign="right"
                iconName="share"
                onClick={() => {
                  navigator.clipboard.writeText(
                    getShareableString(guesses, guessIndex, answer)
                  );
                }}
              >
                Share
              </Button>
            </Popover>
          </Container>
        </SpaceBetween>
      )}
    </SpaceBetween>
  );
};

const getShareableString = (
  guesses: Guess[],
  guessIndex: number,
  answer: string
): string => {
  let shareableString = "Who Am I? #0\n👤";

  for (let i = 0; i < guesses.length; i++) {
    if (i > guessIndex - 1) {
      return shareableString;
    }
    shareableString += answer === guesses[i].text ? "✅" : "❌";
  }
  return shareableString;
};

const IconVariant = (guess: string, answer: string) => {
  if (guess === answer) {
    return <Icon name="status-positive" variant="success" />;
  } else {
    return <Icon name="status-negative" variant="error" />;
  }
};

export default App;
