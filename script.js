const imgs = [...document.querySelectorAll('img')];
console.log("Test:")
imgs.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('unactive');
  })
})


