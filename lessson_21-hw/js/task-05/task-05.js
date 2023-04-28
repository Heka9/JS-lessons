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
class CreateInputBlock {
   constructor() {}
   static createBlock(labelInnerText, inputPlaceholderText) {
      const block = CreateHMTLElement.createElement({ tag: 'div' })

      const label = CreateHMTLElement.createElement({
         tag: 'label',
         props: { innerText: labelInnerText },
         attrs: { for: labelInnerText },
      })
      block.append(label)

      const input = CreateHMTLElement.createElement({
         tag: 'input',
         props: { placeholder: inputPlaceholderText },
         attrs: { id: labelInnerText },
      })
      block.append(input)

      return { block, label, input }
   }
}

class UserForm {
   constructor(inputFieldArray) {
      this.inputFieldArray = inputFieldArray
      this.inputs = []
   }

   onFormClick(e) {
      if (e.target.closest('input')) {
         e.target.value = 0
      }
   }
   createForm() {
      this.form = CreateHMTLElement.createElement({
         tag: 'form',
         events: { click: this.onFormClick.bind(this) },
      })

      for (let i = 0; i < this.inputFieldArray.length; i++) {
         const block = CreateInputBlock.createBlock(
            this.inputFieldArray[i],
            `Введіть ${this.inputFieldArray[i].toLowerCase()}`
         )
         this.input = block.input
         this.inputs.push(this.input)
         this.form.append(block.block)
      }

      return this.form
   }
   render(id) {
      const container = document.getElementById(id)
      container.append(this.createForm())
   }
}

const arr = ['Вік', 'Зріст', 'Вага', 'Заробітня плата', 'Стаж', 'Номер відділу', 'Порядковий номер']

const block = new UserForm(arr)
block.render('container')
console.log(block)

// с кастомным событием

// class UserForm {
//    constructor(inputFieldArray) {
//       this.inputFieldArray = inputFieldArray
//       this.inputs = []
//    }
//    onFormClickEvent(e) {
//       e.detail.input.value = 0
//    }
//    onFormClick(e) {

//       const targetInput = e.target.closest('input')

//       if (targetInput) {
//          const myEvent = new CustomEvent('formclick', {
//             detail: {
//                input: targetInput,
//             },
//             bubbles: true,
//             cancelable: true,
//          })
//          this.form.dispatchEvent(myEvent)
//       }
//    }
//    createForm() {
//       this.form = CreateHMTLElement.createElement({
//          tag: 'form',
//          events: { click: this.onFormClick.bind(this), formclick: this.onFormClickEvent.bind(this) },
//       })

//       for (let i = 0; i < this.inputFieldArray.length; i++) {
//          const block = CreateInputBlock.createBlock(
//             this.inputFieldArray[i],
//             `Введіть ${this.inputFieldArray[i].toLowerCase()}`
//          )
//          this.input = block.input
//          this.inputs.push(this.input)
//          this.form.append(block.block)
//       }

//       return this.form
//    }
//    render(id) {
//       const container = document.getElementById(id)
//       container.append(this.createForm())
//    }
// }

// const arr = ['Вік', 'Зріст', 'Вага', 'Заробітня плата', 'Стаж', 'Номер відділу', 'Порядковий номер']

// const block = new UserForm(arr)
// block.render('container')
// console.log(block)
