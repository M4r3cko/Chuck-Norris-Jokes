import { blockInvalidCharacters } from "./blockInvalidCharacters";
import { KeyboardEvent } from "react";

interface MockEvent {
  key: string;
  preventDefault: jest.Mock<any, any, any>;
}

describe("blockInvalidCharacters", () => {
  it("should block the 'e' key", () => {
    const mockEvent: MockEvent = { key: "e", preventDefault: jest.fn() };
    blockInvalidCharacters(mockEvent as any);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it("should block the 'E' key", () => {
    const mockEvent: MockEvent = { key: "E", preventDefault: jest.fn() };
    blockInvalidCharacters(mockEvent as any);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it("should block the '+' key", () => {
    const mockEvent: MockEvent = { key: "+", preventDefault: jest.fn() };
    blockInvalidCharacters(mockEvent as any);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it("should block the '-' key", () => {
    const mockEvent: MockEvent = { key: "-", preventDefault: jest.fn() };
    blockInvalidCharacters(mockEvent as any);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it("should block the '.' key", () => {
    const mockEvent: MockEvent = { key: ".", preventDefault: jest.fn() };
    blockInvalidCharacters(mockEvent as any);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });

  it("should not block other keys", () => {
    const mockEvent: MockEvent = { key: "a", preventDefault: jest.fn() };
    blockInvalidCharacters(mockEvent as any);
    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
  });
});
