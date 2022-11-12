const header = document.querySelector('.header')
    header.style.width = 'auto'
    header.style.height = '4em'
    header.style.borderRadius = '15px'
    header.style.background = 'grey'



const headerAllPage = document.querySelector('.btn-1')
if (headerAllPage) {
  headerAllPage.addEventListener('click', () => {
    document.querySelector('.titlePages').innerHTML = 'Обо мне'
    document.querySelector('.titlePages').style.paddingTop = '8px'

})}

const headerProjectPage = document.querySelector('.btn-2')
if (headerProjectPage) {
  headerProjectPage.addEventListener('click', () => {
   document.querySelector('.titlePages').innerHTML = 'Мои проекты'
    document.querySelector('.titlePages').style.paddingTop = '8px'
})}
