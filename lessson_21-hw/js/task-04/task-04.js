'use strict'

class CreateHMTLElement {
   static createElement({ tag, attrs, props, events }) {
      const el = document.createElement(tag)
      if (attrs) {
         for (const attrKey in attrs) {
            el.setAttribute(attrKey, attrs[attrKey])
         }
      }
      if (props) {
         for (const propKey in props) {
            el[propKey] = props[propKey]
         }
      }
      if (events) {
         for (const event in events) {
            el.addEventListener(event, events[event])
         }
      }
      return el
   }
}

class CreateTableList {
   constructor(tablesNumber, tableColumns, tableRows, minTableValue, maxTableValue) {
      this.tablesNumber = tablesNumber
      this.tableColumns = tableColumns
      this.tableRows = tableRows
      this.minTableValue = minTableValue
      this.maxTableValue = maxTableValue
   }
   getRandomNumber() {
      return this.minTableValue + Math.floor(Math.random() * (this.maxTableValue - this.minTableValue + 1))
   }
   increaseCounter(event) {
      const currentTable = event.target.closest('table')
      let currentCounter = currentTable.getAttribute('counter')
      currentTable.setAttribute('counter', `${++currentCounter}`)
      this.showClicksQuantity(event)
   }
   showClicksQuantity(event) {
      const parentDiv = event.target.closest('.table-container')

      const curentTable = parentDiv.firstElementChild
      const tableCounter = parentDiv.lastElementChild
      tableCounter.innerText = `Table clickes = ${curentTable.getAttribute('counter')}`
   }
   onClick(event) {
      this.increaseCounter(event)
      const clickedElement = event.target

      if (clickedElement.closest('td')) {
         const parentTable = clickedElement.closest('table')

         parentTable.style.borderColor = 'red'
         setTimeout(() => {
            parentTable.style.borderColor = 'black'
         }, 500)
      }
   }
   createTable() {
      const table = CreateHMTLElement.createElement({
         tag: 'table',
         attrs: {
            counter: 0,
         },
         events: {
            click: this.onClick.bind(this),
         },
      })

      for (let i = 0; i < this.tableRows; i++) {
         const tr = CreateHMTLElement.createElement({ tag: 'tr' })

         for (let k = 0; k < this.tableColumns; k++) {
            const td = CreateHMTLElement.createElement({
               tag: 'td',
               props: {
                  innerText: this.getRandomNumber(),
               },
            })
            tr.append(td)
         }
         table.append(tr)
      }

      return table
   }
   render(id) {
      const container = document.getElementById(id)

      for (let i = 0; i < this.tablesNumber; i++) {
         const tableContainer = CreateHMTLElement.createElement({
            tag: 'div',
            attrs: {
               class: 'table-container',
            },
         })
         const counterDiv = CreateHMTLElement.createElement({
            tag: 'div',
            attrs: {
               class: 'table-counter',
            },
         })
         tableContainer.append(this.createTable())
         tableContainer.append(counterDiv)
         container.append(tableContainer)
      }
   }
}

const tab1 = new CreateTableList(3, 3, 3, 1, 100)
tab1.render('container')
console.log(tab1)

//--------------------------------------
//c использованием польщовательского события

// class CreateHMTLElement {
//    static createElement({ tag, attrs, props, events }) {
//       const el = document.createElement(tag)
//       if (attrs) {
//          for (const attrKey in attrs) {
//             el.setAttribute(attrKey, attrs[attrKey])
//          }
//       }
//       if (props) {
//          for (const propKey in props) {
//             el[propKey] = props[propKey]
//          }
//       }
//       if (events) {
//          for (const event in events) {
//             el.addEventListener(event, events[event])
//          }
//       }
//       return el
//    }
// }

// class CreateTableList {
//    constructor(tablesNumber, tableColumns, tableRows, minTableValue, maxTableValue) {
//       this.tablesNumber = tablesNumber
//       this.tableColumns = tableColumns
//       this.tableRows = tableRows
//       this.minTableValue = minTableValue
//       this.maxTableValue = maxTableValue
//    }
//    getRandomNumber() {
//       return this.minTableValue + Math.floor(Math.random() * (this.maxTableValue - this.minTableValue + 1))
//    }
//    increaseCounter(event) {
//       const currentTable = event.target.closest('table')
//       let currentCounter = currentTable.getAttribute('counter')
//       currentTable.setAttribute('counter', `${++currentCounter}`)
//       this.showClicksQuantity(event)
//    }
//    showClicksQuantity(event) {
//       const parentDiv = event.target.closest('.table-container')

//       const curentTable = parentDiv.firstElementChild
//       const tableCounter = parentDiv.lastElementChild
//       tableCounter.innerText = `Table clickes = ${curentTable.getAttribute('counter')}`
//    }
//    onTdClick(event) {
//       this.increaseCounter(event)
//    }
//    onClick(event) {
//       const clickedElement = event.target

//       if (clickedElement.closest('td')) {
//          const parentTable = clickedElement.closest('table')

//          parentTable.style.borderColor = 'red'
//          setTimeout(() => {
//             parentTable.style.borderColor = 'black'
//          }, 500)
//       }
//       if (clickedElement.closest('table')) {
//          const myEvent = new Event('tdclick', {
//             bubbles: true,
//             cancelable: true,
//          })
//          clickedElement.dispatchEvent(myEvent)
//       }
//    }
//    createTable() {
//       const table = CreateHMTLElement.createElement({
//          tag: 'table',
//          attrs: {
//             counter: 0,
//          },
//          events: {
//             click: this.onClick.bind(this),
//             tdclick: this.onTdClick.bind(this),
//          },
//       })

//       for (let i = 0; i < this.tableRows; i++) {
//          const tr = CreateHMTLElement.createElement({ tag: 'tr' })

//          for (let k = 0; k < this.tableColumns; k++) {
//             const td = CreateHMTLElement.createElement({
//                tag: 'td',
//                props: {
//                   innerText: this.getRandomNumber(),
//                },
//             })
//             tr.append(td)
//          }
//          table.append(tr)
//       }

//       return table
//    }
//    render(id) {
//       const container = document.getElementById(id)

//       for (let i = 0; i < this.tablesNumber; i++) {
//          const tableContainer = CreateHMTLElement.createElement({
//             tag: 'div',
//             attrs: {
//                class: 'table-container',
//             },
//          })
//          const counterDiv = CreateHMTLElement.createElement({
//             tag: 'div',
//             attrs: {
//                class: 'table-counter',
//             },
//          })
//          tableContainer.append(this.createTable())
//          tableContainer.append(counterDiv)
//          container.append(tableContainer)
//       }
//    }
// }

// const tab1 = new CreateTableList(3, 3, 3, 1, 100)
// tab1.render('container')
