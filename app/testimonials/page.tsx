import React from "react";

const Testimonials = () => {
  const myString =
    "&quot;This string has &quot;double&quot; quotes and &apos;single&apos; quotes.&quot;";
  const anotherString =
    "&apos;This string has &apos;single&apos; quotes and &quot;double&quot; quotes.&apos;";

  console.log(myString);
  console.log(anotherString);
  return <div>Testimonials</div>;
};

export default Testimonials;
