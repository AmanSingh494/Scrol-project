// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links')
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})
// ********** fixed navbar ************
const navbar = document.querySelector('#nav')
const topLink = document.querySelector('.top-link')
const home = document.querySelector('#home')
window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollTop
  const navbarHeight = navbar.getBoundingClientRect().height
  const homeHeight = home.getBoundingClientRect().height
  if (scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
  if (scrollHeight > homeHeight) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})
// ********** smooth scroll ************
// select links
const scrollLink = document.querySelectorAll('.scroll-link')
scrollLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log('Button is clicked')
    e.preventDefault()
    // navigating to a specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    // calculating heights
    const navbarHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')

    let scrollY = element.offsetTop - navbarHeight
    if (!fixedNav) {
      console.log('!fixedNav')
      scrollY = scrollY - navbarHeight
    }
    if (navbarHeight > 82) {
      console.log('navbarHeight > 82')
      scrollY = scrollY + containerHeight
    }
    window.scrollTo(0, scrollY)
    linksContainer.style.height = 0
  })
})
