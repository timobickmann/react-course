interface IProps {
  children: React.ReactNode;
}

function CardWrapper({ children }: IProps) {
  return (
    <div className="shadow-md shadow-gray-800 flex gap-5 items-center bg-gray-800 p-2 rounded">
      {children}
    </div>
  );
}
export default CardWrapper;
