'use strict'

class CarFilter {
   constructor(carData) {
      this.carData = carData
      this.searchElementArray = []
   }
   search() {
      const selectsArray = document.querySelectorAll('select')

      this.searchElementArray = JSON.parse(JSON.stringify(this.carData))

      for (const select of selectsArray) {
         const selectValue = select.value
         this.searchElementArray = this.searchElementArray.filter((item) => {
            return Object.values(item).find((value) => value === selectValue)
         })
      }
      this.showResult()
   }
   showResult() {
      this.resultTextContainer.innerHTML = ''
      // const p = document.createElement('p')

      if (this.searchElementArray.length) {
         for (const element of this.searchElementArray) {
            const p = document.createElement('p')
            p.innerText = `${element.model} - ${element.year} р. - ${element.price}$`
            this.resultTextContainer.append(p)
         }
      } else {
         const p = document.createElement('p')
         p.innerText = `За заданими критеріями пошуку автомобілі відсутні`
         this.resultTextContainer.append(p)
      }
      // this.resultTextContainer.append(p)
   }
   createSelectBlock(array, labelTitle, filterCategory) {
      const selectBlock = document.createElement('div')
      selectBlock.className = 'select__block'

      const selectLabel = document.createElement('label')
      selectLabel.innerText = labelTitle
      selectLabel.className = 'select__label'
      selectBlock.append(selectLabel)

      const select = document.createElement('select')
      select.className = 'select'
      selectBlock.append(select)

      select.onchange = this.search.bind(this)

      const allPropsArray = array
         .reduce((prevValue, item) => {
            if ([filterCategory] in item) {
               prevValue.push(item[filterCategory])
               return prevValue
            }
         }, [])
         .sort((item1, item2) => {
            if (item1 > item2) return 1
            else if (item1 < item2) return -1
            else return 0
         })

      const uniquePropsArray = new Set(allPropsArray)

      for (const item of uniquePropsArray) {
         const option = document.createElement('option')
         option.innerText = `${item}`
         option.value = `${item}`
         option.className = 'select__option'
         select.append(option)
      }

      return selectBlock
   }
   render(id) {
      const targetContainer = document.getElementById(id)

      const filterBlock = document.createElement('div')
      filterBlock.className = 'container__block'
      targetContainer.append(filterBlock)

      const fiterBlockTitle = document.createElement('h3')
      fiterBlockTitle.className = 'title'
      fiterBlockTitle.innerText = 'Фільтри пошуку'
      filterBlock.append(fiterBlockTitle)

      const selectContainer = document.createElement('div')
      selectContainer.className = 'container__filter'
      filterBlock.append(selectContainer)

      selectContainer.append(this.createSelectBlock(this.carData, 'Марка', 'model'))
      selectContainer.append(this.createSelectBlock(this.carData, 'Рік випуску', 'year'))

      const resultBlock = document.createElement('div')
      resultBlock.className = 'container__block'

      const resultBlockTitle = document.createElement('h3')
      resultBlockTitle.className = 'title title_brown'
      resultBlockTitle.innerText = 'Список'
      resultBlock.append(resultBlockTitle)

      this.resultTextContainer = document.createElement('div')
      this.resultTextContainer.className = 'container__text'
      resultBlock.append(this.resultTextContainer)

      this.search()

      targetContainer.append(resultBlock)
   }
}

const carsInfo = [
   {
      model: 'Opel',
      year: '1999',
      price: '3000',
   },
   {
      model: 'Mersedes',
      year: '2010',
      price: '9000',
   },
   {
      model: 'Mersedes',
      year: '2010',
      price: '12000',
   },
   {
      model: 'BMW',
      year: '2002',
      price: '3600',
   },
   {
      model: 'Nissan',
      year: '2010',
      price: '6100',
   },
   {
      model: 'Audi',
      year: '2006',
      price: '4900',
   },
   {
      model: 'Mersedes',
      year: '2012',
      price: '7500',
   },
]

window.onload = () => {
   const cf1 = new CarFilter(carsInfo)
   cf1.render('container')
}
