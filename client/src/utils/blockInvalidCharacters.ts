import { KeyboardEvent } from "react";

export const blockInvalidCharacters = (event: KeyboardEvent) =>
  ["e", "E", "+", "-", "."].includes(event.key) && event.preventDefault();
