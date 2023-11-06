interface IProps {
  children: React.ReactNode;
  title: string;
}

export const Wrapper = ({ children, title }: IProps) => {
  return (
    <fieldset className="border border-gray-400 rounded p-4">
      <legend>{title}</legend>
      <section>{children}</section>
    </fieldset>
  );
};
