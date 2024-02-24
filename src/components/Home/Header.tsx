import Cacnea from '../../assets/cacnea.gif';
export const Header = () => {

  return (
    <section class='h-[70vh] w-full p-4 text-white flex items-center flex-wrap justify-evenly'>
        <article class='px-8 flex flex-col gap-4'>
          <h1 class="bg-gradient-1 text-5xl">I love to code new things</h1>
          <h2 class='bg-gradient-2 font-black text-3xl text-right'>outside the box [ ]</h2>
          <h2 class='bg-gradient-3 font-black text-4xl'>Thats what I do</h2>
        </article>
      <article class='h-[420px] bg-neutral-800 rounded-lg aspect-square flex items-center justify-center'>
        <img src={Cacnea} />
      </article>
    </section>
  )
}
