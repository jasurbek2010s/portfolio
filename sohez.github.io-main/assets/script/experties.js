const ExpertiseData = [
  {
    name: "Node Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Javascript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name :"Netlify",
    logo :"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
  },
  {
    name: "Sass",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },
  {
    name :"JSON",
    logo :"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg"
  },
  {
    name: "Canva",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

const ExpertiseDataHTML = ExpertiseData.map(
  (item) => `
        <div class="expertise-card">
            <img loading="lazy" src="${item.logo}" alt="${item.name}">
            <span>${item.name}</span>
        </div>
    `
).join("");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('expertise-card-container').innerHTML = ExpertiseDataHTML;
});
