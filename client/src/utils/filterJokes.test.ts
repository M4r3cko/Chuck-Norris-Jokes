import { filterJokes } from "./filterJokes";

describe("filterJokes", () => {
  const mockJokes = [
    {
      id: "1",
      value:
        'In the beginning there was nothing...then Chuck Norris Roundhouse kicked that nothing in the face and said "Get a job". That is the story of the universe.',
      categories: ["animal"],
      isOnlyOne: true,
    },
    {
      id: "2",
      value:
        "Chuck Norris first job was as a paperboy. There were no survivors.",
      categories: ["career"],
      isOnlyOne: true,
    },
    {
      id: "3",
      value:
        "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.",
      categories: ["celebrity"],
      isOnlyOne: true,
    },
    {
      id: "4",
      value: "No statement can catch the ChuckNorrisException.",
      categories: ["dev"],
      isOnlyOne: true,
    },
    {
      id: "5",
      value:
        "Chuck Norris does not own a house. He walks into random houses and people move.",
      categories: ["animal"],
      isOnlyOne: true,
    },
    {
      id: "6",
      value:
        "Atomic bombs are Chuck Norris favourite food. They are so crisply and spicy.",
      categories: ["food"],
      isOnlyOne: true,
    },
    {
      id: "7",
      value:
        "After returning from World War 2 unscrathed, Bob Dole was congratulated by Chuck Norris with a handshake. The rest is history.",
      categories: ["history"],
      isOnlyOne: true,
    },
    {
      id: "8",
      value: "Why did the rich man go to prison?",
      categories: ["money"],
      isOnlyOne: true,
    },
    {
      id: "9",
      value: "What do you call a movie about pasta?",
      categories: ["food"],
      isOnlyOne: true,
    },
    {
      id: "10",
      value:
        "The Drummer for Def Leppard's only got one arm. Chuck Norris needed a back scratcher.",
      categories: ["music"],
      isOnlyOne: true,
    },
    {
      id: "11",
      value:
        "Little known fact: Barack Obama listens to country music daily, just because Chuck Norris told him to.",
      categories: ["political"],
      isOnlyOne: true,
    },
    {
      id: "12",
      value: "Jesus can walk on water, but Chuck Norris can swim through land.",
      categories: ["religion"],
      isOnlyOne: true,
    },
    {
      id: "13",
      value: "Time waits for no man. Unless that man is Chuck Norris.",
      categories: ["science"],
      isOnlyOne: true,
    },
    {
      id: "14",
      value:
        "There are no steroids in baseball. Just players Chuck Norris has breathed on.",
      categories: ["sport"],
      isOnlyOne: true,
    },
    {
      id: "15",
      value:
        "As an infant, Chuck Norris' parents gave him a toy hammer. He gave the world Stonehenge.",
      categories: ["travel"],
      isOnlyOne: true,
    },
    {
      id: "16",
      value:
        "As an infant, Chuck Norris' parents gave him a toy hammer. He gave the world Stonehenge.",
      categories: ["travel"],
      isOnlyOne: true,
    },
    {
      id: "17",
      value:
        "As an infant, Chuck Norris' parents gave him a toy hammer. He gave the world Stonehenge.",
      categories: ["travel"],
      isOnlyOne: true,
    },
    {
      id: "18",
      value:
        "As an infant, Chuck Norris' parents gave him a toy hammer. He gave the world Stonehenge.",
      categories: ["travel"],
      isOnlyOne: true,
    },
    {
      id: "19",
      value:
        "As an infant, Chuck Norris' parents gave him a toy hammer. He gave the world Stonehenge.",
      categories: ["travel"],
      isOnlyOne: true,
    },
    {
      id: "20",
      value:
        "As an infant, Chuck Norris' parents gave him a toy hammer. He gave the world Stonehenge.",
      categories: ["travel"],
      isOnlyOne: true,
    },
  ];

  it('should return all jokes when category is set to "random" and searchTerm is an empty string', () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "random",
      count: 20,
      searchTerm: "",
    });

    expect(filteredJokes).toHaveLength(20);
  });

  it("should return jokes with a specific category", () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "animal",
      count: 20,
      searchTerm: "",
    });

    expect(filteredJokes).toHaveLength(2);
  });

  it("should return jokes with a searchTerm in the value", () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "random",
      count: 20,
      searchTerm: "jesus",
    });

    expect(filteredJokes).toHaveLength(1);
  });

  it("should return a specific number of jokes", () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "random",
      count: 3,
      searchTerm: "",
    });

    expect(filteredJokes).toHaveLength(3);
  });

  it("should return a specific number of jokes with a searchTerm in the value and a specific category", () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "sport",
      count: 1,
      searchTerm: "chuck norris",
    });

    expect(filteredJokes).toHaveLength(1);
  });

  it("should return an empty array when there are no matching jokes", () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "food",
      count: 10,
      searchTerm: "sushi",
    });
    expect(filteredJokes).toHaveLength(0);
  });

  it("should return an empty array when there are no jokes", () => {
    const filteredJokes = filterJokes({
      jokes: [],
      category: "random",
      count: 5,
      searchTerm: "chuck",
    });

    expect(filteredJokes).toHaveLength(0);
  });

  it("should return all available jokes when count is greater than the number of jokes", () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "random",
      count: 25,
      searchTerm: "",
    });

    expect(filteredJokes).toHaveLength(mockJokes.length);
  });

  it("should return all jokes when category is travel", () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "travel",
      count: 20,
      searchTerm: "",
    });

    expect(filteredJokes).toHaveLength(6);
  });

  it("should return an empty array when the searchTerm is not found in any jokes", () => {
    const filteredJokes = filterJokes({
      jokes: mockJokes,
      category: "random",
      count: 5,
      searchTerm: "nonexistent",
    });

    expect(filteredJokes).toHaveLength(0);
  });
});
