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

var date = new Date();
var first = new Date(date.getFullYear(),date.getMonth(),1);
var firstPage = first;
const dateContent = ['일','월','화','수','목','금','토'];
const monthContent = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const yoonYear = [31,29,31,30,31,30,31,31,30,31,30,31];
const noYoonYear = [31,28,31,30,31,30,31,31,30,31,30,31];
var currentYear;



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
    date = new Date(date.getFullYear(),date.getMonth()-1,1);
    removeCalendar();
    calendarCheck();
    showTodoBox();
    
}

function nextButtonListener(event){
    event.preventDefault();
}
before_button.addEventListener('click', beforeButtonListener);
next_button.addEventListener('click', nextButtonListener);

function showTodoBox(){

}

