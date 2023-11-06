import { IPlayerResult } from "../interfaces";
import { useState } from "react";

interface IProps {
  playerResult: IPlayerResult;
  setFavourite: (favourite: string) => void;
}

export const ScoreCard = ({ playerResult, setFavourite }: IProps) => {
  const [isInvited, setIsInvited] = useState(false);

  const toggleIsInvited = () => {
    setIsInvited(!isInvited);
  };

  return (
    <div className="flex flex-col bg-green-300 w-28 p-3 justify-center items-center border border-gray-600 rounded">
      <p className="font-bold">
        {playerResult.name} {isInvited && "*"}
      </p>
      <p>{playerResult.score}</p>
      <button
        onClick={() => toggleIsInvited()}
        className="bg-green-400 rounded py-1 px-2 hover:bg-green-500"
      >
        invited
      </button>
      <button
        onClick={() => setFavourite(playerResult.name)}
        className="mt-1 bg-green-400 rounded py-1 px-2 hover:bg-green-500"
      >
        favourite
      </button>
    </div>
  );
};
