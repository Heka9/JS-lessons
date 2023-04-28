'use strict'

const inputsContainer = document.getElementById('container')

inputsContainer.addEventListener('change', function (e) {
   const input = e.target
   let inputValue = input.value
   const copyInputValue = inputValue

   let parentInputDiv = input.parentElement
   const copyDiv = parentInputDiv

   while (parentInputDiv.nextElementSibling) {
      parentInputDiv = parentInputDiv.nextElementSibling
      parentInputDiv.lastElementChild.value = ++inputValue
   }

   inputValue = copyInputValue
   parentInputDiv = copyDiv

   while (parentInputDiv.previousElementSibling) {
      parentInputDiv = parentInputDiv.previousElementSibling
      parentInputDiv.lastElementChild.value = --inputValue
   }
})

// ---------------------------------
// с помощью пользовательского события и класса

// class CreateHMTLElement {
//    static createElement({ tag, attrs, props, events, styles }) {
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
//       if (styles) {
//          for (const cssProp in styles) {
//             el.style[cssProp] = styles[cssProp]
//          }
//       }
//       return el
//    }
// }

// class InputsForm {
//    constructor(inputsNumber) {
//       this.inputsNumber = inputsNumber
//       this.inputs = []
//    }
//    onMyNewEvent(event) {
//       const { inputIndex, inputValue } = event.detail
//       this.inputs.forEach((input, index) => {
//          input.value = inputValue - (inputIndex - index)
//       })
//    }
//    onIpnutEvent(index) {
//       this.input = this.inputs.find((_, ind) => ind === index)
//       const myNewEvent = new CustomEvent('inputevent', {
//          detail: {
//             inputIndex: index,
//             inputValue: this.input.value,
//          },
//          bubbles: true,
//          cancelable: true,
//       })
//       this.input.dispatchEvent(myNewEvent)
//    }
//    createList(container, number) {
//       for (let i = 0; i < number; i++) {
//          const div = CreateHMTLElement.createElement({
//             tag: 'div',
//             styles: {
//                display: 'flex',
//                alignItems: 'center',
//                marginBottom: '10px',
//             },
//          })
//          const label = CreateHMTLElement.createElement({
//             tag: 'label',
//             props: {
//                innerText: `Value ${i + 1}`,
//             },
//             attrs: {
//                for: `num${i + 1}`,
//             },
//             styles: {
//                fontSize: '20px',
//             },
//          })
//          div.append(label)
//          const input = CreateHMTLElement.createElement({
//             tag: 'input',
//             attrs: {
//                id: `num${i + 1}`,
//                type: 'number',
//             },
//             styles: {
//                height: '30px',
//                marginLeft: '20px',
//                border: '1px solid #000',
//                borderRadius: '5px',
//                padding: '0px 10px',
//                fontSize: '16px',
//             },
//             events: {
//                input: this.onIpnutEvent.bind(this, i),
//                inputevent: this.onMyNewEvent.bind(this),
//             },
//          })
//          this.inputs.push(input)
//          div.append(input)
//          container.append(div)
//       }
//    }
//    render(id) {
//       this.container = document.getElementById(id)
//       this.createList(this.container, this.inputsNumber)
//    }
// }

// window.onload = () => {
//    const f1 = new InputsForm(5).render('container1')
// }
