
//! BANKOMAT
let userData = {
	'USD': 1000,
	'EUR': 900,
	'UAH': 15000,
	'BIF': 20000,
	'AOA': 100
}
let bankData = {
	'USD': {
		max: 3000,
		min: 100,
		img: '💵'
	},
	'EUR': {
		max: 1000,
		min: 50,
		img: '💶'
	},
	'UAH': {
		max: 0,
		min: 0,
		img: '💴'
	},
	'GBP': {
		max: 10000,
		min: 100,
		img: '💷'
	}
} 

const getMoney = (userData, bankData) => {

	let currencyArr = [] //доступные валюты для снятия денег
	let currency = `` /// валюта
	let countOfMoney = ``  ///количество денег для снятия
	let result = ``   //результат ф-и перебора допустимой валюты

	// ф-я вывода баланса
	const getCurrencyBalanse = ({userData: userData, bankData: bankData}) => {
		do {
			currency = prompt(`Введите название валюты в формате ${Object.keys(userData).join(`, `)}.`, `USD`).toUpperCase() ;
		}
		while (!Object.keys(userData).includes(currency) );
		return alert(`Баланс составляет ${currency}: ${userData[currency]}`);
	}

	// функция перебор допустимой валюты
	const possibleСurrency = (currency, userData, bankData) => {
		if(Object.keys(userData).includes(currency) && Object.keys(bankData).includes(currency)){
			result=false
			if(!bankData[currency].max){
				alert(`В банкомате отсутствуют в данный момент купюр этой валюты`)
				result=true
			}
		}
		else{
			result=true
		}
		return result
	}
	//ф-я вывода доступной валюты для снятия денег
	const currentCurrency = (userData, bankData) => {
		currencyArr.splice(0,)
		for(let key in bankData){
			if(Object.keys(userData).includes(key) && bankData[key].max != 0)
			currencyArr.push(key)
		}
		return currencyArr
	}
	//  функция выбор валюты
	const getCurrency = (userData, bankData) =>{
		do {
			currency = prompt(`Введите название валюты в формате ${		currentCurrency(userData, bankData).join(`, `)
		}.`, `USD`).toUpperCase() ;
		}
		while (possibleСurrency(currency, userData, bankData));
		alert(`Баланс составляет ${currency}: ${userData[currency]}`);
		return currency
	}

	// функция количество денег для снятия
	const getCountOfMoney = (userData, bankData) => {
		countOfMoney = parseInt( prompt(`Введите сумму для снятия наличных`, 100) );
		if( countOfMoney > bankData[currency].max || countOfMoney >= userData[currency]){
			alert(`Введенная сумма больше допустимой. Максимальная сумма для снятия ${bankData[currency].max}, Ваш баланс ${userData[currency]}`)
		}else if(countOfMoney < bankData[currency].min){
			alert(`Введенная сумма меньше допустимой. Минимальная сумма для снятия ${bankData[currency].min}, Ваш баланс ${userData[currency]}`)
		}
		else{
			alert(`Вот ваши деньги ${countOfMoney} ${currency}  ${bankData[currency].img}`)
		}
	}
	const promise = new Promise(
		(resolve, reject) => {
			const Yes = confirm(`Посмотреть баланс на карте?`)
			return Yes ? resolve({userData: userData, bankData: bankData}): reject(({userData: userData, bankData: bankData}));
		}
	);
	promise
	.then(
		(userData) => {
			getCurrencyBalanse(userData)
		},
		({userData: userData, bankData: bankData}) => {
			getCurrency(userData, bankData)
			getCountOfMoney(userData, bankData)
		}
	)
	.finally(
		() => alert(`Спасибо, хорошего дня 😊`)
	)
}  

getMoney(userData, bankData)




























