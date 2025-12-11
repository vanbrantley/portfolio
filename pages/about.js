import Navbar from '@/components/Navbar';

export default function About() {

  const copyEmail = () => {
    navigator.clipboard.writeText('van.brantley@gmail.com');
    alert('Email address copied to clipboard.');
  };

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-2xl mx-auto bg-white rounded transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">About Me</h1>
        {/* <p className="mb-6 leading-relaxed">
          I’m a Princeton University
          <img
            src="/images/princeton.png"
            alt="Princeton emblem"
            className="w-5 h-5 inline align-baseline ml-1 mr-1"
          />
          graduate with a BSE in Computer Science and a minor in Statistics &amp; Machine Learning. Currently, I’m transitioning from software engineering into data analysis, combining strong technical skills with a passion for uncovering insights from data.
        </p> */}
        <p className="mb-6 leading-relaxed">
          I’m a Princeton University graduate with a BSE in Computer Science and a minor in Statistics &amp; Machine Learning. Currently, I’m transitioning from software engineering into data analysis, combining strong technical skills with a passion for uncovering insights from data.
        </p>


        <div className="space-y-2">
          {/* <a
            href="https://www.linkedin.com/in/vanbrantley/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 underline cursor-pointer"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </a> */}

          <a
            href="https://github.com/vbplot2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 underline cursor-pointer"
          >
            <img src="/images/github.svg" alt="GitHub" className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 underline cursor-pointer"
          >
            <img src="/images/resume.png" alt="Resume" className="w-5 h-5" />
            View Resume
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 text-blue-600 underline cursor-pointer"
          >
            <img src="/images/gmail.png" alt="Email" className="w-5 h-5" />
            van.brantley@gmail.com (click to copy)
          </button>
        </div>

      </main>
    </>
  );
}
