import { For } from "solid-js";
import { Card } from "./Card";
import { projects } from "../../../data/projects";

export const Projects = () => {
  return (
    <section class='p-4 py-8 bg-white flex flex-col items-center gap-16'>
      <article>
        <h2 class='font-extrabold text-5xl text-blue-800'>Projects</h2>
      </article>

      <ul class='w-full max-w-screen-lg p-4 grid lg:grid-cols-2 sm:gap-2 '>
        <For each={projects}>
          {(project) => <Card {...project} />}
        </For>
      </ul>
    </section>
  )
}