// const astrologicalSigns = {
// 	Aries: {
// 		startDate: {
// 		month: `March`,
// 		day: 21
// 		},
// 		endDate: {
// 		month: `April`,
// 		day: 20
// 		}
// 	},
// 	Taurus: {
// 		startDate: {
// 		month: `April`,
// 		day: 21
// 		},
// 		endDate: {
// 		month: `May`,
// 		day: 21
// 		}
// 	},
// 	Gemini: {
// 		startDate: {
// 		month: `May`,
// 		day: 22
// 		},
// 		endDate: {
// 		month: `June`,
// 		day: 21
// 		}
// 	},
// 	Cancer: {
// 		startDate: {
// 		month: `June`,
// 		day: 22
// 		},
// 		endDate: {
// 		month: `July`,
// 		day: 22
// 		}
// 	},
// 	Leo: {
// 		startDate: {
// 		month: `July`,
// 		day: 23
// 		},
// 		endDate: {
// 		month: `August`,
// 		day: 21
// 		}
// 	},
// 	Virgo: {
// 		startDate: {
// 		month: `August`,
// 		day: 22
// 		},
// 		endDate: {
// 		month: `September`,
// 		day: 23
// 		}
// 	},
// 	Libra: {
// 		startDate: {
// 		month: `September`,
// 		day: 24
// 		},
// 		endDate: {
// 		month: `October`,
// 		day: 23
// 		}
// 	},
// 	Scorpio: {
// 		startDate: {
// 		month: `October`,
// 		day: 24
// 		},
// 		endDate: {
// 		month: `November`,
// 		day: 22
// 		}
// 	},
// 	Sagittarius: {
// 		startDate: {
// 		month: `November`,
// 		day: 23
// 		},
// 		endDate: {
// 		month: `December`,
// 		day: 22
// 		}
// 	},
// 	Capricorn: {
// 		startDate: {
// 		month: `December`,
// 		day: 23
// 		},
// 		endDate: {
// 		month: `January`,
// 		day: 20
// 		}
// 	},
// 	Aquarius: {
// 		startDate: {
// 		month: `January`,
// 		day: 21
// 		},
// 		endDate: {
// 		month: `February`,
// 		day: 19
// 		}
// 	},
// 	Pisces: {
// 		startDate: {
// 		month: `February`,
// 		day: 20
// 		},
// 		endDate: {
// 		month: `March`,
// 		day: 20
// 		}
// 	}
// }

// const users = [
// 	{
// 		name: 'Larry Page',
// 		dayOfBirth: 26,
// 		monthOfBirth: `March`
// 	},
// 	{
// 		name: 'Bill Gates',
// 		dayOfBirth: 28,
// 		monthOfBirth: `October`
// 	},
// 	{
// 		name: 'Mark Zuckerberg',
// 		dayOfBirth: 14,
// 		monthOfBirth: `May`
// 	}
// ]

// const Month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]

// class Time{
// 	static Date(){
// 		return new Date()
// 	}
// 	static getDay(){
// 		return  this.Date().getDate()
// 	}
// 	static getMonth(){
// 		return  this.Date().getMonth()
// 	}
// 	static getMonthNames(){
// 		return 	Month
// 	}
// 	static monthNames(month){
// 		if(month){
// 			return this.getMonthNames()[month-1]
// 		}else{
// 			return this.getMonthNames()[this.getMonth()]
// 		}
// 	}
// }

// class Astrological extends Time{
// 	static astrologicalSign(date=`${super.getDay()}`, this_month=`${super.monthNames()}`){
// 		let value
// 		if (this_month==`January` && date>=21 || this_month==`February` && date<=19) value="Aquarius";
// 		else if (this_month==`February` && date>=20 || this_month==`March` && date<=20) value="Pisces";
// 		else if (this_month==`March` && date>=21 || this_month==`April` && date<=20) value="Aries";
// 		else if (this_month==`April` && date>=21 || this_month==`May` && date<=21) value="Taurus";
// 		else if (this_month==`May` && date>=22 || this_month==`June` && date<=21) value="Gemini";
// 		else if (this_month==`June` && date>=22 || this_month==`July` && date<=22) value="Cancer";
// 		else if (this_month==`July` && date>=23 || this_month==`August` && date<=21) value="Leo";
// 		else if (this_month==`August` && date>=22 || this_month==`September` && date<=23) value="Virgo";
// 		else if (this_month==`September` && date>=24 || this_month==`October` && date<=23) value="Libra";
// 		else if (this_month==`October` && date>=24 || this_month==`November` && date<=22) value="Scorpio";
// 		else if (this_month==`November` && date>=23 || this_month==`December` && date<=22) value="Sagittarius";
// 		else if (this_month==`December` && date>=23 || this_month==`January` && date<=20) value="Capricorn";
// 		else value="wrong date!";
// 		return value
// 	}
	
// }
// class Human extends Astrological {
// 	static astrologicalSignUser(user){
// 		return `${user.name} is ${super.astrologicalSign(user.dayOfBirth,user.monthOfBirth )}`
// 	}
// }
// console.log(`****геттер date***`);
// console.log(Time.Date());
// console.log('\n'+`****геттер day***`);
// console.log(Time.getDay());
// console.log('\n'+`****геттер month***`);
// console.log(Time.getMonth());
// console.log('\n'+`***геттер monthNames****`);
// console.log(Time.getMonthNames());
// console.log('\n'+`****метод monthName (актуальный месяц)***`);
// console.log(Time.monthNames());
// console.log('\n'+`***метод monthName (1й месяц)****`);
// console.log(Time.monthNames(1));
// console.log('\n'+`***метод monthName (6й месяц)****`);
// console.log(Time.monthNames(6));
// console.log('\n'+`***метод monthName (12й месяц)****`);
// console.log(Time.monthNames(12));
// console.log('\n'+`***метод astrologicalSign****`);
// users.map(user =>console.log(Human.astrologicalSignUser(user)))
// class User {
// #message = `...`;

