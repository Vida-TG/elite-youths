const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

let upButton = document.getElementById("upBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  
  var toggleModeElement = document.getElementById("toggleMode");
  let contents = document.querySelectorAll(".content")
  console.log(contents)
  
  if (element.classList.contains("dark-mode")) {
    toggleModeElement.classList.remove("fa-moon");
    toggleModeElement.classList.add("fa-sun");
    contents.forEach((content) => {
      content.classList.add("dark-mode");
    });
  } else {
    toggleModeElement.classList.remove("fa-sun");
    toggleModeElement.classList.add("fa-moon");
    contents.forEach((content) => {
      content.classList.remove("dark-mode");
    });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const registerBtns = document.querySelectorAll(".registerBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  console.log(registerBtns)
  registerBtns.forEach((registerBtn) => {
    console.log(registerBtn)
    registerBtn.addEventListener("click", () => {
      popup.style.display = "block";
    });
  });

  

  closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });

  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Form submitted!");
  });
});
