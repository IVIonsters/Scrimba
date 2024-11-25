/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


// function Joke(props) {
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.setup}</h1>
//       <h2>{props.punchLine}</h2>
//     </div>
//   )
// }

function Joke({ setup, finish }) {
  return (
    <div>
      <h1>{setup}</h1>
      <h2>{finish}</h2>
    </div>
  );
}

export default Joke;