import { randomize } from "./randomize";

describe("randomize", () => {
  it("should return a randomized array of objects", () => {
    const items: { value: string }[] = [
      { value: "item 1" },
      { value: "item 2" },
      { value: "item 3" },
      { value: "item 4" },
      { value: "item 5" },
      { value: "item 6" },
      { value: "item 7" },
      { value: "item 8" },
      { value: "item 9" },
      { value: "item 10" },
    ];
    const randomized = randomize(items as any);
    expect(randomized.length).toBe(items.length);
    expect(randomized).not.toEqual(items);
  });

  it("should return a randomized array of numbers", () => {
    const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomized = randomize(items as any);
    expect(randomized.length).toBe(items.length);
    expect(randomized).not.toEqual(items);
  });

  it("should return a randomized array of strings", () => {
    const items: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const randomized = randomize(items as any);
    expect(randomized.length).toBe(items.length);
    expect(randomized).not.toEqual(items);
  });
});
