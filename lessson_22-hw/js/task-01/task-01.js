'use strict'

class Client {
   #money
   constructor({ id, name, money }) {
      this.id = id
      this.name = name
      this.Money = money
   }
   get Money() {
      return this.#money
   }
   set Money(newValue) {
      if (newValue >= 0) {
         this.#money = newValue
      }
   }
   addMoney(value) {
      this.money += value
   }
   takeMoney(value) {
      if (this.money >= value) {
         this.money -= value
      } else throw new Error('not enough money')
   }
   toString() {
      return `${this.name} has ${this.Money}$`
   }
}

class GoldenClient extends Client {
   constructor({ id, name, money, limit, creditRate }) {
      super({ id, name, money })
      this.limitMoney = limit
      this.creditRate = creditRate
   }
   calcCreditRate(creditMoneyValue, daysQuantity) {
      return ((creditMoneyValue * this.creditRate) / 100 / 365) * daysQuantity
   }
   toString() {
      return `${super.toString()} and ${this.limitMoney}$ credit limit`
   }
}

class Bank {
   constructor(clientsData) {
      this.clients = []
      this.createClientsArray(clientsData)
   }
   createClientsArray(clientsArray) {
      for (const client of clientsArray) {
         if (client.money < 8000) {
            const newClient = new Client(client)
            this.clients.push(newClient)
         } else {
            const newClient = new GoldenClient(client)
            this.clients.push(newClient)
         }
      }
   }
   showSingleClients() {
      const array = []
      this.clients.forEach((client) => (!(client instanceof GoldenClient) ? array.push(client) : null))

      // console.log(array);
      document.write(array)
   }
   showGoldenClients() {
      const array = []
      this.clients.forEach((client) => (client instanceof GoldenClient ? array.push(client) : null))

      // console.log(array);
      document.write(array)
   }
   get totalSum() {
      return this.clients.reduce((prevSum, client) => prevSum + client.Money, 0)
   }
}

const clients = [
   { id: 1, name: 'John', money: 1000, limit: 2000, creditRate: 20 },
   { id: 2, name: 'Olga', money: 2200, limit: 2000, creditRate: 20 },
   { id: 3, name: 'Ivan', money: 3400, limit: 4000, creditRate: 15 },
   { id: 4, name: 'Sam', money: 300, limit: 4000, creditRate: 15 },
   { id: 5, name: 'Maria', money: 1800, limit: 5000, creditRate: 20 },
   { id: 6, name: 'Tom', money: 8800, limit: 2000, creditRate: 9 },
   { id: 7, name: 'Sasha', money: 12200, limit: 2000, creditRate: 11 },
   { id: 8, name: 'Dasha', money: 34400, limit: 4000, creditRate: 10 },
]

const bank = new Bank(clients)
console.log(bank)
// bank.showSingleClients()
// bank.showGoldenClients()
// console.log(bank.totalSum)
