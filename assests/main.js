const counters = document.querySelectorAll(".counter");

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