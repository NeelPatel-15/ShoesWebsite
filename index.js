const bootImg = document.querySelector('#main-title img')
const mainTitleContainer = document.querySelector('#main-title')
const header = document.querySelector('header')
const texth1 = document.querySelector('#main-title h1')
const texth3 = document.querySelector('#main-title h3')
const layer = document.querySelector('#layer')
const img = document.querySelector('#main-second img')
const mainSecond = document.querySelector('#main-second')

const oContainer = document.querySelector('.container')

// ######################CARD__IMG-SECTION
const container = document.querySelector('#container__customer-best-choice')
const cardFirst = document.querySelector('.card__first')
const cardFirstSpan = document.querySelector('#card__first-imgback')
const cardFirstImg = document.querySelector('#card__first-img')
const cardFirstTitle = document.querySelector('#card__first-title')
const cardFirstDescription = document.querySelector('#img-first-description')

const cardSecond = document.querySelector('.card__second')
const cardSecondSpan = document.querySelector('#card__second-imgback')
const cardSecondImg = document.querySelector('#card__second-img')
const cardSecondTitle = document.querySelector('#card__second-title')
const cardSecondDescription = document.querySelector('#img-second-description')

const cardThird = document.querySelector('.card__third')
const cardThirdSpan = document.querySelector('#card__third-imgback')
const cardThirdImg = document.querySelector('#card__third-img')
const cardThirdTitle = document.querySelector('#card__third-title')
const cardThirdDescription = document.querySelector('#img-third-description')


// ######################CARD__IMG-SECTION


header.addEventListener('mouseenter', () => {
    // bootImg.style.transform = 'perspective(500px)'
    // bootImg.style.transform = 'translateZ(500deg)'
    bootImg.style.transform = 'rotateZ(45deg)'
})


header.addEventListener('mouseleave', () => {
    bootImg.style.transform = 'rotateZ(0)'
})

header.addEventListener('mouseenter', () => {
    texth1.style.transform = 'rotateX(0deg)'
})

header.addEventListener('mouseleave', () => {
    texth1.style.transform = 'rotateX(90deg)'
})

header.addEventListener('mouseenter', () => {
    texth3.style.transform = 'translateX(300px)'
    texth3.style.color = 'gray'
    texth3.style.opacity = '1'

})

header.addEventListener('mouseleave', () => {
    texth3.style.transform = 'translateX(0px)'
    texth3.style.color = 'white'
    texth3.style.opacity = '0'
})


header.addEventListener('mouseenter', () => {
    bootImg.style.opacity = '.5'
})

header.addEventListener('mouseleave', () => {
    bootImg.style.opacity = '1'
})

header.addEventListener('mouseenter', () => {
    layer.style.opacity = '.5'
    layer.style.transform = 'translateX(97%)'

})

header.addEventListener('mouseleave', () => {
    layer.style.transform = 'translateX(-70%)'
})

// #############CARD IMG TRANSFORMATION
cardFirst.addEventListener('mouseenter', ()=> {
    cardFirstImg.style.transform = 'rotateZ(-45deg)'
    cardFirst.style['box-shadow'] = '0px 0px 10px 5px white'
    cardFirstTitle.style.transform = 'translateX(115px) rotateX(0)' 
    cardFirstDescription.style.transform = 'translateX(160px)'
    // cardFirstTitle.style['transform'] = '' 
    
    // cardFirstDescription = 


})
cardFirst.addEventListener('mouseleave', ()=> {
    cardFirstImg.style.transform = 'rotateZ(0deg)'
    cardFirst.style['box-shadow'] = 'none'
    cardFirstTitle.style.transform = 'translateX(-50px) rotateX(90deg)' 
    cardFirstDescription.style.transform = 'translateX(500px)'

    // cardFirstTitle.style.transform = 'rotateX(90deg)' 

})


// ###################################SECOND CARD(MIDDLE ONE)

cardSecond.addEventListener('mouseenter', ()=> {
    cardSecondImg.style.transform = 'rotateZ(-45deg)'
    cardSecond.style['box-shadow'] = '0px 0px 10px 5px white'
    cardSecondTitle.style.transform = 'translateX(115px) rotateX(0)' 
    cardSecondTitle.style.transform = 'translateX(115px) rotateX(0)' 
    cardSecondDescription.style.transform = 'translateX(160px)'



})
cardSecond.addEventListener('mouseleave', ()=> {
    cardSecondImg.style.transform = 'rotateZ(0deg)'
    cardSecond.style['box-shadow'] = 'none'
    cardSecondTitle.style.transform = 'translateX(-50px) rotateX(90deg)' 
    cardSecondDescription.style.transform = 'translateX(500px)'




})

// ###################################THIRD CARD(LAST ONE)

cardThird.addEventListener('mouseenter', ()=> {
    cardThirdImg.style.transform = 'rotateZ(-45deg)'
    cardThird.style['box-shadow'] = '0px 0px 10px 5px white'
    cardThirdTitle.style.transform = 'translateX(115px) rotateX(0)' 
    cardThirdTitle.style.transform = 'translateX(115px) rotateX(0)' 
    cardThirdDescription.style.transform = 'translateX(160px)'



})
cardThird.addEventListener('mouseleave', ()=> {
    cardThirdImg.style.transform = 'rotateZ(0deg)'
    cardThird.style['box-shadow'] = 'none'
    cardThirdTitle.style.transform = 'translateX(-50px) rotateX(90deg)' 
    cardThirdDescription.style.transform = 'translateX(500px)'



})