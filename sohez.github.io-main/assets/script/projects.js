const ProjectsData = [
  {
    name: "Uzum market",
    logo: "https://orginfouz.s3.amazonaws.com/media/organization_photo/uzum.png",
    description:
      "The Uzum Market online store is the fastest growing marketplace for purchases in Uzbekistan.",
    link: "https://uzum.uz/ru?utm_source=google&utm_medium=cpc&utm_campaign=MARKET_ALWN_B2C_UZB_WEB_DM_GOOGLE_PERFOMAX_FID_AUD_INTERESTSANDAUDIENCE_ALLITEMS_PURCHASE_GA&utm_content=&utm_term=&gad_source=1&gclid=Cj0KCQiAu8W6BhC-ARIsACEQoDBuTK5NIWFrjxWwchm6XQpffDNrcreTqFDhf8vJyACCAMlQNqmn48UaAi0SEALw_wcB",
  },
  {
    name: "Portfolio",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfoVvZyHJHVajXzjsBsrMXft57fKpaV9arQ&s",
    description:
      "A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences.",
    link: "https://pf.bimm.uz/",
  },
  {
    name: "M.P.C",
    logo: "https://cdn-icons-png.flaticon.com/128/1011/1011812.png",
    description:
      "powerful and easy-to-use solution for calculating academic performance. Built with HTML, CSS, JavaScript, html2canvas, and jsPDF.",
    link: "https://sohez.github.io/Marks-Percentage-Calculator/",
  },
  {
    name: "Belissimo",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIQxh9t8QLdVo1AWg7PwHkI9Oj9Fqd5-R8Q&s",
    description:
      " Belissimo Pizzeria chain N1 in Uzbekistan.",
    link: "https://bellissimo.uz/ru?utm_source=FB&utm_medium=search&utm_campaign=bellissimo&gad_source=1&gclid=Cj0KCQiAu8W6BhC-ARIsACEQoDCQUZ8hnyqMCkwyPqiZHuSf1PB7a7OIyLyv2Zj4R5CDJiu7JaUqhOQaAsBlEALw_wcB",
  },
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
            <div>
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
            </div>
            <div>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
            </div>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
