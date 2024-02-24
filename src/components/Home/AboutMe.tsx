import Tools from '../../assets/tools.png';

export const AboutMe = () => {

  return (
    <section class='pt-8 bg-white flex flex-col items-center gap-4'>
      <article>
        <h2 class='font-extrabold text-5xl text-blue-800'>About me</h2>
      </article>

      <ul class='grid grid-cols-2 max-w-screen-lg gap-4 pt-16'>
        <li class='p-4 flex flex-col justify-center items-center'>
          <p class='text-lg text-slate-500'>
            I have been working as a front-end developer since 2021. Currently, I am a mid-level developer specialized in the React and Node ecosystem.
            <br /> <br />

            In my free time, I enjoy using other tools and exploring the vast world of web development, including animations, 3D motions, and other frameworks like Vue.
                        </p>

            <button class='w-full p-4 mt-16 border-2 border-red-600 text-red-600 rounded-md text-lg'>Curriculum Vitae ( PDF )</button>
        </li>

        <li class='flex items-center justify-center p-8'>
            <img src={Tools} />
          </li>

        <li class='col-span-2 py-16 mt-8'>
          <p class='text-center text-lg text-slate-500'>
            I work as a mid-level developer and I'm in the 6th semester of my Computer Science degree. I started programming in high school, using FPGA and C.   I believe that programming is not tied to a specific language or framework, but rather to the mindset of how to create new solutions for everyday problems.
          </p>
        </li>
      </ul>
    </section>
  )
}
