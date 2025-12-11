import Head from 'next/head';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Van Brantley | Data Analyst</title>
      </Head>
      <Navbar />
      <main className="p-6">
        <section className="h-screen flex flex-col items-center justify-center text-center bg-white transition-colors duration-300">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Van Brantley</h1>
          <p className="text-lg mb-6 text-gray-700">
            Turning data into insight through analysis and storytelling
          </p>
          <a href="#projects" className="animate-bounce mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-black-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>

        </section>

        <section id="projects" className="py-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Streetwear Analytics Dashboard"
              description="Business intelligence dashboard that tracks sales, customer trends, and product performance for a simulated clothing e-commerce store."
              image="/images/streetwear-icon.png"
              techIcons={[
                { src: '/images/sql.webp', label: 'SQL' },
                { src: '/images/powerbi.webp', label: 'Power BI' },
                { src: '/images/aws.png', label: 'AWS' }
              ]}
              link="#" // placeholder link
            />
            {/* <ProjectCard
              title="NYC Rent Explorer"
              description="Interactive map-based dashboard designed to make New York City rent data easy to explore and analyze."
              image="/images/rent-icon.png"
              techIcons={[
                { src: '/images/python.webp', label: 'Python' },
                { src: '/images/pandas.png', label: 'Pandas' },
                { src: '/images/jupyter.png', label: 'Jupyter' },
                { src: '/images/streamlit.png', label: 'Streamlit' },
              ]}
              link="https://nyc-rent-explorer.streamlit.app/"
            /> */}
            <ProjectCard
              title="Personal Finance Dashboard"
              description="Excel template designed to help you take control of your finances with clarity and insight."
              image="/images/budget-icon.png"
              techIcons={[
                { src: '/images/excel.jpg', label: 'Excel' }
              ]}
              link="#" // placeholder link
            // link="https://drive.google.com/drive/folders/1uLYHniJfvrdoWd5NXMsbgfsvkM32ZfnR?usp=sharing"
            />
          </div>
        </section>
      </main>
    </>
  );
}
