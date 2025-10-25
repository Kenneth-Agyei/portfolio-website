//header
const  navLinks = document.querySelectorAll(".nav-link");

//home
const img = document.querySelector(".pic");

//skills
const skillDivs = document.querySelectorAll(".skill");
const skillHeadings = document.querySelectorAll(".skill-heading");

//Projects
const projectsGroup = document.querySelector(".projects-group");

// aside
const openSidebarBtn = document.querySelector(".open-sidebar");
const sideBar = document.querySelector("aside");
const closeSidebarBtn = document.querySelector(".close-sidebar");
const svgGroup = document.querySelector(".svg-group");
const fullSidebarBtn = document.querySelector(".full-sidebar");
const halfSidebarBtn = document.querySelector(".half-sidebar");
const navBox = document.querySelector(".nav-box");
const sideNavLinks = document.querySelectorAll(".nav-box ul li a");
const navIcons = document.querySelectorAll(".nav-box ul li a svg");
const navText = document.querySelectorAll(".nav-text");


//haeder
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    navLink.classList.add("active");
  });
});

window.addEventListener("load", () => {
  const hash = window.location.hash;
  navLinks.forEach((navLink) => {
    if (navLink.getAttribute("href") === hash) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLink.classList.add("active");
    }
  });
})

window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  navLinks.forEach((navLink) => {
    if (navLink.getAttribute("href") === hash) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      navLink.classList.add("active");
    }
  });
})


//aside

openSidebarBtn.addEventListener("click", () => {
  sideBar.style.right = "10px";
  openSidebarBtn.style.display = "none";
});

closeSidebarBtn.addEventListener("click", () => {
  sideBar.style.right = "-100%";
  openSidebarBtn.style.display = "block";
  sideBar.style.width = "50px";
  navText.forEach((navT) => {
    navT.style.display = "none";
  });
  fullSidebarBtn.style.display = "block";
  halfSidebarBtn.style.display = "none";
  svgGroup.style.flexDirection = "column";
});

fullSidebarBtn.addEventListener("click", () => {
  sideBar.style.width = "178px";
  navBox.classList.add("full-sidebar-navBox");
  sideNavLinks.forEach(sideNavLink => {
    sideNavLink.classList.add("full-sidebar-navLink");
  });
  navIcons.forEach(navIcon => {
    navIcon.classList.add("full-sidebar-navIcon");
  });
  navText.forEach((navT) => {
    navT.style.display = "block";
    navT.classList.add("full-sidebar-navText");
  });
  navBox.style.top = "10px";
  fullSidebarBtn.style.display = "none";
  halfSidebarBtn.style.display = "block";
  svgGroup.style.flexDirection = "row";
});

halfSidebarBtn.addEventListener("click", () => {
  sideBar.style.width = "50px";
  navBox.style.top ="-20px";
  navBox.classList.remove("full-sidebar-navBox");
  sideNavLinks.forEach(sideNavLink => {
    sideNavLink.classList.remove("full-sidebar-navLink");
  });
  navIcons.forEach(navIcon => {
    navIcon.classList.remove("full-sidebar-navIcon");
  });
  navText.forEach((navT) => {
    navT.style.display = "none";
    navT.classList.remove("full-sidebar-navText");
  });
  fullSidebarBtn.style.display = "block";
  halfSidebarBtn.style.display = "none";
  svgGroup.style.flexDirection = "column";
});

// home
const images = [
  "/Images/ChatGPT Image Jun 14, 2025, 09_01_46 AM.png",
  "/Images/5Z8A8742.JPG",
  "/Images/IMG_20240727_175159.jpg",  
  "/Images/5Z8A8743.JPG",
  "/Images/9d87812c-7269-452d-a58f-6be0abca21ce.png",
  "/Images/5Z8A8744.JPG",
  "/Images/ChatGPT Image Jun 14, 2025, 08_18_18 AM.png",
];

let currentIndex = 0;

