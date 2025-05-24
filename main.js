let form = document.getElementById("myForm");
let status1 = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    tel: form.tel.value,
    service: form.service.value,
    connect: form.connect.value
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwp9WCnzfeMoIlJPKeGtvTZnOp23A9Ss7W8dj9gsltAJ9__05X7r9VpypQeopSDmx9b9A/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    status1.textContent = "Отправлено!";
    form.reset();
  } catch (err) {
    console.log(err);
    status1.textContent = "Ошибка отправки";
  }
});

let burger = document.getElementById("burger");
let menu = document.querySelector(".nav_menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.style.height = "0";
  } else {
    menu.style.height = menu.scrollHeight + "px";
  }
  menu.classList.toggle("active");
});


/*let a = prompt("Введите длину прямоугольника");
let b = prompt("Введите ширину прямоугольника");

a=Number(a); 
b=Number(b); 

let c = 2*(a+b);


console.log("Периметр прямоугольника = ", c);

alert (c)*/

/*Обьем параллелограмма
let a=prompt("Введите длину",6);
let b=prompt("Введите ширину",6);
let d=prompt("Введите высоту",6);
console.log(typeof a);


console.log(Number(a)*Number(b)*Number(d));
*/


/*
console.log (14225435463%100);

 
let a=prompt()

if(a%2==0){
 console.log("Четное");
    
}
else{
console.log("Нечетное");}
*/

/*
let a=prompt();
let b=prompt(a)

if (a%2==b%2) {
    console.log("ЧИсла имеют одинаковую четность");
} else {
    console.log("Числа не имеют одинаковую четность")
}
*/


/*Домашнее

let x=prompt();

console.log(x*x+10*x+15);
*/

/*
let n=prompt();
for(let i=0;i<=n;i++){
    if(i%3==0){
        console.log(i);
    }
}
    */



/*Счет N от 1 до N*/
/*
let N=prompt();
let S=0
for(let i=1; i<=N;i++){

  if (i%4==0 || i%5==0){

S+=i;
 }
}
console.log(S);

*/


/*Минимальное и максимальное число*/
/*
let max=0;
let min=100000000000000;
let N=prompt("Кол-во чисел");
for(let i=0;i <N; i++) {

    a=prompt();
    console.log(a);
if(a>max){
    max=a; 
}
if(a<min){

    min=a}}

console.log("Минимальное число: ", min);
console.log("Максимальное число: ", max);
*/


/* Делимость/неделимость числа


let a = prompt("Введите число A:");
let b = prompt("Введите число B:");

if (a%b == 0) {

    console.log("Число ", a, " делится на", b  );
}
else{
    console.log("Число ", a, " не делится на", b, "Остаток:", a%b )
}

*/

/*
Задача 2
Запросите у пользователя количество чисел n, а затем сами числа. 
Программа должна найти и вывести их среднее арифметическое.

Пример ввода:
Введите количество чисел: 3
Введите число: 10
Введите число: 20
Введите число: 30

Пример вывода:
Среднее арифметическое: 20
*/

/*
let N=prompt();
let m=0;
let sum=0;
for(let i=0; i <N; i++) {

  m=Number(prompt("Введите число"));
sum=sum+m;
}
console.log(sum);
console.log(sum/N);
*/

/*массивы
let books = ["Шинель","Война и мир","Колобок", "Вий"];
books.push("Репка");
books.push("Горе от ума");
console.log(books[books.length-1]); 
*/

/*

let films = ["Гарри Поттер","Один дома","Форрест Гамп","Побег из Шоушенка","Крестный отец"]
for (let i=0; i < films.length; i++) {
    
console.log(films[i])
}
 */


/* факториал
let n = prompt("Введите число");
let factorial=1;
for (let i=1;i<=n; i++) {
    factorial=factorial*i;
}

console.log(factorial)
*/

/*
let a=[];
let b=[];

let c=[];

let n=Math.floor(Math.random()*(10-5+1)+5);


for (let i=0; i<5; i++){
    a[i]=Math.floor(Math.random()*10);
    b[i]=Math.floor(Math.random()*10);
    c[i]=a[i]*b[i];
}
console.log(a)
console.log(b)

for (let i=0;i<c.length;i++) {
    console.log(c[i])
}
*/


//Math.floor(Math.random() * (max - min + 1)) + min - Формула 
//console.log(Math.floor(Math.random()*10));


