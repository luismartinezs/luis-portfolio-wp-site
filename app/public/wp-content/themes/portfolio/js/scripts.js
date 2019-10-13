import { throttle } from './util'

const checkBox = document.querySelector('#menuCheckbox')
const mobileMenuLinks = Array.from(
  document.querySelectorAll('.mobile-menu__link')
)

window.onload = () => {
  shrinkHeaderHeight()
  document.addEventListener('scroll', throttledShrinkHeaderHeight)
  mobileMenuLinks.forEach(link =>
    link.addEventListener('click', toggleMobileMenu)
  )
}

window.onunload = () => {
  document.removeEventListener('scroll', throttledShrinkHeaderHeight)
  mobileMenuLinks.forEach(link =>
    link.removeEventListener('click', toggleMobileMenu)
  )
}

const throttledShrinkHeaderHeight = () => {
  return throttle(shrinkHeaderHeight, 250)()
}

const shrinkHeaderHeight = () => {
  const isPolicyPage = window.location.href.match(/policies/gi)
  if (document.documentElement.scrollTop > 120 || isPolicyPage) {
    document.querySelector('header').classList.add('header--scrolled-down')
    document.querySelector('main').classList.add('main--scrolled-down')
  }
  if (document.documentElement.scrollTop <= 120 && !isPolicyPage) {
    document.querySelector('header').classList.remove('header--scrolled-down')
    document.querySelector('main').classList.remove('main--scrolled-down')
  }
}

const toggleMobileMenu = () => {
  checkBox.checked = !checkBox.checked
}
