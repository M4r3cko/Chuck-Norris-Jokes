import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { blockInvalidCharacters } from "../utils/blockInvalidCharacters";

export type CountInputProps = {
  jokesCount: number;
  handleJokesCountChange: (value: number) => void;
};

export const JokesCountInput = ({
  jokesCount,
  handleJokesCountChange,
}: CountInputProps) => {
  const handleChange = (_: string, valueAsNumber: number) =>
    handleJokesCountChange(valueAsNumber);
  const numberInputProgression = () => {
    return jokesCount >= 100 ? 100 : 10 && jokesCount < 10 ? 1 : 10;
  };

  return (
    <NumberInput
      step={numberInputProgression()}
      min={1}
      max={500}
      variant="joke"
      aria-label="number of jokes"
      onChange={handleChange}
      value={jokesCount}
    >
      <NumberInputField
        onKeyDown={blockInvalidCharacters}
        placeholder="Number of jokes"
      />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
