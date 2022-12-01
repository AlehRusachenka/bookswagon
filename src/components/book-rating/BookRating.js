import BookRatingStar from "../book-rating-star/BookRatingStar";
import useStarRating from "../../hooks/useStarRating";

const starsArray = (length) => [...Array(length)];

const BookRating = ({ totalStars = 5 }) => {
  const [starIs, setStarIs] = useStarRating(0, "starSelected");

  return (
    <>
      {starsArray(totalStars).map((n, i) => (
        <BookRatingStar
          key={i}
          selected={starIs > i}
          onSelect={() => setStarIs(i + 1)}
        />
      ))}
      <p>
        {starIs} of {totalStars}
      </p>
    </>
  );
};

export default BookRating;
