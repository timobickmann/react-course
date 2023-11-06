interface IProps {
  choices: string[];
}

export const Dropdown = ({ choices }: IProps) => {
  return (
    <>
      <select className="mt-6">
        {choices.map((choice) => (
          <option value={choice.toLowerCase().replace(" ", "")}>
            {choice}
          </option>
        ))}
      </select>
    </>
  );
};
