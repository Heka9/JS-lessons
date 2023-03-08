"use strict"


const input = document.querySelector(".input")
const button = document.querySelector(".button")
const textarea = document.querySelector(".textarea")


button.onclick = function () {
	let inputValue = input.value

	console.log(inputValue);

	textarea.innerHTML = inputValue
}