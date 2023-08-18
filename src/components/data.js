function data() {
  let accordion = [
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

  console.log("data", accordion);

  acc1.innerHTML = `${accordion
    .filter((_v, i) => i < 2)
    .map(
      (data) =>
        ` <div class="flex justify-between font-bold font-para px-2 py-3 border-b-2 border-primary w-full"><h2>${data.title}</h2> <h2>+</h2></div>`
    )
    .join("")}`;
}

data();
