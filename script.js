// 테마 토글
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 에이전트 루프 단계 클릭 시 설명 아코디언
const loopSteps = document.querySelectorAll(".loop-step");
const loopDetail = document.getElementById("loop-detail");

loopSteps.forEach((step) => {
  step.addEventListener("click", () => {
    const isActive = step.classList.contains("active");

    loopSteps.forEach((s) => s.classList.remove("active"));

    if (isActive) {
      loopDetail.hidden = true;
      loopDetail.textContent = "";
    } else {
      step.classList.add("active");
      loopDetail.textContent = step.dataset.detail;
      loopDetail.hidden = false;
    }
  });
});

// 스크롤 위치에 따라 현재 섹션의 네비게이션 링크 강조
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
