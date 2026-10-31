import Image from "next/image";
import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'NBA Stats Application',
    description: 'A front-end app for discovering NBA stats.',
    technologies: ['Node.js', 'JavaScript', 'CSS', 'External APIs'],
    link: 'https://github.com/derasmuso/wdd330-final-project'
  },
  {
    title: 'Recipe Website',
    description: 'A website designed for dsicovering fun activities to do in Utah County, Utah.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    link: 'https://derasmuso.github.io/wdd231/project/'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}