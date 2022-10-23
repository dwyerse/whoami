import "./Autosuggest.css";
import { matchSorter } from "match-sorter";
import { useState } from "react";

function Autosuggest(props: any) {
  const { choices } = props;

  const [filter, setFilter] = useState("");

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
        <div className="autosuggest-choices">
          {filteredChoices.map((choice) => {
            return (
              <div
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