// get message() {
// 	return `✨ ${this.#message} ✨`;
// }

// set message(msg) {
// 	this.#message = msg;
// }

// constructor({name:userName, animals:userAnimals=[]}={}){
// 	this.name = userName;
// 	if(userAnimals.length)
// 	this.animals = userAnimals;
// }

// get info(){
// 	return `Hello, ${this.name}.\n\nI have to tell you that:\n${this.message}${this.animals ? `\n\n${this.animalsMessage}` : ``}`;
// }

// get animalsIcon(){
// 	return this.animals
// 	.map(animal => animal.icon)
// 	.join(`, `)
// }

// get animalsMessage(){
// 	return `Your's animals are awesome: ${this.animalsIcon}.`
// }
// }

// let users = [
// {
// 	name: `Valentin`,
// 	animals: [
// 	{
// 		type: `penguin`,
// 		icon: `🐧`
// 	},
// 	{
// 		type: `owl`,
// 		icon: `🦉`
// 	}
// 	]
// },
// {
// 	name: `Oleg`
// }
// ];

// const randomMessages = [
// "You don't have to be great to start, but you have to start to be great",
// "Among the things you can give and still keep are your word, a smile, and a grateful heart",
// "You never know when a moment and a few sincere words can have an impact on a life"
// ];

// const randomQuote = (max, min=0) => Math.floor(Math.random() * (max - min)) + min;

// users
// .map(user => new User(user))
// .forEach(user => {
// 	user.message = randomMessages[randomQuote(randomMessages.length)];
// 	console.log(user.info);
// })
// let head = document.querySelector(`div`);
// div.block.style.background = `red`;
// console.log(head);

// const div = document.querySelector(`.block`)

// function randomMove(max , min){
//     return Math.floor(Math.random() * ((max-100) - min)) + min ;
// }
// function color(max = 255, min=0){
// 	return  Math.floor(Math.random() * (max - min)) + min
// }

// setInterval(()=>{
// 	div.style.left = `${randomMove(window.innerWidth,0)}px`;
// 	div.style.top = `${randomMove(window.innerHeight,0)}px`;
// 	div.style.background = `rgb(${color()}, ${color()}, ${color()})`
// },500);
// const promis = new Promise(
// 	(resolve, reject) => {
// 		console.log(`loading`);
// 		setTimeout(() => {
// 			const backendData = {
// 				name: `igor`,
// 				sName: `Hryva`
// 			}
// 		resolve(backendDat)
// 		}, 2000);
// 	}
// )

// promis
// 	.then(
// 		(data) => {
// 			console.log(data);
// 		}
// 	)
// 	.finally(
// 		() => {
// 			console.log(`finnaly`);
// 		}
// 	)
// console.log(`dsds`);

// setTimeout(() => {
// 	console.log(`sdfds`);
// }, 2000);

// let promise = new Promise(function(resolve, reject) {
// 	// задача, не требующая времени
// 	resolve(123); // мгновенно выдаст результат: 123
// });
// promise.then(
// 	data => console.log(data)
// )

// let userData = {
// 	'USD': 1000,
// 	'EUR': 900,
// 	'UAH': 15000,
// 	'BIF': 20000,
// 	'AOA': 100
// }
// let bankData = {
// 	'USD': {
// 		max: 3000,
// 		min: 100,
// 		img: '💵'
// 	},
// 	'EUR': {
// 		max: 1000,
// 		min: 50,
// 		img: '💶'
// 	},
// 	'UAH': {
// 		max: 0,
// 		min: 0,
// 		img: '💴'
// 	},
// 	'GBP': {
// 		max: 10000,
// 		min: 100,
// 		img: '💷'
// 	}
// } 


// // do {
// // 	let Valute  = prompt(`Введите название валюты в формате USD, EUR, UAH или GBP`,`EUR`);
// // }
// // while (Valute !== `USD` || 'EUR' || 'UAH' || 'GBP' ){

// // Valute = prompt(`Введите название валюты в формате USD, EUR, UAH или GBP`);
// // }
// // console.log(Valute);

// // let Valute
// // while (Valute !== `USD` || 'EUR' || 'UAH' || 'GBP' ){
// // 	Valute = prompt(`Введите название валюты в формате USD, EUR, UAH или GBP`, `USD`);	
// // }