const counters = document.querySelectorAll(".counter");

const statsSection = document.querySelector(".stats");

let started = false;

const startCounters = () => {

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    const suffix = counter.dataset.suffix || "";

    let count = 0;

    const updateCounter = () => {

      const increment = target / 100;

      if(count < target){

        count += increment;

        counter.innerText = Math.ceil(count) + suffix;

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target + suffix;
      }
    };

    updateCounter();
  });
};

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting && !started){

      startCounters();

      started = true;
    }
  });

}, {
  threshold: 0.5
});

observer.observe(statsSection);const buttons = document.querySelectorAll(".portfolio-buttons button");

const cards = document.querySelectorAll(".project-card");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.dataset.filter;

    cards.forEach(card => {

      if(filter === "all"){

        card.style.display = "block";

      } else if(card.classList.contains(filter)){

        card.style.display = "block";

      } else {

        card.style.display = "none";
      }
    });
  });
});