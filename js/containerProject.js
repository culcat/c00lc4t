const clock = document.querySelector('.clock')
if (clock) {
  clock.addEventListener('click', () => {
    console.log('work');
    const clockUpd = document.querySelector('.clockContainer')
    clockUpd.style.display = 'block'
    clockUpd.style.width = 'auto'
    clockUpd.style.height = '5em'
    clockUpd.style.borderRadius = '1em'
    clockUpd.style.backgroundColor = '#262626'
    document.querySelector('.projects').style.paddingLeft ='5px'
    document.querySelector('.clockGH').innerHTML = 'GitHub'
    document.querySelector('.clockWeb').innerHTML = 'Сайт'    
  }
)  }

const clockClose = document.querySelector('.clockClose')
if (clockClose) {
    clockClose.addEventListener('click', () => {
      console.log('work');
      document.querySelector('.projects').style.display='block' 
      const clockUpd = document.querySelector('.clockContainer')
      clockUpd.style.width = ''
      clockUpd.style.height = ''
      clockUpd.style.borderRadius = ''
      clockUpd.style.backgroundColor = ''
      document.querySelector('.projects').style.paddingLeft =''
      document.querySelector('.clockGH').innerHTML = ''
      document.querySelector('.clockWeb').innerHTML = '' 
    }
  )  }
  