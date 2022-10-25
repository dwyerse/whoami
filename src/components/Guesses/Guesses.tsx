import "./Guesses.css";

export type Guess = {
  text: string;
};

export type GuessProps = {
  guesses: Guess[];
};

function Guesses(props: GuessProps) {
  const { guesses } = props;

  return (
    <div className="guesses-container">
      <div className="guesses-title">Guesses</div>
      {guesses.map((guess: Guess, index: number) => {
        const { text } = guess;
        return (
          <div key={`guesses-${index}`} className="guess">
            <span className="digit">{index + 1}.</span> {text}
          </div>
        );
      })}
    </div>
  );
}

export default Guesses;
