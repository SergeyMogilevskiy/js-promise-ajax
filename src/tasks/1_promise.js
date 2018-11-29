// task 1
// Напишите функцию, которая будет генерировать случайные числа от 1 до 10. 
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах. 
// Оберните все это в промис. Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, 
// и с ошибкой - если от 6 до 10.
function randomNumberHandler() {
  let randomNumber = Math.floor(Math.random()*10 + 1)

  let promise =  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber > 5) {
        reject(randomNumber);
        return;
      }
      resolve(randomNumber);
    }, randomNumber*1000);
  });
  promise
  .then(number => console.log(`Number is: ${number}`))
  .catch(number => console.log(`Error: ${number}`))
}

randomNumberHandler()
// task 2
//Напишите функцию delay, которая принимает задержку и функцию и выполняет ее после заданной задержки
function delay (ms, callback) {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback)
    }, ms);
  })

  promise
  .then((callback) => {
    callback();
  })
  .catch( () => {
    console.log("Error");
  })
}

delay();

// task 3
// Напишите функцию которая принимает число и и через каждые 3 секунды 2 раза возводит число в квадрат
// и выводит промежуточные и конечный результат в консоль.
function squarePow (num) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num != "number") {
        reject(num)
        return
      }
      resolve(num)
    }, 3000)
  })

  promise
  .then( num => {
    num *= num;
    console.log(num);
    return num;
  })
  .then( num => {
    num *= num;
    console.log(num);
    squarePow(num)
  })
  .catch(() => {
    console.log(`Error: ${num} is not a number`)
  })

}

squarePow();

// task 4
// Напишите 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд. 
// Пусть каждый промис своим результатом возвращает эту задержку. 
// Получите массив результатов, найдите его сумму, выведите на экран.

const delay1 = () => {
  return new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random()*5 + 1)
    setTimeout(() => {
      resolve(randomNumber);
    }, randomNumber * 1000);
  });
};

const delay2 = () => {
  return new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random()*5 + 1)
    setTimeout(() => {
      resolve(randomNumber);
    }, randomNumber * 1000);
  });
};

const delay3 = () => {
  return new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random()*5 + 1)
    setTimeout(() => {
      resolve(randomNumber);
    }, randomNumber * 1000);
  });
};

function sum (term1, term2, term3) {
  
}

sum(delay1, delay2, delay3).then()
