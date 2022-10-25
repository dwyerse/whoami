import "./Autosuggest.css";
import { matchSorter } from "match-sorter";

function Autosuggest(props: any) {
  const { choices, containerWidth, filter, setFilter } = props;

  const filteredChoices = matchSorter(choices, filter);

  return (
    <div className="autosuggest">
      <input
        className="autosuggest-input"
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        value={filter}
      ></input>
      {filter && (
        <div className="autosuggest-choices" style={{ width: containerWidth }}>
          {filteredChoices.map((choice, index) => {
            return (
              <div
                key={`filter${index}`}
                className="choice"
                onClick={(event: any) => {
                  console.log(event.target.outerText);
                  setFilter(event.target.outerText);
                }}
              >
                {choice}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Autosuggest;
