'use strict'

class DinamicSearch {
   constructor(workersList) {
      this.workersList = workersList
   }
   search() {
      const word = this.searchBlockInput.value.toLowerCase()
      this.currentList = this.workersList.filter((name) => name.toLowerCase().includes(word))

      this.bodyBlock.innerHTML = ''
      this.bodyBlock.append(this.createList(this.currentList))
   }
   createList(namesArray) {
      const list = document.createElement('ul')
      list.className = 'list-block__list'

      for (const name of namesArray) {
         const li = document.createElement('li')
         li.className = 'list-block__item'
         li.innerText = name
         list.append(li)
      }

      return list
   }
   createListBlock(namesArray) {
      const listBlock = document.createElement('div')
      listBlock.className = 'list-block'

      const searchBlock = document.createElement('div')
      searchBlock.className = 'list-block__header'
      listBlock.append(searchBlock)

      const searchBlockLabel = document.createElement('label')
      searchBlockLabel.classList = 'list-block__label'
      searchBlockLabel.innerText = "Ім'я"
      searchBlock.append(searchBlockLabel)

      this.searchBlockInput = document.createElement('input')
      this.searchBlockInput.type = 'text'
      this.searchBlockInput.placeholder = 'Я шукаю...'
      this.searchBlockInput.classList = 'list-block__input'
      searchBlock.append(this.searchBlockInput)

      const searchBlockTitle = document.createElement('h3')
      searchBlockTitle.className = 'list-block__title'
      searchBlockTitle.innerText = 'Працівники'
      searchBlock.append(searchBlockTitle)

      this.searchBlockInput.oninput = this.search.bind(this)

      this.bodyBlock = document.createElement('div')
      this.bodyBlock.className = 'list-block__body'
      listBlock.append(this.bodyBlock)

      this.bodyBlock.append(this.createList(namesArray))

      return listBlock
   }

   render(id) {
      const container = document.getElementById(id)
      container.append(this.createListBlock(this.workersList))
   }
}

const workers = ['Іванов І.І.', 'Петров П.П.', 'Скрипка С.П.', 'Гончаренко Г.О', 'Івась І.І.']

window.onload = () => {
   const w1 = new DinamicSearch(workers)
   w1.render('container')
}