nextImg();
function nextImg() {
  img.setAttribute("src", images[currentIndex]);
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(nextImg, 4000);

// skills
const skillsPack = [
  {
    name: "Adobe Photoshop",
    percent: 70,
    category: "Graphic Design",
    image: "/Images/Adobe Photoshop.svg.png",
  },
  {
    name: "Adobe Illustrator",
    percent: 20,
    category: "Graphic Design",
    image: "/Images/Adobe Illustrator.svg.png",
  },
  {
    name: "CorelDraw",
    percent: 20,
    category: "Graphic Design",
    image: "/Images/CorelDraw.svg.png",
  },
  {
    name: "Adobe Premiere Pro",
    percent: 20,
    category: "Video Editing and Motion Graphics",
    image: "/Images/Adobe Premiere Pro.svg.png",
  },
  {
    name: "Adobe After Effects",
    percent: 20,
    category: "Video Editing and Motion Graphics",
    image: "/Images/Adobe After Effects.svg.png",
  },
  {
    name: "HTML",
    percent: 100,
    category: "Full Stack Web Development",
    image: "/Images/HTML.svg.png",
  },
  {
    name: "CSS",
    percent: 100,
    category: "Full Stack Web Development",
    image: "/Images/CSS.svg.png",
  },
  {
    name: "JavaScript",
    percent: 50,
    category: "Full Stack Web Development",
    image: "/Images/JavaScript.svg.png",
  },
  {
    name: "React.js",
    percent: 20,
    category: "Full Stack Web Development",
    image: "/Images/React.js.svg.png",
  },
  {
    name: "Tailwind CSS",
    percent: 20,
    category: "Full Stack Web Development",
    image: "/Images/Tailwind CSS.svg.png",
  },
  {
    name: "Node.js",
    percent: 20,
    category: "Full Stack Web Development",
    image: "/Images/Node.js.svg.png",
  },
  {
    name: "Express.js",
    percent: 20,
    category: "Full Stack Web Development",
    image: "/Images/Express.js.svg.png",
  },
  {
    name: "PHP",
    percent: 30,
    category: "Full Stack Web Development",
    image: "/Images/PHP.svg.png",
  },
  {
    name: "RESTful",
    percent: 20,
    category: "Full Stack Web Development",
    image: "/Images/RESTful.svg.png",
  },
  {
    name: "MySQL",
    percent: 20,
    category: "Full Stack Web Development",
    image: "/Images/MySQL.svg.png",
  },
  {
    name: "Git",
    percent: 20,
    category: "Full Stack Web Development",
    image: "/Images/Git.svg.png",
  },
  {
    name: "Photography",
    percent: 70,
    category: "Photography",
    image: "/Images/Photography.svg.png",
  },
  {
    name: "Easy Worship",
    percent: 90,
    category: "Church Media Production",
    image: "/Images/Easy Worship.svg.png",
  },
  {
    name: "OBS studio",
    percent: 60,
    category: "Church Media Production",
    image: "/Images/OBS studio.svg.png",
  },
  {
    name: "Adobe Audition",
    percent: 20,
    category: "Church Media Production",
    image: "/Images/Adobe Audition.svg.png",
  },
];



skillsPack.forEach((skillPack) => {
  skillHeadings.forEach((skillHeading, i) => {
    if (skillPack.category === skillHeading.textContent.trim()) {
      const skillHTML = `
        <div class="skill-detail">
          <p class="skill-name">
            ${skillPack.name}
          </p>
          <img src="${skillPack.image}" 
            alt="${skillPack.name}"
            class="skill-image"
            loading="lazy">
          <div class="skill-percent-bar">
            <span style="width:${skillPack.percent}%;">
              ${skillPack.percent}%
            </span>
          </div>
        </div>
      `;
      skillDivs[i].insertAdjacentHTML("beforeend", skillHTML);
    }
  });
});

// Projects
const projectsPack = [
  {
    name: "Simple Calculator",
    "date created": "28th June, 2025",
    src: "/Projects/Simple Calculator/index.html",
    description: ["A calculator that just performs the basic or arithmetic operations.", 
      "The arithmetic operatiojns are addition, subtraction, multiplication and division.",
      "It has a user friendly interface."
    ]
  },
  {
    name: "Digital Clock",
    "date created": "25th June, 2025",
    src: "/Projects/Digital_Clock/index.html",
    description: ["This is a digital clock that shows the current time in hours, minutes and seconds.",
      "It also shows whether it is AM or PM.",
      "It has a user-friendly interface."
    ] 
  },
  {
    name: "Speech To Text",
    "date created": "1st February, 2025",
    src: "/Projects/Speech_To_Text/index.html",
    description: ["This convertor also converts all speech into text format.",
      "For example, suppose you have a speech to make but not having enough time to type it, just read the speech to it and it will type all for you."
    ]
  },
  {
    name: "Text To Speech",
    "date created": "24th February, 2025",
    src: "/Projects/Text_To_Speech/index.html",
    description: ["This is a text to speech convertor.",
      "It converts whatever text you give it into speech.",
      "For example, if you have large texts and finding it difficult to read, just copy the text to it and it will read all to your hearing."
    ]
  },
  {
    name: "Piano",
    "date created": "23rd February, 2025",
    src: "/Projects/Piano/index.html",
    description: ["This is a sample of piano.",
      "It gives you the sound a piano will give you when a key is pressed.",
      "It has a user-friendly interface."
    ]
  },
  {
    name: "Robot Joke Generator",
    "date created": "6th January, 2025",
    src: "/Projects/Robot_Joke_Generator/index.html",
    description: ["Whenever you are bored you can use this user-friendly robot joke generator to generate jokes for you.",
      "This project is still under development."
    ]
  },
  {
    name: "HSL Color Generator",
    "date created": "26th December, 2024",
    src: "/Projects/HSL_Color_Generator/index.html",
    description: ["This color generator uses the hue, saturation and lightness format.",
      "Depending on the value you put the slider, gives you the colour."
    ]
  },
];

let projectsHTML = "";
projectsPack.forEach((projectPack) => {
  const projectHTML = `
    <div class="project">
      <p class="project-name">
        <a href="${projectPack.src}">
          ${projectPack.name}
        </a>
      </p>
      <iframe name="targetWindow" src="${projectPack.src}" scrolling="no" loading="lazy"></iframe>
      <p class="project-date">
        ${projectPack["date created"]}
      </p>
      <div class="project-description">
        <ul>
          ${projectPack.description.map(descript => `
            <li>${descript}</li>
          `).join('')
        }
        </ul>
      </div>
      <a href="${projectPack.src}" class="open-project">Open Project</a>
    </div>
  `;
  projectsHTML += projectHTML;
});
projectsGroup.innerHTML = projectsHTML

// contact
document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Clear previous messages
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = "";
    formMessage.className = "message";

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      // Get form data
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Validate required fields
      if (!data.name || !data.email) {
        throw new Error("Please fill all required fields");
      }

      // Get client IP (optional)
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        data.ipAddress = (await ipResponse.json()).ip;
      } catch (ipError) {
        console.warn("Couldn't get IP:", ipError);
        data.ipAddress = "unknown";
      }

      // Submit to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby4ANJmI5MqODlTwZmmJaCV_RQi3H38FijdWhPDoFlcaTJoenPvYP37ro2s1t5b9Yl-/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === "success") {
        formMessage.textContent =
          "Thank you! Your submission has been received.";
        formMessage.className = "message success";
        e.target.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      formMessage.textContent = error.message;
      formMessage.className = "message error";
      console.error("Error:", error);
    } finally {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });

 //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 