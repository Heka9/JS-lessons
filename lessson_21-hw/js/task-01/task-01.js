'use strict'

const divContainer = document.querySelector('#container')

divContainer.addEventListener('click', function (e) {
   if (e.target.closest('.div')) {
      let div = e.target

      while (div.nextElementSibling) {
         div = div.nextElementSibling
         div.style.color = 'red'
      }
   }
})

// ---------------------------------
// с помощью пользовательского события и класса

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

// class DivsList {
//    constructor(divsQuantity, divText) {
//       this.divsQuantity = divsQuantity
//       this.divText = divText
//       this.divs = []
//    }
//    changeStyles() {
//       while (this.clickedDiv.nextElementSibling) {
//          this.clickedDiv = this.clickedDiv.nextElementSibling
//          this.clickedDiv.style.color = 'red'
//       }
//    }
//    onDivClick(e) {
//       const myEvent = new Event('divClick', {
//          bubbles: true,
//          cancelable: true,
//       })
//       this.clickedDiv = e.target
//       this.clickedDiv.dispatchEvent(myEvent)
//    }
//    createList(container, number) {
//       for (let i = 0; i < number; i++) {
//          const div = CreateHMTLElement.createElement({
//             tag: 'div',
//             props: {
//                innerText: this.divText,
//             },
//             events: {
//                click: this.onDivClick.bind(this),
//                divClick: this.changeStyles.bind(this),
//             },
//          })
//          container.append(div)
//          this.divs.push(div)
//       }
//    }
//    render(id) {
//       this.container = document.getElementById(id)
//       this.createList(this.container, this.divsQuantity)
//    }
// }

// window.onload = () => {
//    const d1 = new DivsList(10, 'Hello!')
//    d1.render('container1')
// }
