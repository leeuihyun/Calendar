const main_content = document.querySelector('.main_content');
const todo_input = document.querySelector('.todo_input')
const todo_input_text = document.querySelector('.todo_input_text');
const todo_box = document.querySelector('.todo_box');
const todo_ul = document.querySelector('ul');
const calendar_section = document.querySelector('.calendar_section');
const before_button = document.querySelector('.before_button');
const next_button = document.querySelector('.next_button');
const calendar = document.querySelector('.calendar');
const current_year_month_td = document.querySelector('#current_year_month_td');
const calendar_date = document.querySelector('.calendar_date');
const todo_input_button = document.querySelector('.todo_input_button');
const todo_section = document.querySelector('.todo_section');
const todo_date_first_box = document.querySelector('.todo_date_first_box');
const todo_date = todo_date_first_box.querySelector('.todo_date');
const todo_day = document.querySelector('.todo_day');

let array = [];
var date = new Date();
var first = new Date(date.getFullYear(),date.getMonth(),1);
var firstPage = first;
const dateContent = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthContent = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const yoonYear = [31,29,31,30,31,30,31,31,30,31,30,31];
const noYoonYear = [31,28,31,30,31,30,31,31,30,31,30,31];
var currentYear;
var clickDate;


if(first.getFullYear()%4===0){
    currentYear = yoonYear;
}
else{
    currentYear = noYoonYear;
}
function calendarCheck(){
    current_year_month_td.innerHTML = first.getFullYear()+'&nbsp;&nbsp;&nbsp;&nbsp;'+monthContent[first.getMonth()];
    var number = 1; 
    var monthNumber = 100;
    for(var i =0;i<6;i++){
        const tr = document.createElement('tr');
        tr.setAttribute('id', monthNumber);
        for(var j =0; j<7 ;j++){
            if(i===0 && j<first.getDay() || number > currentYear[first.getMonth()]){
                var td = document.createElement('td');
                tr.appendChild(td);
            }
            else{
                var td = document.createElement('td');
                td.textContent = number;
                td.setAttribute('id', number);
                tr.appendChild(td);
                number++;
            }
        }
        monthNumber++;
        calendar_date.appendChild(tr);
    }  
}
showTodoBox();
calendarCheck();

function removeCalendar(){
    var trNumber = 100;
    for(var i =100;i<106;i++){
        var tr = document.getElementById(trNumber);
        tr.remove();
        trNumber++;
    }
}

function beforeButtonListener(event){
    event.preventDefault();
    todo_input_text.value="";
    const lis = document.querySelectorAll('.todo_ul > li');
    lis.forEach(function(e){
        e.remove();
    });
    if(firstPage.getMonth()===1){
        firstPage = new Date(first.getFullYear()-1,12,1);
        first = firstPage;
        if(first.getFullYear()%4===0){
            currentYear = yoonYear;
        }
        else{
            currentYear = noYoonYear;
        }
    }
    else{
        firstPage = new Date(first.getFullYear(),first.getMonth()-1,1);
        first = firstPage;
    }
    date = new Date(date.getFullYear(),date.getMonth()-1,date.getDate());
    removeCalendar();
    calendarCheck();
    clickDate = document.getElementById(date.getDate());
    clickDate.classList.add('active');
    clickStart();
    showTodoBox();
}

function nextButtonListener(event){
    event.preventDefault();
    todo_input_text.value="";
    const lis = document.querySelectorAll('.todo_ul > li');
    lis.forEach(function(e){
        e.remove();
    });
    if(firstPage.getMonth()===12){
        firstPage = new Date(first.getFullYear()+1,1,1);
        first = firstPage;
        if(first.getFullYear%4===0){
            currentYear = yoonYear;
        }
        else{
            currentYear = noYoonYear;
        }
    }
    else{
        firstPage = new Date(first.getFullYear(),first.getMonth()+1,1);
        first = firstPage;
    }
    date = new Date(date.getFullYear(),date.getMonth()+1,date.getDate());
    removeCalendar();
    calendarCheck();
    clickDate = document.getElementById(date.getDate());
    clickDate.classList.add('active');
    clickStart();
    showTodoBox();
}
clickDate= document.getElementById(date.getDate());
console.log(date.getDate());

clickDate.classList.add('active');
before_button.addEventListener('click', beforeButtonListener);
next_button.addEventListener('click', nextButtonListener);

function showTodoBox(){
    var todo_date_year = date.getFullYear();
    var todo_date_month = date.getMonth()+1;
    var todo_date_day = date.getDate();
    todo_day.innerText = `${dateContent[date.getDay()]}`;
    todo_date.innerText = `${todo_date_year} ${todo_date_month} ${todo_date_day}`;
    
}
showTodoBox();
var tdGroup = [];

function clickStart(){
    for(var i =1;i<currentYear[first.getMonth()];i++){
        tdGroup[i] = document.getElementById(i);
        tdGroup[i].addEventListener('click', changeToday);
    }
}
clickStart();
function changeToday(event){
    for(var i=1;i<currentYear[first.getMonth()];i++){
        if(tdGroup[i].classList.contains('active')){
            tdGroup[i].classList.remove('active');
        }
    }
    
    clickDate = event.target;
    clickDate.classList.add('active');
    console.log(event.currentTarget.id);
    date = new Date(date.getFullYear(),date.getMonth(),clickDate.id);
    showTodoBox();

}
todo_input.addEventListener('submit', addListener);

function addListener(event){
    event.preventDefault();
    const value = todo_input_text.value;
    todo_input_text.value="";
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    span.innerText = value;
    delBtn.innerText = `❌`;
    delBtn.addEventListener('click', delBtnListener);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = Date.now();
    todo_ul.appendChild(li);
    const todoObj = {
        text : value,
        id : Date.now()
    };

}

function newListShow(){

}

function delBtnListener(){

}