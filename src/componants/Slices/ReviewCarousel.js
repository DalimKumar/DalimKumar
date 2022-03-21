import Reviewcard from "./Reviewcard";
import Marquee from "react-fast-marquee";

export default function Reviews({ reviews }) {
  return (
    <div>
      <Marquee gradientColor={[31, 41, 55]}>
        <div className="flex px-5">
          {reviews.map((review) => {
            return (
              <Reviewcard
                className="px-4 py-3"
                key={review.CustomerReviews.title}
                title={review.CustomerReviews.title}
                stars={review.CustomerReviews.reviewStars}
                Name={review.CustomerReviews.customerName}
                Review={review.CustomerReviews.comment}
              />
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}
