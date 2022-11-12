// const header = document.querySelector('.header')
// header.style.width = ''
// header.style.height = ''
// header.style.borderRadius = ''
// header.style.background = ''

const headerAllPage = document.querySelector('button')
if (headerAllPage) {
  headerAllPage.addEventListener('click', () => {
    const header = document.querySelector('.header')

    header.style.width = 'auto'
header.style.height = '5em'
header.style.borderRadius = '15px'
header.style.background = 'grey'
  
})}