import "./Clues.css";

export type Clue = {
  text: string;
};

type CluesProps = {
  clues: Clue[];
};

function Clues(props: CluesProps) {
  const { clues } = props;

  return (
    <div className="clues-container">
      <div className="clues-title">Clues</div>
      {clues.map((clue: Clue, index: number) => {
        const { text } = clue;
        return (
          <div key={`clues-${index}`}>
            <span className="digit">{index + 1}.</span> {text}
          </div>
        );
      })}
    </div>
  );
}

export default Clues;
