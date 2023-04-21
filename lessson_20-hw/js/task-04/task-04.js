'use strict'

class Translater {
   constructor(wordsArray) {
      this.wordsArray = wordsArray
      this.compareWordsArray = []
      this.clickWordLanguage = []
      this.clickedLi = []
   }
   shuffleArray([...array]) {
      for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1))
         ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
   }
   deleteWords(id) {
      this.wordsArray = this.wordsArray.filter((word) => word.id !== id)

      this.listContainer.innerHTML = ''
      this.listContainer.append(this.createList(this.wordsArray, 'en'))
      this.listContainer.append(this.createList(this.wordsArray, 'ua'))
   }

   compareWords(object, lang) {
      this.compareWordsArray.push(object)
      this.clickWordLanguage.push(lang)

      //проверка на 2 клика подряд по словам одинакового языка (из одной колонки)
      if (this.compareWordsArray.length > 1 && !(this.clickWordLanguage[0] === lang)) {
         // ответили правильно
         const res = this.compareWordsArray[0].id === object.id

         if (res) {
            this.compareWordsArray = []
            this.clickWordLanguage = []

            for (const li of this.clickedLi) {
               li.classList.remove('focus')
               li.classList.add('correct')
            }
            setTimeout(this.deleteWords.bind(this, object.id), 1000)

            this.clickedLi = []
         } else {
            // ответили не правильно
            this.compareWordsArray = []
            this.clickWordLanguage = []

            for (const li of this.clickedLi) {
               li.classList.remove('focus')
               li.classList.add('mistake')
               setTimeout(() => (li.className = 'li'), 1000)
            }

            this.clickedLi = []
         }
      } else if (this.compareWordsArray.length > 1 && this.clickWordLanguage[0] === lang) {
         // нажали на 2 слова подряд из одной колонки
         this.compareWordsArray = []
         this.clickWordLanguage = []

         for (const li of this.clickedLi) {
            li.classList.remove('focus')
            li.classList.add('mistake')
            setTimeout(() => (li.className = 'li'), 1000)
         }

         this.clickedLi = []
      }
   }
   createList(array, language) {
      const list = document.createElement('ul')
      list.className = 'list'

      const suffledWordsArray = this.shuffleArray(array)

      for (const wordObj of suffledWordsArray) {
         const li = document.createElement('li')
         li.className = 'li'
         li.innerText = wordObj[language]

         li.onclick = () => {
            this.clickedLi.push(li)
            li.classList.add('focus')
            this.compareWords(wordObj, language)
         }

         list.append(li)
      }

      return list
   }
   render(containerId) {
      const targetContainer = document.getElementById(containerId)

      const title = document.createElement('h2')
      title.className = 'title'
      title.innerText = 'Знайдіть пари слів'
      targetContainer.append(title)

      this.listContainer = document.createElement('div')
      this.listContainer.className = 'list-container'
      targetContainer.append(this.listContainer)

      this.listContainer.append(this.createList(this.wordsArray, 'en'))
      this.listContainer.append(this.createList(this.wordsArray, 'ua'))
   }
}

const words = [
   {
      id: 0,
      en: 'table',
      ua: 'стіл',
   },
   {
      id: 1,
      en: 'car',
      ua: 'автомобіль',
   },
   {
      id: 2,
      en: 'bus',
      ua: 'автобус',
   },
   {
      id: 3,
      en: 'hunam',
      ua: 'людина',
   },
   {
      id: 4,
      en: 'boy',
      ua: 'хлопець',
   },
]

window.onload = () => {
   const tr1 = new Translater(words)
   tr1.render('container')
}
