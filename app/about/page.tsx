
// import Head from "next/head"

// function About() {
   
//     return <> 
//      <Head>
//         <title>about raju tamang</title>
//         <meta name="description" content="want to know about raju music"></meta>
//      </Head>
//     <h4>this is about us page</h4>
//     </>
// }
//  export default About
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "abouit Next App",
    description: "what is this",
  };
export default function About() {
    return (
      <>
      
        <h4>This is the about us page</h4>
      </>
    );
  }