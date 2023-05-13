import AppLayout from "@cloudscape-design/components/app-layout";
import Container from "@cloudscape-design/components/container";
import Grid from "@cloudscape-design/components/grid";
import Header from "@cloudscape-design/components/header";
import Icon from "@cloudscape-design/components/icon";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { applyMode, Mode } from "@cloudscape-design/global-styles";
import { Provider } from "react-redux";
import { getTodaysClue } from "./Clues";
import Failure from "./Failure";
import GameState from "./GameStates";
import { useAppSelector } from "./store/hooks";
import store from "./store/store";
import SubmissionSection from "./SubmissionSection";
import Success from "./Success";

applyMode(Mode.Dark);

function App() {
  return (
    <Provider store={store}>
      <AppLayout navigationHide toolsHide content={<Content />}></AppLayout>
    </Provider>
  );
}

const Content = () => {
  const { gameState, guessIndex, guesses } = useAppSelector((state) => state.gameState);

  const clue = getTodaysClue();
  const { name, clue1, clue2, clue3, clue4, clue5 } = clue;
  const answer = name;

  const clues: string[] = [clue1, clue2, clue3, clue4, clue5];

  const shareable = getShareableString(guesses, guessIndex, answer);

  return (
    <SpaceBetween size="m">
      <Header variant="h1">Who Am I?</Header>

      <Grid gridDefinition={[{ colspan: { default: 12, xxs: 6 } }, { colspan: { default: 12, xxs: 6 } }]}>
        <Container>
          <SpaceBetween size="xs">
            <Header variant="h3">Clues</Header>
            {clues.map((text, index) => {
              if (index > guessIndex && gameState === GameState.Pending) {
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
            {guesses.map((text, index) => {
              const icon = IconVariant(text, answer);
              if (index >= guessIndex) {
                return <strong key={`guess-${index}`}>{index + 1}.</strong>;
              }
              return (
                <SpaceBetween key={`guess-${index}`} direction="horizontal" size="xs">
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

      {gameState === GameState.Pending && <SubmissionSection guessIndex={guessIndex} answer={answer} />}
      {gameState === GameState.Success && <Success answer={answer} shareable={shareable} />}
      {gameState === GameState.Failure && <Failure answer={answer} shareable={shareable} />}
    </SpaceBetween>
  );
};

const getShareableString = (guesses: string[], guessIndex: number, answer: string): string => {
  let shareableString = "Who Am I? #0\n👤";

  for (let i = 0; i < guesses.length; i++) {
    if (i > guessIndex - 1) {
      return shareableString;
    }
    shareableString += answer === guesses[i] ? "✅" : "❌";
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
