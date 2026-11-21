// Mouse cursor
const mouse = document.querySelector(".cursor");
const btns = document.querySelectorAll("button, a, .hamburger");

document.addEventListener("mousemove", (e) => {
  if (!mouse) return;
  mouse.style.left = e.clientX + "px";
  mouse.style.top = e.clientY + "px";
});

btns.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    mouse?.classList.add("grow");
  });
  btn.addEventListener("mouseleave", () => {
    mouse?.classList.remove("grow");
  });
});

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".bars");
const xmark = document.querySelector(".xmark");

hamburger?.addEventListener("click", () => {
  bars?.classList.toggle("active");
  xmark?.classList.toggle("active");
  navbar?.classList.toggle("active");
});

// Typewriter effect
function typeText(element, speed = 75) {
  return new Promise((resolve) => {
    const text = element.dataset.text || "";
    element.textContent = "";
    element.classList.add("typing");

    let i = 0;
    const interval = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        element.classList.remove("typing");
        resolve();
      }
    }, speed);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const h1 = document.querySelector(".h1");
  const h1Second = document.querySelector(".h1-second");

  if (h1) {
    await typeText(h1, 70);
  }
  if (h1Second) {
    await typeText(h1Second, 70);
  }
});


// Start Years num

const statsRow = document.querySelector(".stats-row");
const statBoxStrong = document.querySelectorAll(".stat-box > strong");

let started = false;

function checkStatsScroll() {
  if (!statsRow || started) return;

  const rect = statsRow.getBoundingClientRect();
  // يبدأ العد عندما يدخل القسم ضمن 80% من ارتفاع الشاشة
  if (rect.top <= window.innerHeight * 0.8) {
    started = true;
    statBoxStrong.forEach((num) => {
      startCount(num);
    });
  }
}

function startCount(el) {
  const goal = Number(el.dataset.num);
  if (!goal || Number.isNaN(goal)) return;

  let current = 0;
  el.textContent = "0";

  const stepTime = 1500 / goal;

  const counter = setInterval(() => {
    current += 1;
    el.textContent = current;

    if (current >= goal) {
      el.textContent = `${goal}+`;
      clearInterval(counter);
    }
  }, stepTime);
}

window.addEventListener("scroll", checkStatsScroll);
window.addEventListener("DOMContentLoaded", checkStatsScroll);

// End years num

// Start Skills bar

const skillsBar = document.querySelectorAll(".skill-bar > span");
const skillsSection = document.querySelector(".skills-section");
window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 100) {
      skillsBar.forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
  }
};

// End Skilss bar


// Filter works in Products section
const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;
    productCards.forEach((card) => {
      const matches = category === "all" || card.dataset.category === category;
      card.classList.toggle("hidden", !matches);
    });
  });
});

// Contact form preview message
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("clientName")?.value.trim();
  const service = document.getElementById("serviceType")?.value;

  if (formStatus) {
    formStatus.textContent = `Thanks ${name || "there"} — your "${service}" brief is ready to send.`;
  }
  contactForm.reset();
});
