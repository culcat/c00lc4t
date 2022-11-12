const clock = document.querySelector('.clock')
if (clock) {
  clock.addEventListener('click', () => {
    document.querySelector('.clock').innerHTML = ''
    document.querySelector('.clockClose').innerHTML = 'JavaScript-Clock'
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
      document.querySelector('.clockClose').innerHTML = ''
    document.querySelector('.clock').innerHTML = 'JavaScript-Clock'
      document.querySelector('.projects').style.display='block' 
      const clockUpd = document.querySelector('.clockContainer')
      clockUpd.style.width = ''
      clockUpd.style.height = ''
      clockUpd.style.borderRadius = ''
      clockUpd.style.backgroundColor = ''
      document.querySelector('.clock').style.paddingLeft =''
      document.querySelector('.clockGH').innerHTML = ''
      document.querySelector('.clockWeb').innerHTML = '' 
    }
  )  }
  
  const ghs = document.querySelector('.ghs')
if (ghs) {
  ghs.addEventListener('click', () => {
    document.querySelector('.ghs').innerHTML = ''
    document.querySelector('.ghsClose').innerHTML = 'GitHub-Searcher'
    const ghsUpd = document.querySelector('.ghsContainer')
    ghsUpd.style.display = 'block'
    ghsUpd.style.width = 'auto'
    ghsUpd.style.height = '5em'
    ghsUpd.style.borderRadius = '1em'
    ghsUpd.style.backgroundColor = '#262626'
    document.querySelector('.ghs').style.paddingLeft ='5px'
    document.querySelector('.ghsGH').innerHTML = 'GitHub'
    document.querySelector('.ghsWeb').innerHTML = 'Сайт'    
  }
)  }

const ghsClose = document.querySelector('.ghsClose')
if (ghsClose) {
    ghsClose.addEventListener('click', () => {
      document.querySelector('.ghsClose').innerHTML = ''
      document.querySelector('.ghs').innerHTML = 'GitHub-Searcher'
      document.querySelector('.projects').style.display='block' 
      const ghsUpd = document.querySelector('.ghsContainer')
      ghsUpd.style.width = ''
      ghsUpd.style.height = ''
      ghsUpd.style.borderRadius = ''
      ghsUpd.style.backgroundColor = ''
      document.querySelector('.ghs').style.paddingLeft =''
      document.querySelector('.ghsGH').innerHTML = ''
      document.querySelector('.ghsWeb').innerHTML = '' 
    }
  )  }