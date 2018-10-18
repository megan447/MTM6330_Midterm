/**
 * add event listener to each portfolio button
 * write each function of popup windows
 * append the contents in popup windows
 */
document.getElementById('one').addEventListener('click', popOne)
document.getElementById('two').addEventListener('click', popTwo)
document.getElementById('three').addEventListener('click', popThree)
document.getElementById('four').addEventListener('click', popFour)
document.getElementById('five').addEventListener('click', popFive)
const popUp = document.getElementById('popup')
const container = document.getElementById('container')
function popOne () {
  const close = document.createElement('button')
  close.id = 'close'
  close.textContent = 'X'
  const div = document.createElement('div')
  div.id = 'around'
  const img = document.createElement('img')
  img.src = './imgs/portfolios/ATBI_discover.png'
  const p = document.createElement('p')
  p.textContent = 'This is my first program wrote by AngularJS, by 2018 Summer.The detail is in my Github.'
  popUp.appendChild(close)
  popUp.appendChild(div)
  div.appendChild(img)
  div.appendChild(p)
  popUp.classList.remove('hidden')
  container.style.opacity = 0.5

  close.addEventListener('click', function () {
    popUp.classList.add('hidden')
    container.style.opacity = 1
    popUp.textContent = ' '
  })
}
function popTwo () {
  const close = document.createElement('button')
  close.id = 'close'
  close.textContent = 'X'
  const div = document.createElement('div')
  div.id = 'around'
  const img = document.createElement('img')
  img.src = './imgs/portfolios/shopify-challenge.png'
  const p = document.createElement('p')
  p.textContent = 'This project is I wrote by HTML, CSS and JS as a challenge test. The detail is in my Github.'
  popUp.appendChild(close)
  popUp.appendChild(div)
  div.appendChild(img)
  div.appendChild(p)
  popUp.classList.remove('hidden')
  container.style.opacity = 0.5
  close.addEventListener('click', function () {
    popUp.classList.add('hidden')
    container.style.opacity = 1
    popUp.textContent = ' '
  })
}
function popThree () {
  const close = document.createElement('button')
  close.id = 'close'
  close.textContent = 'X'
  const div = document.createElement('div')
  div.id = 'around'
  const img = document.createElement('img')
  img.src = './imgs/portfolios/color-game.png'
  const p = document.createElement('p')
  p.textContent = 'This project was my level 2 UX design work, which uses SVG and JavaScript. The detail is in my Github.'
  popUp.appendChild(close)
  popUp.appendChild(div)
  div.appendChild(img)
  div.appendChild(p)
  popUp.classList.remove('hidden')
  container.style.opacity = 0.5
  close.addEventListener('click', function () {
    popUp.classList.add('hidden')
    container.style.opacity = 1
    popUp.textContent = ' '
  })
}
function popFour () {
  const close = document.createElement('button')
  close.id = 'close'
  close.textContent = 'X'
  const div = document.createElement('div')
  div.id = 'around'
  const img = document.createElement('img')
  img.src = './imgs/portfolios/mydrawing1.png'
  const p = document.createElement('p')
  p.textContent = ''
  popUp.appendChild(close)
  popUp.appendChild(div)
  div.appendChild(img)
  div.appendChild(p)
  popUp.classList.remove('hidden')
  container.style.opacity = 0.5
  close.addEventListener('click', function () {
    popUp.classList.add('hidden')
    container.style.opacity = 1
    popUp.textContent = ' '
  })
}
function popFive () {
  const close = document.createElement('button')
  close.id = 'close'
  close.textContent = 'X'
  const div = document.createElement('div')
  div.id = 'around'
  const img = document.createElement('img')
  img.src = './imgs/portfolios/myposter.png'
  const p = document.createElement('p')
  p.textContent = ' '
  popUp.appendChild(close)
  popUp.appendChild(div)
  div.appendChild(img)
  div.appendChild(p)
  popUp.classList.remove('hidden')
  container.style.opacity = 0.5
  close.addEventListener('click', function () {
    popUp.classList.add('hidden')
    container.style.opacity = 1
    popUp.textContent = ' '
  })
}
