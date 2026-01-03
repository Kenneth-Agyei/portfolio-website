//header
const navLinks = document.querySelectorAll(".nav-link");

// aside
const openSidebarBtn = document.querySelector(".open-sidebar");
const sideBar = document.querySelector("aside");
const closeSidebarBtn = document.querySelector(".close-sidebar");
const svgGroup = document.querySelector(".svg-group");
const fullSidebarBtn = document.querySelector(".full-sidebar");
const halfSidebarBtn = document.querySelector(".half-sidebar");
const asideHr = document.querySelector("aside hr");
const navBox = document.querySelector(".nav-box");
const navBoxUl = document.querySelector(".nav-box ul");
const sideNavLinks = document.querySelectorAll(".nav-box ul li a");
const navIcons = document.querySelectorAll(".nav-box ul li a svg");
const navText = document.querySelectorAll(".nav-text");

//home
const img = document.querySelector(".pic");

//Projects
const projectsContainer = document.querySelector(".projects-container");

//header
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
});

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
});

//aside

openSidebarBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
  openSidebarBtn.style.display = "none";
  sideBar.style.width = "50px";
  sideBar.style.height = "60vh";
  sideBar.style.left = "90vw";
  navBox.classList.remove("full-sidebar-navBox");
  navBox.classList.add(".nav-box");
  navBoxUl.classList.remove("full-sidebar-navBoxUl");
  navBoxUl.classList.add("ul");
  sideNavLinks.forEach((sideNavLink) => {
    sideNavLink.classList.remove("full-sidebar-navLink");
    sideNavLink.classList.add("a");
  });
  navIcons.forEach((navIcon) => {
    navIcon.classList.remove("full-sidebar-navIcon");
    navIcon.classList.add("svg");
  });
  navText.forEach((navT) => {
    navT.style.display = "none";
    navT.classList.remove("full-sidebar-navText");
  });
  fullSidebarBtn.style.display = "block";
  halfSidebarBtn.style.display = "none";
  svgGroup.classList.remove("full-sidebar-svgGroup");
  svgGroup.classList.add("svg-group");
  asideHr.style.top = "0";
});

closeSidebarBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
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
  sideBar.style.height = "60vh";
  sideBar.style.left = "65vw";
  navBox.classList.remove(".nav-box");
  navBox.classList.add("full-sidebar-navBox");
  navBoxUl.classList.remove("ul");
  navBoxUl.classList.add("full-sidebar-navBoxUl");
  sideNavLinks.forEach((sideNavLink) => {
    sideNavLink.classList.remove("a");
    sideNavLink.classList.add("full-sidebar-navLink");
  });
  navIcons.forEach((navIcon) => {
    navIcon.classList.remove("svg");
    navIcon.classList.add("full-sidebar-navIcon");
  });
  navText.forEach((navT) => {
    navT.style.display = "block";
    navT.classList.add("full-sidebar-navText");
  });
  navBox.style.top = "10px";
  fullSidebarBtn.style.display = "none";
  halfSidebarBtn.style.display = "block";
  svgGroup.classList.remove("svg-group");
  svgGroup.classList.add("full-sidebar-svgGroup");
  asideHr.style.position = "relative";
});

