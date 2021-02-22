let viewport = document.querySelector('.slider-viewport').offsetWidth
let slider = document.querySelector('.slider')
let btnNext = document.querySelector('.slider-btn-next')
let btnPrev = document.querySelector('.slider-btn-prev')
let slides = document.querySelectorAll('.slider-slide')
let sliderCurrent = document.querySelector('.slider-current')
let sliderNumber = document.querySelector('.slider-number')
let viewSlide = 0
sliderCurrent.innerHTML = 1
sliderNumber.innerHTML = slides.length
btnNext.addEventListener('click', function () {
  if (viewSlide < slides.length - 1) {
    viewSlide++
    sliderCurrent.innerHTML = viewSlide + 1
    slider.style.transform = `translateX(${-viewSlide * viewport}px)`
    return viewSlide
  } else {
    viewSlide = 0
    sliderCurrent.innerHTML = viewSlide + 1
    slider.style.transform = `translateX(${-viewSlide * viewport}px)`
    return viewSlide
  }
})
btnPrev.addEventListener('click', function () {
  if (viewSlide > 0 || viewSlide == slides.length - 1) {
    viewSlide--
    slider.style.transform = `translateX(${-viewSlide * viewport}px)`
    sliderCurrent.innerHTML = viewSlide + 1
    return viewSlide
  } else {
    viewSlide = 0
    sliderCurrent.innerHTML = viewSlide + 1
    return viewSlide
  }
})
setInterval(() => {
    if (viewSlide < slides.length - 1) {
      viewSlide++
      sliderCurrent.innerHTML = viewSlide + 1
      slider.style.transform = `translateX(${-viewSlide * viewport}px)`
      return viewSlide
    } else {
      viewSlide = 0
      sliderCurrent.innerHTML = viewSlide + 1
      slider.style.transform = `translateX(${-viewSlide * viewport}px)`
      return viewSlide
    }
}, 5000);
