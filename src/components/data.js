const managedTeam = () => {
  const accordion = [
    {
      title: "Remote",
      description: "not ready",
    },
    {
      title: "Englischsprachig",
      description: "not ready",
    },
    {
      title: "Hohe Qualität ",
      description: "not ready",
    },
    {
      title: "100% Verantwortung",
      description: "not ready",
    },
    {
      title: "Riesiger Talentepool ",
      description: "not ready",
    },
    {
      title: "Risikoarm ",
      description: "not ready",
    },
  ];
  const accordionone = [
    {
      title: "Welche Frage steht hier?",
      description: "+",
    },
    {
      title: "Welche Frage steht hier?",
      description: "+",
    },
    {
      title: "Welche Frage steht hier? ",
      description: "+",
    },
    {
      title: "Welche Frage steht hier?",
      description: "+",
    },
    {
      title: "Welche Frage steht hier? ",
      description: "+",
    },
    {
      title: "Welche Frage steht hier? ",
      description: "+",
    },
  ];
  let acc4 = document.getElementById("accordion4");
  acc4.innerHTML = `${accordionone
    .map(
      (data) =>
        ` <div class=" flex justify-between font-bold font-Montserrat px-2 pt-12 items-bottom border-b-2 border-greenn w-full"><h2>${data.title}</h2> <h2>${data.description}</h2></div>`
    )
    .join("")}`;
  let acc1 = document.getElementById("accordion1");
  acc1.innerHTML = `${accordion
    .filter((v, i) => i < 2)
    .map(
      (data) =>
        ` <div class="flex justify-between font-bold font-Montserrat px-2 py-3 border-b-2 border-greenn w-full"><h2>${data.title}</h2> <h2>+</h2></div>`
    )
    .join("")}`;

  let acc2 = document.getElementById("accordion2");
  acc2.innerHTML = `${accordion
    .filter((v, i) => i > 1)
    .map(
      (data) =>
        ` <div class="flex justify-between font-bold font-Montserrat px-2 py-3 border-b-2 border-greenn w-full my-3 "><h2>${data.title}</h2> <h2>+</h2></div>`
    )
    .join("")}`;
};

const skillSet = () => {
  const team = document.getElementById("unsteam");
  let teams = [
    {
      name: "Arnold:",
      description: `“d diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam“`,
    },
    {
      name: "Clever:",
      description: `“d diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam“`,
    },
    {
      name: "Izzedin:",
      description: `“d diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam“`,
    },
  ];
  team.innerHTML = `${teams
    .map(
      (
        elem
      ) => `<div class=" flex text-white md:gap-3 gap-1 font-Montserrat text-sm"> <h2 class="font-bold md:py-2"> ${elem.name}
        <p class="italic font-extralight py-4 text-base">${elem.description}</p>
        </h2>`
    )
    .join("")}`;
  let myDiv = document.getElementById("skills");
  let datas = [
    "Typescript",
    "Javascript",
    "React",
    "Rest APIs",
    "Redux",
    "test driven developement",
    "Data modeling",
  ];
  myDiv.innerHTML = `${datas
    .map(
      (skill) =>
        `<div class="rounded-2xl py-1 px-2 h-fit bg-white whitespace-nowrap text-blue_990 font-semibold font-Raleway text-sm">${skill} </div>`
    )
    .join("")}`;

  let myDiv2 = document.getElementById("skills2");
  let datas2 = [
    "JWT",
    "CSS",
    "frontend architecture",
    "Figma",
    "Nest.JS",
    "ORM",
    "Prisma",
    "GraphQL",
    "CI / CD",
    "Scrum Framework",
  ];
  myDiv2.innerHTML = `${datas2
    .map(
      (skill) =>
        `<div class="rounded-2xl py-1 px-2 h-fit bg-white whitespace-nowrap text-blue_990 font-semibold font-Raleway text-sm">${skill} </div>`
    )
    .join("")}`;
};
