'use strict'

const tabItem = document.querySelectorAll('.features__tab-item')
const tabContent = document.querySelectorAll('.features__content-item')

tabItem.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button
    
    tabItem.forEach(function(item){
        item.classList.remove('features__tab-item--active') 
    })

    tabContent.forEach(function(item){
        item.classList.remove('features__content-item--active')
    })

    tabTarget.classList.add('features__tab-item--active')
    document.querySelector(`#${button}`).classList.add('features__content-item--active')
}


const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('menu--active')
    menuBtn.classList.toggle('menu__btn--active')
})