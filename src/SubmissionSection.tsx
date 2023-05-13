import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "@cloudscape-design/components/button";
import Grid from "@cloudscape-design/components/grid";
import Autosuggest from "@cloudscape-design/components/autosuggest";
import { Answers } from "./Answers";
import GameState from "./GameStates";
import { useAppDispatch } from "./store/hooks";
import { setGameState, setGuessIndex, setGuess } from "./store/gameStateSlice";

type SubmissionSectionProps = {
  guessIndex: number;
  answer: string;
};

const SubmissionSection = (props: SubmissionSectionProps) => {
  const [filter, setFilter] = useState("");

  const answers = Answers.map((answer) => {
    return {
      value: answer,
    };
  });

  const { guessIndex, answer } = props;

  const dispatch = useAppDispatch();

  return (
    <Grid gridDefinition={[{ colspan: { default: 12, xxs: 6 } }, { colspan: { default: 12, xxs: 6 } }]}>
      <Autosuggest onChange={({ detail }) => setFilter(detail.value)} value={filter} options={answers} enteredTextLabel={(value) => `Use: "${value}"`} placeholder="Enter value" />
      <Button
        variant="primary"
        onClick={() => {
          if (filter && Answers.indexOf(filter) > -1 && guessIndex < 5) {
            if (filter === answer) {
              dispatch(setGameState({ gameState: GameState.Success }));
            } else if (guessIndex >= 4) {
              dispatch(setGameState({ gameState: GameState.Failure }));
            }
            dispatch(setGuess({ guessIndex, guess: filter }));
            dispatch(setGuessIndex({ guessIndex: guessIndex + 1 }));
            setFilter("");
          }
        }}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default React.memo(SubmissionSection);
