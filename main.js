// import './src/output.css'
// import { setupCounter } from './counter.js'

// document.getElementById('app').innerHTML = `
//   <div>
//     <h1 class="text-4xl font-bold text-center">Hello Vite!</h1>
//   </div>
// `

// setupCounter(document.getElementById('counter'))

function toggleProfile() {
  const dropdown = document.getElementById('dropdown-profile')
  const isHidden = dropdown.classList.contains('hidden')

  if (isHidden) {
    dropdown.classList.remove('hidden')
  } else {
    dropdown.classList.add('hidden')
  }
}

document.addEventListener('click', (event) => {
  const dropdown = document.getElementById('dropdown-profile')
  const userMenuButton = document.getElementById('user-menu-button')

  if (
    !userMenuButton.contains(event.target) &&
    !dropdown.contains(event.target)
  ) {
    dropdown.classList.add('hidden')
  }
})


function toggleMobileMenu() {
  const dropdown = document.getElementById('mobile-menu')
  const isHidden = dropdown.classList.contains('hidden')

  if (isHidden) {
    dropdown.classList.remove('hidden')
  } else {
    dropdown.classList.add('hidden')
  }
}

document.getElementById('mobile-menu-button').addEventListener('click', (event) => {
  event.stopPropagation();
  toggleMobileMenu();
});

document.addEventListener('click', (event) => {
  const dropdown = document.getElementById('mobile-menu');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});




const carousel = document.getElementById('carousel')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

let currentPosition = 0
const cardWidth = 400 + 8 

prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth
    carousel.style.transform = `translateX(${currentPosition}px)`
  }
})

nextBtn.addEventListener('click', () => {
  const maxPosition = -(carousel.scrollWidth - carousel.parentElement.offsetWidth)
  if (currentPosition > maxPosition) {
    currentPosition -= cardWidth
    carousel.style.transform = `translateX(${currentPosition}px)`
  }
})

