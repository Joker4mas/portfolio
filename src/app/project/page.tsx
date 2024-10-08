'use client'

import React from 'react';
// import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [


  {
    id: '1',
    title: 'MedFinder',
    description: 'A full-featured Hospitals and address  built with Next.Js .',
    imageUrl: '/https://imgur.com/Zgg9pl1/',
    projectUrl: 'https://med-finder.vercel.app/',
  },
  {
    id: '2',
    title: 'Jokermas',
    description: 'A site built on react js, to fetch and display user Repository .',
    imageUrl: '/pigGame.png/',
    projectUrl: 'https://joker4mas.netlify.app/',
  },
  {
    id: '3',
    title: 'Rating  App',
    description: 'Rate component built on HTML5, Css3 and Javascript.',
    imageUrl: '/https://i.imgur.com/8tA9gZ3/',
    projectUrl: 'https://interactive-component-fe-menters.vercel.app/',
  },
  {
    id: '4',
    title: 'Ludo game',
    description: 'Pig game built with HTML5, Css3 and Javascript.',
    imageUrl: '/https://i.imgur.com/cuLXLZr.jpg/',
    projectUrl: 'https://ludo-joker4mas.netlify.app/',
  },
  // Add more projects as needed
];

const ProjectsPage: React.FC = () => {
  return (
    <div className=" bg-gray-950">
    

      <main className="container mx-auto p-12 mb-36">
        <h1 className="text-4xl font-bold text-center my-4">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;