
import { HeaderModel } from './HeaderModel';
export const Header = () => {

  return (
    <section class='h-[70vh] w-full p-4 text-white flex items-center flex-wrap justify-evenly'>
      <article class='px-8 flex flex-col gap-4 items-center text-center pb-8 sm:items-start sm:pb-0'>
        <h1 class="bg-gradient-1 text-3xl sm:text-5xl">I love to code new things</h1>
        <h2 class='bg-gradient-2 font-black text-2xl sm:text-3xl'>outside the box [ ]</h2>
          <h2 class='bg-gradient-3 font-black text-4xl'>Thats what I do</h2>
        </article>
      <HeaderModel />
    </section>
  )
}
