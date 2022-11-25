import { FaStar } from "react-icons/fa";

const BookRatingStar = ({ selected, onSelect }) => {
  return (
    <FaStar
      color={selected ? "var(--text-color)" : "grey"}
      onClick={onSelect}
    />
  );
};
export default BookRatingStar;
