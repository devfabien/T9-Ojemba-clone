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
  let acc1 = document.getElementById("accordion1");
  console.log("jdfdhjf", accordion);
  acc1.innerHTML = `${accordion
    .filter((v, i) => i < 2)
    .map(
      (data) =>
        ` <div class="flex justify-between font-bold font-para px-2 py-3 border-b-2 border-primary w-full"><h2>${data.title}</h2> <h2>+</h2></div>`
    )
    .join("")}`;

  let acc2 = document.getElementById("accordion2");
  console.log("jdfdhjf", accordion);
  acc2.innerHTML = `${accordion
    .filter((v, i) => i > 1)
    .map(
      (data) =>
        ` <div class="flex justify-between font-bold font-para px-2 py-3 border-b-2 border-primary w-full my-3 "><h2>${data.title}</h2> <h2>+</h2></div>`
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
      ) => `<div class="py-1 flex text-textColorwhite gap-3 font-para text-sm"> <h2 class="font-semibold py-2"> ${elem.name}
        <p class="italic font-extralight py-2 text-xs">${elem.description}</p>
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
        `<div class="rounded-2xl py-1 px-2 bg-white whitespace-nowrap">${skill} </div>`
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
        `<div class="rounded-2xl py-1 px-2 bg-white whitespace-nowrap">${skill} </div>`
    )
    .join("")}`;
};
