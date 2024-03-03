import { TbBrandSolidjs } from "solid-icons/tb";
import { SiTypescript } from "solid-icons/si";
import { SiReactquery } from "solid-icons/si";
import { BiLogosGraphql } from "solid-icons/bi";
import { FaBrandsVuejs } from "solid-icons/fa";
import { SiTailwindcss } from "solid-icons/si";
import { FaBrandsReact } from "solid-icons/fa";
import { FaBrandsNode } from "solid-icons/fa";
import { TbBrandThreejs } from "solid-icons/tb";
import { SiNeovim } from "solid-icons/si";

import { For } from "solid-js";

type TIcons = { icon: any; name: string }[][];
export const CarouselTools = () => {
  const icons: TIcons = [
    [
      { name: "node js", icon: FaBrandsNode },
      { name: "react query", icon: SiReactquery },
      { name: "graph ql", icon: BiLogosGraphql },
      { name: "tailwind", icon: SiTailwindcss },
      { name: "typescript", icon: SiTypescript },
    ],
    [
      { name: "react js", icon: FaBrandsReact },
      { name: "solid js", icon: TbBrandSolidjs },
      { name: "three js", icon: TbBrandThreejs },
      { name: "neovim", icon: SiNeovim },
      { name: "vue js", icon: FaBrandsVuejs },
    ],
  ];

  return (
    <section class="slide-option">
      <div id="infinite" class="highway-slider h-[20vh]">
        <div class="highway-barrier">
          <ul class="highway-lane bg-neutral-900">
            <For each={icons}>
              {(iconsList) => (
                <li class="highway-car flex justify-around items-center">
                  <For each={iconsList}>
                    {(item) => (
                      <article class="flex flex-col items-center gap-2 text-white">
                        <item.icon size={72} />
                        <p class="text-nowrap">{item.name}</p>
                      </article>
                    )}
                  </For>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </section>
  );
};
