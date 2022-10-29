type Clue = {
  name: string;
  clue1: string;
  clue2: string;
  clue3: string;
  clue4: string;
  clue5: string;
};

export function getTodaysClue() {
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
];
