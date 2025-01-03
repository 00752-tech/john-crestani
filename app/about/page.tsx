/* eslint-disable prefer-const */
import React from 'react'

const AboutPage = () => {
  let myString = "This string contains &quot;double quotes&quot; and &apos;single quotes&apos;.";
console.log(myString);

let anotherString = 'This string also contains &quot;double quotes&quot; and &apos;single quotes&apos;.';
console.log(anotherString);

let myHTML = "<p>This is a paragraph with &quot;quotes&quot; in it.</p>";
console.log(myHTML);

let myJSON = `{"name": "John Doe", "age": 30, "city": "New York"}`;
console.log(myJSON);


let myJavascript = `
function myFunction() {
  let message = 'Hello, world!';
  console.log(message);
}
myFunction();
`;
console.log(myJavascript);


  return (
    <div>AboutPage</div>
  )
}

export default AboutPage