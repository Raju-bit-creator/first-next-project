
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
       {["1","2", "3" ].map((path)=>{
        return(
            <div key={path}>
                <img src={`/assets/${path}.jpg`} alt="it images" width={200} height={400}></img>
            </div>
        )
       })}

      </>
    );
  }