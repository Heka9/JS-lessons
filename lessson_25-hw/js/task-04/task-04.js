'use strict'

const url = 'https://dog.ceo/api/breeds/image/random'

function createImage(selector, srcImage) {
   const container = document.querySelector(selector)
   const image = document.createElement('img')
   image.setAttribute('src', srcImage)
   container.append(image)
}

async function requestData(url) {
   try {
      await fetch(url)
         .then((response) => response.json())
         .then((data) => createImage('#container', data.message))
   } catch (error) {
      console.log(error.message)
   } finally {
      console.log('Dog')
   }
}

requestData(url)
