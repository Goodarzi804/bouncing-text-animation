const T = document.getElementById('T')
let color = ''
let dx = 4
let dy = 4
const chnage = (d) => {
    d == 'x' ? dx = -dx : dy = -dy
    color = randcolor()
    T.style.color = color
    if(isGlow.checked) T.style.textShadow = `${gx}px ${gy}px ${gs}px ${color}`
}
if(!localStorage.getItem('text990')){
    localStorage.setItem('text990',T.textContent)
}else{
    T.textContent = localStorage.getItem('text990')
}
if(!localStorage.getItem('size990')){
    localStorage.setItem('size990',100)
}else{
    textSize.value = localStorage.getItem('size990')
    textSize.nextElementSibling.textContent =`-${textSize.value}-`
    T.style.fontSize = `${textSize.value}px`
}
if(!localStorage.getItem('dx')){
    localStorage.setItem('dx',10)
}else{
    let num = Number(localStorage.getItem('dx'))
    dx = num
    speedX.value = num
    speedX.nextElementSibling.textContent =`-${num}-`
}
if(!localStorage.getItem('dy')){
    localStorage.setItem('dy',10)
}else{
    let num = Number(localStorage.getItem('dy'))
    dy= num
    speedY.value = num
    speedY.nextElementSibling.textContent =`-${num}-`
}
let x = Math.floor(Math.random()*(innerWidth - T.offsetWidth))
let y = Math.floor(Math.random()*(innerHeight - T.offsetHeight))
const anime = ()=>{
    requestAnimationFrame(anime)
    x += dx
    y += dy
    if(x >= innerWidth - T.offsetWidth || x <= 0)chnage('x')
    if(y >= innerHeight - T.offsetHeight || y <= 0)chnage('y')
    if(x > innerWidth - T.offsetWidth ) x = innerWidth -T.offsetWidth
    if(y > innerHeight - T.offsetHeight ) y = innerHeight -T.offsetHeight
    T.style.left = `${x}px`
    T.style.top = `${y}px`
}
anime()
const randnum =()=>Math.floor(Math.random()*256)
const randcolor =()=>`rgb(${randnum()},${randnum()},${randnum()})`


const settingBtn = document.querySelector('.fa-cog')
const settingBtnClose = document.querySelector('.fa-times')
const settingCon = document.querySelector('.setting-con')

const textInput = document.getElementById('textInput')
const isGlow = document.getElementById('isGlow')
const glowX = document.getElementById('glowX')
const glowY = document.getElementById('glowY')
const glowS = document.getElementById('glowS')

settingBtn.addEventListener('click',e=>{
    settingCon.style.display = 'flex'
    settingBtn.style.display = 'none'
    textInput.value = T.textContent
})
settingBtnClose.addEventListener('click',e=>{
    settingCon.style.display = 'none'
    settingBtn.style.display = 'flex'
})

textInput.addEventListener('input',e=>{
    T.textContent = textInput.value
    localStorage.setItem('text990',T.textContent)
})
textSize.addEventListener('input',e=>{
    T.style.fontSize = `${textSize.value}px`
    textSize.nextElementSibling.textContent =`-${textSize.value}-`
    localStorage.setItem('size990',textSize.value)
})
speedX.addEventListener('input',e=>{
    dx = speedX.value
    speedX.nextElementSibling.textContent =`-${speedX.value}-`
    localStorage.setItem('dx',dx)
})
speedY.addEventListener('input',e=>{
    dy = speedY.value
    speedY.nextElementSibling.textContent =`-${speedY.value}-`
    localStorage.setItem('dy',dy)
})
let gx = 0
let gy = 0
let gs = 10
isGlow.addEventListener('input',e=>{
    if(isGlow.checked){
        isGlow.parentElement.nextElementSibling.style.display = 'flex'
        T.style.textShadow = `${gx}px ${gy}px ${gs}px ${color}`
    }else{
        isGlow.parentElement.nextElementSibling.style.display = 'none'
        T.style.textShadow = ''
    }
})
glowX.addEventListener('input',e=>{
    gx = glowX.value
    T.style.textShadow = `${gx}px ${gy}px ${gs}px ${color}`
})
glowY.addEventListener('input',e=>{
    gy = glowY.value
    T.style.textShadow = `${gx}px ${gy}px ${gs}px ${color}`
})
glowS.addEventListener('input',e=>{
    gs = glowS.value
    T.style.textShadow = `${gx}px ${gy}px ${gs}px ${color}`
    glowS.nextElementSibling.textContent =`-${glowS.value}-`
})

