import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandVercel,
  IconBrandGit,
  IconBrandFramerMotion,
} from "@tabler/icons-react";

export default function Details() {
 
  function handleClick(link: string) {
    return (
    window.open(link)
    )
  }

  const techlist = [
    {
      name: "Reactjs",
      icon: <IconBrandReact />
    },
    {
      name: "Nextjs",
      icon: <IconBrandNextjs />
    },
    {
      name: "Tailwind",
      icon: <IconBrandTailwind />
    },
    {
      name: "Typescript",
      icon: <IconBrandTypescript />
    },
    {
      name: "Javascript",
      icon: <IconBrandJavascript />
    },
    {
      name: "Vercel",
      icon: <IconBrandVercel />
    },
    {
      name: "Framer Motion",
      icon: <IconBrandFramerMotion />
    },
    {
      name: "Git",
      icon: <IconBrandGit />
    },
  ];

  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Annieeeee11",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/_lazy_annie_",
    },
  ];
  
    const name = "Vaanya Goel";

    const display = "I copy websites from figma";

    const timeline = [

        {
          year: "2025",
          role: "Frontend Developer Intern",
          company: "Amazure",
          description: "Working with Reactjs to enhance the web application"
        }
      ]

    const projects = [
        {
          name: "Project",
          description: "Coming Soon..",
          tech: "Nextjs, Tailwindcss, Typescript, Shadcn",
          year: "2025",
          link: "https://github.com/Annieeeee11",
          git: "https://github.com/Annieeeee11"
        },
        {
            name: "Project",
            description: "Coming Soon..",
            tech: "Reactjs, tailwindcss, typescript",
            year: "2024",
            link: "https://github.com/Annieeeee11",
            git: "https://github.com/Annieeeee11"
          },
          {
            name: "Project",
            description: "Coming Soon..",
            tech: "Rectjs, tailwindcss, typescript",
            year: "2024",
            link: "https://github.com/Annieeeee11",
            git: "https://github.com/Annieeeee11"
          },
          {
            name: "Project",
            description: "Coming Soon..",
            tech: "Nextjs, tailwindcss, typescript",
            year: "2024",
            link: "https://github.com/Annieeeee11",
            git: "https://github.com/Annieeeee11/yo_u"
          },
      ]

      return {
        handleClick,
        links,
        name,
        display,
        timeline,
        projects,
        techlist
      }
}
