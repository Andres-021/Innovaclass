const btnAbout = document.getElementById('btn-about')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      // if(entry.intersectionRatio <= .55){
        entry.target.classList.add('show')
      // }
    }else{
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

function scrollByPixels(scrollAmount) {
  window.scrollBy({
    top: scrollAmount,
    left: 0,
    behavior: 'auto'
  });
}


btnAbout.addEventListener('click',() => {
  transitionScroll('mision-vision')
})


const transitionScroll = (sectionId) => {
  const section = document.getElementById(sectionId)
  var scrollY = window.scrollY;
  var destinationOffset = section.offsetTop;
  var duration = 500; // duración en milisegundos
  var startingTime = performance.now();

  function scrollStep(timestamp) {
    var progress = timestamp - startingTime;
    var percentage = Math.min(progress / duration, 1);
    var currentOffset = scrollY + (destinationOffset - scrollY) * percentage;
    window.scrollTo(0, currentOffset);
    if (percentage < 1) {
      window.requestAnimationFrame(scrollStep);
    }
  }

  window.requestAnimationFrame(scrollStep);
}