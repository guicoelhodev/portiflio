import { AboutMe } from '../components/Home/AboutMe';
import { CarouselTools } from '../components/Home/CarouselTools';
import { Header } from '../components/Home/Header';
import { Projects } from '../components/Home/Projects';

import { SiGamedeveloper } from 'solid-icons/si'
import { FaSolidChevronDown } from 'solid-icons/fa'

import Coelho from '../assets/coelho_transparent.png'

export default function Home() {

  return (
    <section class='bg-neutral-900 flex flex-col'>

      <Header />
      <CarouselTools />

      <section class='bg-white sm:py-24'>

        <div class='relative h-[520px] overflow-hidden flex items-center'>

          <section class='flex flex-col w-full gap-2 p-4 items-center pt-16 sm:p-8 sm:w-auto sm:items-start sm:gap-4'>
            <h1 class='text-4xl font-semibold text-red-400 sm:text-6xl'>Guilherme Coelho</h1>

            <article class='flex gap-2 items-center text-blue-500'>
              <h3 class='text-2xl sm:text-3xl '>I'm front end developer</h3>
              <SiGamedeveloper size={32}/>
            </article>

            <article class='pt-8 flex items-center gap-4 text-neutral-500'>
              <p class='text-lg'>Scroll down to see my best projects</p>
              <FaSolidChevronDown size={24} class='animate-bounce'/>
            </article>
          </section>
          <img src={Coelho} class='absolute h-[110%] right-0 object-contain'/>
        </div >
      </section>
      <Projects />
      <AboutMe />
    </section>
  );
}