/*
let a = [];
let b = [];
let c = [];

//let n = random дальше пишешь от 5 до 11
let n = Math.floor(Math.random() * (11 - 5 + 1)) + 5

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (20 - 2 + 1)) + 2; //рандом поменять от 2 до 20 по формуле
    b[i] = Math.floor(Math.random() * (20 - 2 + 1)) + 2;

    if (a[i]  b[i]) {
        c[i]
    }

    console.log(a[i]);

}
*/


/*
let a = [1, 50, 20, 58, 100, 38565, "Приветствую!"];
let listelement = document.getElementById("Numberlist");


for (let i = 0; i < a.length; i++) {
    let listitem = document.createElement("li");
    listitem.textContent = a[i];
    listelement.appendChild(listitem);


}


let title = document.querySelectorAll("p");

console.log(title[title.length - 1]);


let color_array = ["yelloy", "green", "pink", "red"]



function color() {
    document.body.style.backgroundColor = "blue";
    document.body.style.backgroundColor ="green";
}
*/


/*
let colormassive = document.body;
let a = ["red", "green", "yellow"];
let k=0;

function color() {

    colormassive.style.backgroundColor = a[k];


if (k<a.length ) {
k++;
}

else{

    k=0;
    colormassive.style.backgroundColor = a[k];
    k++;
}


}
*/
/*

let a = ["Привет!", "Как дела?", "До встречи!"];
let N = 0;
let title = document.querySelector("h1");

if (N > a.length - 1) {
    N = 0;
}

function change_title() {
    title.textContent = a[N];
    N++;
    if (N > a.length - 1) {
        N = 0;
    }
}





let j = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
i = 0;
let b = document.getElementById("123");
let but = document.getElementById("buttn_count");

function count() {
    b.textContent = j[i];
    i++;
    if (i > j.length - 1) {
        b.textContent = "Отсчет окончен!";
        but.style.opacity = 0;
    }
}





let img = ["Img/Task.png", "Img/slider.1.png", "Img/slider.2.png"];
let slider = document.getElementById("sliderimg");
let index = 0;

function next_img() {
    index++;
    if (index > img.length - 1) {
        index = 0;
    }
    slider.src = img[index];
}

function prev_img() {

    index--;
    if (index < 0) {
        index = img.length - 1;
    }
    slider.src = img[index];
}
function auto_slide() {
    next_img();

}
//setInterval(auto_slide, 3000);



let runbtn = document.getElementById("running_button");

runbtn.addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    runbtn.style.left = `${x}px`;
    runbtn.style.top = `${y}px`;

})

/*
let crcl = document.getElementById("circle");
document.addEventListener("mousemove", function (event) {
    crcl.style.left = `${event.pageX - 15}px`;
    crcl.style.top = `${event.pageY - 15}px`;
});
*/
/*
*/
document.addEventListener("mousemove", function (event) {
    crcl.style.left = $
    { event.pageX - 15 } px;
    crcl.style.top = $
    { event.pageY - 15 } px;
});


let scrollToTopBth = document.getElementById("scrollToTop");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTopBth.classList.add("show");


    }
    else {
        scrollToTopBth.classList.remove("show");
    }
});

scrollToTopBth.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

/*
let burger = document.getElementById("burger")
let menu = document.querySelector(".nav_menu")

burger.addEventListener("click", () => {
    menu.classList.toggle("active")

});
let increaseButton = document.getElementById("increaseButton")

increaseButton.addEventListener("click", () => {
    increaseButton.style.transform = "scale(2)";
    setTimeout(function () {
        increaseButton.style.transform = "scale(1)";
    }, 3000)
});


let modal = document.querySelector("    .modal");
let modal_cont = document.querySelector(".modalContent");
let close = document.querySelector(".close");

let isModal = false;

window.addEventListener("mousemove", (event) => {
    if (event.clientY < 10 && !isModal) {
        modal.style.display = "flex";
        isModal = true;
        document.body.style.overflowY = "hidden"

    }

})

modal_cont.addEventListener("click", () => {

    event.stopPropagation();
})

modal.addEventListener("click", (event) => {
    document.body.style.overflowY = "visible"
    isModal = false;
    modal.style.display = "none";
})


let form = document.getElementById(("MyForm"))
let status1 = document.getElementById("status")
form.addEventListener("submit", async (e) => {
    e.preventDefault

    let data = {
        name: form.name.value,
        tel: form.tel.value,

    }

})


try {

    let res = await fetch("", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })



    if (res.osk) {

        form, reset();
        status1.textContent = "Отправлено!";
    }

    else {

        status1.textContent = "Ошибка отправки"
    }

}


catch (err) {

    console.log(err)

}
*/
