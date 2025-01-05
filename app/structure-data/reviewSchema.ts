const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Course",
    name: "Super Affiliate System",
  },
  author: {
    "@type": "Person",
    name: "Jane Doe",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  reviewBody:
    "John Crestani's Super Affiliate System completely changed my life. I was able to quit my 9-5 job and now I'm making a full-time income online!",
};

export default reviewSchema;
