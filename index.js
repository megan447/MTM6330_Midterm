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
  const img = document.createElement('img')
  img.src = './imgs/portfolios/ATBI_discover.png'
  const p = document.createElement('p')
  p.textContent = 'This is my test'
  popUp.appendChild(close)
  popUp.appendChild(img)
  popUp.appendChild(p)
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
  const img = document.createElement('img')
  img.src = './imgs/GitHub.jpg'
  const p = document.createElement('p')
  p.textContent = 'This is my test'
  popUp.appendChild(close)
  popUp.appendChild(img)
  popUp.appendChild(p)
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
  const img = document.createElement('img')
  img.src = './imgs/GitHub.jpg'
  const p = document.createElement('p')
  p.textContent = 'This is my test'
  popUp.appendChild(close)
  popUp.appendChild(img)
  popUp.appendChild(p)
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
  const img = document.createElement('img')
  img.src = './imgs/GitHub.jpg'
  const p = document.createElement('p')
  p.textContent = 'This is my test'
  popUp.appendChild(close)
  popUp.appendChild(img)
  popUp.appendChild(p)
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
  const img = document.createElement('img')
  img.src = './imgs/GitHub.jpg'
  const p = document.createElement('p')
  p.textContent = 'This is my test'
  popUp.appendChild(close)
  popUp.appendChild(img)
  popUp.appendChild(p)
  popUp.classList.remove('hidden')
  container.style.opacity = 0.5
  close.addEventListener('click', function () {
    popUp.classList.add('hidden')
    container.style.opacity = 1
    popUp.textContent = ' '
  })
}
