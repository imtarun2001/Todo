

var container = document.getElementById('container');
var todo = document.getElementById('todo');
var dateContainer = document.getElementById('dateContainer');
var inputTask = document.getElementById('inputTask');
var input = document.getElementById('input');
var save = document.getElementById('save');
var taskContainer = document.getElementById('taskContainer');
var listOfTask = document.getElementById('listOfTask');
var button = document.querySelectorAll('.button');



//Required variables from built-in methods
var day = new Date().getDay();
var date = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();




//Set date in dateContainer
dateContainer.innerHTML = date+'/'+month+'/'+year;



//Animate the placeholder
document.addEventListener("DOMContentLoaded", function() {
    var placeHolderText = 'Enter your tasks here...';
    var currentIndex = 0;
    function typeWriter() {
        if (currentIndex < placeHolderText.length) {
            input.placeholder += placeHolderText[currentIndex];
            currentIndex++;
            setTimeout(typeWriter, 200);
        }
        else {
            setTimeout(() => {
                input.placeholder = '';
                currentIndex = 0;
                setTimeout(typeWriter, 300);
            }, 1350);
        }
    }
    typeWriter();
});

var count = 1;



//When someone clicks on save button
function onClickOnSave() {
    console.log('save button clicked');
    if(input.value!='') {
        if(count<=10) {
            var task = document.createElement('div');
            var listOfTask = document.createElement('input');
            var buttonContainer = document.createElement('div');
            var done = document.createElement('i');
            var edit = document.createElement('i');
            var delt = document.createElement('i');
            
            taskContainer.appendChild(task);
            task.appendChild(listOfTask);
            task.appendChild(buttonContainer);
            buttonContainer.appendChild(done);
            buttonContainer.appendChild(edit);
            buttonContainer.appendChild(delt);
            
            var taskText = input.value.toUpperCase().trim();
            listOfTask.value = taskText;
            listOfTask.readOnly = true;
            input.value = '';
            count++;
        
            task.style.cssText = 'height: 35px; width: 99%; display: flex; justify-content: space-evenly; align-items: center; margin-top: .9rem;';
            listOfTask.style.cssText = 'height: 95%; width: 65%; border: 1px solid rgb(0, 138, 244); display: flex; padding-left: 5px; justify-content: center; align-items: center; font-size: 1.8rem; color: black;  font-family: "Noto Sans", sans-serif; font-optical-sizing: auto; font-weight: 700; font-style: normal; font-variation-settings: "wdth" 100;';
            buttonContainer.style.cssText = 'height: 100%; width: 30%; display: flex; flex-direction: row; justify-content: space-between; align-items: center;'
            done.style.cssText = 'height: 95%; width: 30%; border: .1rem solid rgb(0, 138, 244); display: flex; justify-content: center; align-items: center; cursor: pointer; font-size: 2.7rem; color: green;'
            edit.style.cssText = 'height: 95%; width: 30%; border: .1rem solid rgb(0, 138, 244); display: flex; justify-content: center; align-items: center; cursor: pointer; font-size: 2.5rem; color: blue;'
            delt.style.cssText = 'height: 95%; width: 30%; border: .1rem solid rgb(0, 138, 244); display: flex; justify-content: center; align-items: center; cursor: pointer; font-size: 2.3rem; color: red;'
    
            done.setAttribute('class','fa-solid fa-square-check');
            edit.setAttribute('class','fa-solid fa-pen-to-square');
            delt.setAttribute('class','fa-solid fa-trash');

            //When someone clicks on done button
            function onClickOnDone() {
                listOfTask.style.textDecoration = 'line-through';
            }
            done.addEventListener('click',onClickOnDone);



            //When someone clicks on edit
            function onClickOnEdit() {
                if(listOfTask.style.textDecoration==='line-through') {
                    alert(`Can't modify a task which is already done`);
                }
                else {
                    listOfTask.readOnly = false;
                    listOfTask.addEventListener('input',function() {
                        this.value = this.value.toUpperCase();
                    });
                }
            }
            edit.addEventListener('click',onClickOnEdit);



            //When someone clicks on delete
            function onClickOnDelete() {
                task.remove();
                count--;
            }
            delt.addEventListener('click',onClickOnDelete);
        }
        else {
            alert('You can add maximum 10 tasks a day :)');
        }
    }
    else {
        alert(`Can't add empty task :)`);
    }
}