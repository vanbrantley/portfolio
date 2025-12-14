import Head from 'next/head';
import Link from "next/link";
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Van Brantley | Data Analyst</title>
      </Head>
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
          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <Link href="/projects/clothing-brand">
              <ProjectCard
                title="Streetwear Analytics"
                description="Business intelligence dashboard that tracks sales, customer trends, and product performance for a simulated clothing e-commerce store."
                image="/images/streetwear-icon.png"
                techIcons={[
                  { src: '/images/aws.png', label: 'AWS' },
                  { src: '/images/python.webp', label: 'Python' },
                  { src: '/images/postgresql.png', label: 'PostreSQL' },
                  { src: '/images/ga4.jpg', label: 'Google Analytics 4' },
                  { src: '/images/shopify.webp', label: 'Shopify' },
                ]}
              />
            </Link>
            <Link href="/projects/personal-finance">
              <ProjectCard
                title="Personal Finance"
                description="Excel template designed to help you take control of your finances with clarity and insight."
                image="/images/budget-icon.png"
                techIcons={[
                  { src: '/images/sheets.png', label: 'Google Sheets' },
                  { src: '/images/bigquery.png', label: 'Google BigQuery' },
                  { src: '/images/colab.webp', label: 'Google Colab' },
                  { src: '/images/python.webp', label: 'Python' },
                ]}
              />
            </Link>
            <Link href="/projects/bobcat">
              <ProjectCard
                title="BoBCAT"
                description="Excel template designed to help you take control of your finances with clarity and insight."
                image="/images/bobcat.jpg"
                techIcons={[
                  { src: '/images/drive.png', label: 'Google Drive' },
                  { src: '/images/forms.webp', label: 'Google Forms' },
                  { src: '/images/sheets.png', label: 'Google Sheets' },
                  { src: '/images/looker.png', label: 'Looker Studio' },
                ]}
              />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
