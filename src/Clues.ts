type Clue = {
  name: string;
  clue1: string;
  clue2: string;
  clue3: string;
  clue4: string;
  clue5: string;
};

export function getTodaysClue(): Clue {
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
    clue5: "I am best known for my portrayal of John McClane in the Die Hard franchise.",
  },
  {
    name: "Winona Ryder",
    clue1: "I am a woman born in the 1970s.",
    clue2: "My middle name is Laura",
    clue3: "I had my film debut in Lucas (1986)",
    clue4: "I had a guest appearance in Friends as Rachel's college sorority sister",
    clue5: "I am well known for my portrayal of Joyce Byers in Stranger Things.",
  },
  {
    name: "John Cleese",
    clue1: "I was born in 1939.",
    clue2: "I co-own an antique shop in Montecito, CA called Chistine Schell Fine Objects.",
    clue3: "My first wife's name was Connie Booth",
    clue4: "I was a member of Month Python",
    clue5: "I played Basil Fawtly in Fawlty Towers",
  },
  {
    name: "Tom Hanks",
    clue1: "I was born in Concord, California.",
    clue2: "I attended Chabot College and California State University, Sacramento but never graduated from college.",
    clue3: "I voiced the character Woody in the 'Toy Story' franchise.",
    clue4: "I starred in the film 'Cast Away' and my co-star was a volleyball named Wilson.",
    clue5: "I played the lead role in 'Saving Private Ryan' and 'Apollo 13'.",
  },
  {
    name: "Robert Downey Jr.",
    clue1: "I was born in Manhattan, New York City.",
    clue2: "I come from a family of actors and filmmakers; my father was an underground filmmaker, and my mother, Elsie Ford, was an actress.",
    clue3: "I played the lead role in the 'Iron Man' and 'Sherlock Holmes' franchises.",
    clue4: "I won the Golden Globe for Best Actor for my role in 'Chaplin'.",
    clue5: "I played the role of Tony Stark in the Marvel Cinematic Universe.",
  },
  {
    name: "Jennifer Lawrence",
    clue1: "I was born in Indian Hills, Kentucky.",
    clue2: "I was discovered by a talent scout when I was 14 while on vacation in New York City with my family.",
    clue3: "I played the lead role in 'The Hunger Games' franchise.",
    clue4: "I starred in the films 'Winter's Bone' and 'American Hustle'.",
    clue5: "I played the role of Mystique in the X-Men film series.",
  },
  {
    name: "Leonardo DiCaprio",
    clue1: "I was born in Los Angeles, California.",
    clue2: "I was named after the artist Leonardo da Vinci because my pregnant mother felt me kick while she was looking at a painting of the famous artist.",
    clue3: "I won the Academy Award for Best Actor for my role in 'The Revenant'.",
    clue4: "I played Jack Dawson in the film 'Titanic'.",
    clue5: "I starred in the films 'The Wolf of Wall Street' and 'Inception'.",
  },
  {
    name: "Meryl Streep",
    clue1: "I was born in Summit, New Jersey.",
    clue2: "I graduated from Vassar College with a degree in Drama and went on to earn a Master of Fine Arts degree from Yale School of Drama.",
    clue3: "I played Miranda Priestly in the film 'The Devil Wears Prada'.",
    clue4: "I starred in the films 'Sophie's Choice' and 'Julie & Julia'.",
    clue5: "I played Margaret Thatcher in the film 'The Iron Lady'.",
  },
  {
    name: "Angelina Jolie",
    clue1: "I was born in Los Angeles, California.",
    clue2: "I dropped out of college to pursue my acting career and worked as a fashion model before that.",
    clue3: "I played Lara Croft in the 'Tomb Raider' franchise.",
    clue4: "I won the Academy Award for Best Supporting Actress for my role in 'Girl, Interrupted'.",
    clue5: "I directed and starred in the film 'Unbroken'.",
  },
  {
    name: "Brad Pitt",
    clue1: "I was born in Shawnee, Oklahoma.",
    clue2: "I dropped out of college two weeks before graduation to move to California and pursue my acting career.",
    clue3: "I played the lead role in the film 'Fight Club'.",
    clue4: "I won the Academy Award for Best Supporting Actor for my role in 'Once Upon a Time in Hollywood'.",
    clue5: "I starred in the films 'Ocean's Eleven', 'Mr. & Mrs. Smith', and 'Inglourious Basterds'.",
  },
  {
    name: "Anne Hathaway",
    clue1: "I was born in Brooklyn, New York City.",
    clue2: "I was the first teenager admitted to the Barrow Group Theater Company's acting program.",
    clue3: "I played the role of Mia Thermopolis in 'The Princess Diaries'.",
    clue4: "I won the Academy Award for Best Supporting Actress for my role in 'Les Misérables'.",
    clue5: "I played the role of Selina Kyle in 'The Dark Knight Rises'.",
  },
  {
    name: "Ryan Reynolds",
    clue1: "I was born in Vancouver, British Columbia, Canada.",
    clue2: "I dropped out of college after a year to pursue my acting career.",
    clue3: "I played the lead role in the film 'Deadpool'.",
    clue4: "I starred in the films 'The Proposal' and 'Safe House'.",
    clue5: "I played the role of Nick Walker in 'R.I.P.D.'.",
  },
  {
    name: "Scarlett Johansson",
    clue1: "I was born in New York City.",
    clue2: "I made my film debut at the age of 9 in the film 'North'.",
    clue3: "I played the role of Black Widow in the Marvel Cinematic Universe.",
    clue4: "I starred in the films 'Lost in Translation' and 'Marriage Story'.",
    clue5: "I played the lead role in the film 'Lucy'.",
  },
  {
    name: "Chris Evans",
    clue1: "I was born in Boston, Massachusetts.",
    clue2: "I come from a family of actors; my mother is a former theater company artistic director and my uncle is an actor.",
    clue3: "I played the role of Captain America in the Marvel Cinematic Universe.",
    clue4: "I starred in the films 'Snowpiercer' and 'Knives Out'.",
    clue5: "I played the role of Johnny Storm/Human Torch in the 'Fantastic Four' films.",
  },
];
