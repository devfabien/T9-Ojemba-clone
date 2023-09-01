//Fetching data from json file

const data = new Promise((resolve, reject) => {
  fetch("./src/components/managedData.json")
    .then((respond) => {
      resolve(respond.json());
    })
    .catch((err) => {
      reject(err);
    });
});

//Managed Team

const managedTeam = async () => {
  const fetchedData = await data;
  let managedTeamAccordion = document.getElementById("accordion4");
  managedTeamAccordion.innerHTML = `${fetchedData.data
    .filter((el) => el.description == "+")
    .map(
      (data) =>
        ` <div class=" flex justify-between font-bold font-para px-2 pt-12 items-bottom border-b-2 border-primary w-full"><h2>${data.title}</h2> <h2>${data.description}</h2></div>`
    )
    .join("")}`;
  let secondMmanagedTeamAccordion = document.getElementById("accordion1");

  secondMmanagedTeamAccordion.innerHTML = `${fetchedData.data
    .filter((v, i) => i < 2)
    .map(
      (data) =>
        ` <div class="flex justify-between font-bold font-para px-2 py-3 border-b-2 border-primary w-full"><h2>${data.title}</h2> <h2>+</h2></div>`
    )
    .join("")}`;

  let teamAccordion = document.getElementById("accordion2");

  teamAccordion.innerHTML = `${fetchedData.data

    .filter((v, i) => i > 1 && v.description == "not ready")
    .map(
      (data) =>
        ` <div class="flex justify-between font-bold font-para px-2 py-3 border-b-2 border-primary w-full my-3 "><h2>${data.title}</h2> <h2>+</h2></div>`
    )
    .join("")}`;
};

// skill set page

const skillSet = async () => {
  const fetchedData = await data;
  const skillsTeam = document.getElementById("unsteam");
  skillsTeam.innerHTML = `${fetchedData.data
    .filter(
      (el) =>
        el.description ==
        "d diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam"
    )
    .map(
      (
        elem
      ) => `<div class=" flex text-textColorwhite md:gap-3 gap-1 font-para text-sm"> <h2 class="font-bold md:py-2"> ${elem.name}
        <p class="italic font-extralight py-4 text-base">${elem.description}</p>
        </h2>`
    )
    .join("")}`;
  let skillContainer = document.getElementById("skills");

  skillContainer.innerHTML = `${fetchedData.data
    .filter((el) => el.skillsetone)[0]
    .skillsetone.map((skill, i) =>
      i < 7
        ? `<div class="rounded-2xl py-1 px-2 h-fit bg-white whitespace-nowrap text-backgroundColor font-semibold font-title text-sm">${skill} </div>`
        : []
    )
    .join("")}`;

  let secondSkillContainer = document.getElementById("skills2");

  secondSkillContainer.innerHTML = `${fetchedData.data
    .filter((el) => el.skillsetone)[0]
    .skillsetone.map((skill, i) =>
      i > 6
        ? `<div class="rounded-2xl py-1 px-2 h-fit bg-white whitespace-nowrap text-backgroundColor font-semibold font-title text-sm">${skill} </div>`
        : []
    )
    .join("")}`;
};