halfSidebarBtn.addEventListener("click", () => {
  sideBar.style.width = "50px";
  sideBar.style.height = "60vh";
  sideBar.style.left = "90vw";
  navBox.classList.remove("full-sidebar-navBox");
  navBox.classList.add(".nav-box");
  navBoxUl.classList.remove("full-sidebar-navBoxUl");
  navBoxUl.classList.add("ul");
  sideNavLinks.forEach((sideNavLink) => {
    sideNavLink.classList.remove("full-sidebar-navLink");
    sideNavLink.classList.add("a");
  });
  navIcons.forEach((navIcon) => {
    navIcon.classList.remove("full-sidebar-navIcon");
    navIcon.classList.add("svg");
  });
  navText.forEach((navT) => {
    navT.style.display = "none";
    navT.classList.remove("full-sidebar-navText");
  });
  fullSidebarBtn.style.display = "block";
  halfSidebarBtn.style.display = "none";
  svgGroup.classList.remove("full-sidebar-svgGroup");
  svgGroup.classList.add("svg-group");
  asideHr.style.top = "0";
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

// Projects
const projectsPack = [
  {
    name: "Simple Calculator",
    "date created": "28th June, 2025",
    src: "/Projects/Simple Calculator/index.html",
    codepen: "",
    description: [
      "A calculator that just performs the basic or arithmetic operations.",
      "The arithmetic operatiojns are addition, subtraction, multiplication and division.",
      "It has a user friendly interface.",
    ],
  },
  {
    name: "Digital Clock",
    "date created": "25th June, 2025",
    src: "/Projects/Digital_Clock/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/emzparP",
    description: [
      "This is a digital clock that shows the current time in hours, minutes and seconds.",
      "It also shows whether it is AM or PM.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Speech To Text",
    "date created": "1st February, 2025",
    src: "/Projects/Speech_To_Text/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/emzpwYo", 
    description: [
      "This convertor also converts all speech into text format.",
      "For example, suppose you have a speech to make but not having enough time to type it, just read the speech to it and it will type all for you.",
    ],
  },
  {
    name: "Text To Speech",
    "date created": "24th February, 2025",
    src: "/Projects/Text_To_Speech/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/vEKNqEg",
    description: [
      "This is a text to speech convertor.",
      "It converts whatever text you give it into speech.",
      "For example, if you have large texts and finding it difficult to read, just copy the text to it and it will read all to your hearing.",
    ],
  },
  {
    name: "Piano",
    "date created": "23rd February, 2025",
    src: "/Projects/Piano/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/xbOwNvx",
    description: [
      "This is a sample of piano.",
      "It gives you the sound a piano will give you when a key is pressed.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Robot Joke Generator",
    "date created": "6th January, 2025",
    src: "/Projects/Robot_Joke_Generator/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/raLOEBb",
    description: [
      "Whenever you are bored you can use this user-friendly robot joke generator to generate jokes for you.",
      "This project is still under development.",
    ],
  },
  {
    name: "HSL Color Generator",
    "date created": "26th December, 2024",
    src: "/Projects/HSL_Color_Generator/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/WbxQBYd",
    description: [
      "This color generator uses the hue, saturation and lightness format.",
      "Depending on the value you put the slider, gives you the colour.",
    ],
  },
  {
    name: "Age Calcualtor",
    "date created": "15th December, 2024",
    src: "/Projects/Age_Calculator/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/emzpaMP",
    description: [
      "This age calculator calculates your age depending on the date of birth you give it.",
      "It gives you your age in years, months and days.",
    ],  
  },
  {
    name: "Hex To Bin Converter",
    "date created": "10th December, 2024",
    src: "/Projects/Hex_To_Bin_Converter/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/QwEjRZQ",
    description: [
      "This converter converts hexadecimal numbers to binary numbers.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Image Carousel",
    "date created": "5th December, 2024",
    src: "/Projects/Image_Carousel/index.html", 
    codepen: "https://codepen.io/Kenneth-Agyei/pen/azZvrQg",
    description: [
      "This image carousel displays images one after the other after a specific time interval.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Image Comparison Slider",
    "date created": "1st December, 2024",
    src: "/Projects/Image_Comparison_Slider/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/GgqpaPr",
    description: [
      "This image comparison slider allows you to compare two images side by side.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Love Calculator",
    "date created": "28th November, 2024",
    src: "/Projects/Love_Calculator/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/XJKmwQQ",
    description: [
      "This love calculator calculates the love percentage between two people based on their names.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Notes Taking App",
    "date created": "20th November, 2024",
    src: "/Projects/Notes_Taking_App/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/OPXyYej",
    description: [
      "This notes taking app allows you to take notes and save them for future reference.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Quick URL",
    "date created": "15th November, 2024",
    src: "/Projects/Quick_URL/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/vEKNqBy",
    description: [
      "This quick URL project allows you to create short URLs for long links.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Vowel Counter",
    "date created": "10th November, 2024",
    src: "/Projects/Vowel_Counter/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/VYjvJLK",
    description: [
      "This vowel counter counts the number of vowels in a given text.",
      "It has a user-friendly interface.",
    ],
  },
  {
    name: "Words Counter",
    "date created": "5th November, 2024",
    src: "/Projects/Word_Counter/index.html",
    codepen: "https://codepen.io/Kenneth-Agyei/pen/emzpwNo",
    description: [
      "This word counter counts the number of words in a given text.",
      "It has a user-friendly interface.",
    ],
  }
];

let projectsHTML = "";
projectsPack.forEach((projectPack) => {
  const projectHTML = `
    <div class="project-card">
      <h2 class="project-title">
        ${projectPack.name}
      </h2>
      <p class="project-description">
        <ul>
          ${projectPack.description
            .map(
              (descript) => `
            <li>${descript}</li>
          `
            )
            .join("")}
        </ul>
      </p>
      <a href="${projectPack.codepen ? projectPack.codepen : '#'}" 
        target="blank"
        class="explore">
        Explore
      </a>
    </div>
  `;
  projectsHTML += projectHTML;
});
projectsContainer.innerHTML = projectsHTML;

// Contact form handler
document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;

    const formMessage = document.getElementById("form-message");

    // Reset messages
    formMessage.textContent = "";
    formMessage.className = "message";

    // Button loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Basic validation
      if (!data.name || !data.email) {
        throw new Error("Please fill in all required fields.");
      }

      // Email format validation (frontend)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Get client IP (optional, best-effort)
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json", {
          cache: "no-store",
        });
        const ipData = await ipRes.json();
        data.ipAddress = ipData.ip || "unknown";
      } catch {
        data.ipAddress = "unknown";
      }

      // Send to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwZKGh-GKY-0FLtbMutChUgtbt7Z5xMY3TcDSwgj4p_TdVvA3hT6YJGYJhA6A06zTt4/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      // Parse JSON safely
      const result = await response.json();

      if (result.status === "success") {
        formMessage.textContent =
          "Thank you! Your message has been sent successfully.";
        formMessage.className = "message success";
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (error) {
      formMessage.textContent =
        error.message || "Something went wrong. Please try again.";
      formMessage.className = "message error";
      console.error("Form submission error:", error);
    } finally {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
