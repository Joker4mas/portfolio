'use client'

import Hero from './components/Hero'
import Skills from './components/Skills';
export default function Home() {



  return (
    <div className="">
      <main className="p-24 text-center mx-auto border-2 border-rose-800">
       <Hero />
      <Skills/>

      </main>
     
    </div>
  );
}
