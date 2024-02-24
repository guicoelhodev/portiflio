import { For } from "solid-js";
import { Card } from "./Card";

export const Projects = () => {
  
  const projectList = Array.from({ length: 6 });
  return (
    <section class='p-4 py-16 bg-white flex flex-col items-center gap-16'>
      <header>
        <h2 class='font-extrabold text-5xl text-blue-800'>Projects</h2>
      </header>

      <ul class='w-full max-w-screen-lg border border-red-600 p-4 grid grid-cols-2 gap-8 '>
        <For each={projectList}>
          {(projects) => <Card />}
        </For>
      </ul>
    </section>
  )
}
