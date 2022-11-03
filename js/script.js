const img1 = document.querySelector('.bi-Vk')
if (img1) {
  img1.addEventListener('mouseover', () => {
    document.querySelector('.imgText').innerHTML = 'Vk'
    addEventListener('mouseout', () =>{
        document.querySelector('.imgText').innerHTML = ''
    }
    )
   
  });
}
const img2 = document.querySelector('.bi-telegram')
if (img2) {
  img2.addEventListener('mouseover', () => {
    document.querySelector('.imgText').innerHTML = 'Telegram'
    addEventListener('mouseout', () =>{
        document.querySelector('.imgText').innerHTML = ''
    }
    )
  });
}

const img3 = document.querySelector('.bi-github')
if (img3) {
  img3.addEventListener('mouseover', () => {
    document.querySelector('.imgText').innerHTML = 'GitHub'
    addEventListener('mouseout', () =>{
        document.querySelector('.imgText').innerHTML = ''
    }
    )
  });
}