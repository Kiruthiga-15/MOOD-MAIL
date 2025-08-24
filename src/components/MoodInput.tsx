import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

type Props = {
  mood: string;
  setMood: (val: string) => void;
  onGenerate: () => void;
  disabled: boolean;
};
const MoodInput = ({ mood, setMood, onGenerate, disabled }: Props) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="how are youe feeling now..?(happy,sad,angry...)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
      />
      <Button
        className="w-full bg-black text-white cursor-pointer"
        onClick={onGenerate}
        disabled={disabled}
      >
        Genrate Email Template
      </Button>
    </div>
  );
};

export default MoodInput;
