type Clue = {
  name: string;
  clue1: string;
  clue2: string;
  clue3: string;
  clue4: string;
  clue5: string;
};

export function getTodaysClue() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const day = parseInt(urlParams.get("day")!);
  if (day < Clues.length) {
    return Clues[day];
  }
  return Clues[0];
}

const Clues: Clue[] = [
  {
    name: "Bruce Willis",
    clue1: "I am a man born in the 1950s.",
    clue2: "I was born in West Germany.",
    clue3: "I played David Addison in the television series Moonlighting.",
    clue4: "I starred alongside Damon Wayans in the 'The Last Boy Scout'.",
    clue5:
      "I am best known for my portrayal of John McClane in the Die Hard franchise.",
  },
  {
    name: "Winona Ryder",
    clue1: "I am a woman born in the 1980s.",
    clue2: "My middle name is Laura",
    clue3: "I had my film debut in Lucas (1986)",
    clue4:
      "I had a guest appearance in Friends as Rachel's college sorority sister",
    clue5:
      "I am well known for my portrayal of Joyce Byers in Stranger Things.",
  },
  {
    name: "John Cleese",
    clue1: "I was born in 1939.",
    clue2:
      "I co-own an antique shop in Montecito, CA called Chistine Schell Fine Objects.",
    clue3: "My first wife's name was Connie Booth",
    clue4: "I was a member of Month Python",
    clue5: "I played Basil Fawtly in Fawlty Towers",
  },
];
