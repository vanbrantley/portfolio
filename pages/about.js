import Head from 'next/head';

export default function About() {
  return (

    <>

      <Head>
        <title>About | Van Brantley</title>
      </Head>


      <div className="relative flex">

        <main className="w-full space-y-10 pb-40 pt-20">

          <section id="about-me" className="scroll-mt-6 px-6">

            <div className="max-w-3xl mx-auto space-y-4 text-neutral-700 antialiased leading-relaxed">

              {/* Hook Header */}
              <div className="space-y-3">

                <h1 className="text-3xl font-bold tracking-tight text-neutral-900">About Me</h1>
                <p className="text-xl font-medium text-neutral-500 italic">
                  I build systems to find stories.
                </p>

              </div>


              <hr className="border-neutral-200 my-6" />

              {/* Narrative Paragraphs */}
              <p>
                My path into data wasn’t a straight line. For a long time, I was working
                within structured systems—doing what was laid out for me, getting the grades,
                which eventually led me to Princeton.
              </p>

              <p>
                But academia and theory weren’t enough; I wanted to build things that real
                people interacted with. I tried the startup route with a friend, even stepping
                into a co-founder role, but eventually realized I was executing someone else’s
                dream rather than building my own foundation.
              </p>

              {/* Creative Loop Section */}
              <div className="pt-1 space-y-3">

                <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">The Creative Loop</h2>
                <p>
                  After graduating, I finally had the time and space to follow a deep, lifelong
                  curiosity: music production. Instead of just dabbling, I went headfirst into
                  it for five years. I treated production like an engineering pipeline—learning
                  to write, record, mix, and master a unique style entirely on my own.
                </p>
                <p>
                  I dropped a full album, played live shows, and completely satisfied that curiosity.
                  I closed the loop on that chapter with total closure, realizing that while I loved
                  the creative process, the music industry wasn’t my permanent career path.
                </p>
              </div>

              {/* Why Data Section */}
              <div className="pt-1 space-y-3">
                <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">Why Data?</h2>
                <p>
                  When I discovered data engineering and analysis, everything clicked. It was
                  the exact landing zone I had been looking for.
                </p>
                <p>
                  In pure software engineering, you build a tool and you’re done. In data, you use
                  that same technical engineering mindset, but for a bigger purpose: to set up
                  the environment, clean the noise, and do the actual work of investigation and
                  storytelling. It takes the logical puzzle of computer science and mixes it with
                  the creative execution of music production.
                </p>
              </div>

              {/* Next Chapter Section */}
              <div className="pt-1 space-y-3">
                <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">The Next Chapter</h2>
                <p>
                  I recently moved from my hometown in New Jersey to Brooklyn. I’m fully focused,
                  hyper-prepared, and eager to plug directly into the NYC data scene and build
                  pipelines that matter.
                </p>
              </div>

            </div>
          </section>

        </main>
      </div>

    </>

  );
}


// export default function About() {

//   const copyEmail = () => {
//     navigator.clipboard.writeText('van.brantley@gmail.com');
//     alert('Email address copied to clipboard.');
//   };

//   return (
//     <main className="p-6 max-w-2xl mx-auto bg-white rounded transition-colors duration-300">
//       <h1 className="text-3xl font-bold mb-4 text-gray-900">About Me</h1>

//       <p className="mb-6 leading-relaxed">
//         I’m a Princeton University graduate with a BSE in Computer Science and a minor in Statistics &amp; Machine Learning.
//       </p>
//       <div className="space-y-2">
//         {/* <a
//             href="https://www.linkedin.com/in/vanbrantley/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-blue-600 underline cursor-pointer"
//           >
//             <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
//             LinkedIn
//           </a> */}

//         <a
//           href="https://github.com/vanbrantley"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-blue-600 underline cursor-pointer"
//         >
//           <img src="/images/github.svg" alt="GitHub" className="w-5 h-5" />
//           GitHub
//         </a>

//         {/* <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-blue-600 underline cursor-pointer"
//           >
//             <img src="/images/resume.png" alt="Resume" className="w-5 h-5" />
//             View Resume
//           </a> */}

//         <button
//           onClick={copyEmail}
//           className="flex items-center gap-2 text-blue-600 underline cursor-pointer"
//         >
//           <img src="/images/gmail.png" alt="Email" className="w-5 h-5" />
//           van.brantley@gmail.com (click to copy)
//         </button>
//       </div>

//     </main>
//   );
// }
