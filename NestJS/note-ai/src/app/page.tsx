// import React from "react";
// import { Header } from "./Header";
// import { Tweet } from 'react-tweet';

import Link from "next/link";

// export default function page() {
//   return (
//     <section>
//       <Header>
//         <h2>Helloo!</h2>
//       </Header>
//       <p>Hello!! This is my web page using Next</p>
//       <Tweet id="1629307668568633344" />
//     </section>
//   );
// }

export default function Home() {
  return (
    <section>
      <h1>All Quizzes</h1>
      <ul>
        <li><Link href="/quiz/1"> Quiz 1</Link></li>
        <li><Link href="/quiz/2"> Quiz 2</Link></li>
        <li><Link href="/quiz/3"> Quiz 3</Link></li>
      </ul>
    </section>
  );
}
