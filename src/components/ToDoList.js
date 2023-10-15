import "../style/ToDoList.css"

// import { InputGroup, InputGroupText,Input } from "reactstrap";
// const inputEl = document.getElementById("input-el")
// const AddBtn = document.getElementById("add-btn")
// const ulEl = document.getElementById("ul-el")


// AddBtn.addEventListener("click",function(){
//     if(inputEl.value === ''){
//         alert("you must write something")
//     }
//     else{
//         addtask()
//     }
//     inputEl.value = ""
//     savetask()
//  }
// )

// function addtask(){
//     let li = document.createElement("li")
//         li.innerHTML = "<i class='fa-sharp fa-solid fa-circle-check'></i>"
//         let p = document.createElement("p")
//         p.innerHTML = inputEl.value
//         li.appendChild(p)
//         // ulEl.appendChild(li)
//         let span = document.createElement("span")
//         span.innerHTML = "\u00d7"
//         li.appendChild(span)
//         ulEl.appendChild(li)
//         li.classList.add("listItem");
// }

// ulEl.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked")
//         savetask()
//     }
//     else if(e.target.tagName ==="SPAN"){
//         e.target.parentElement.remove()
//         savetask()
//     }
// }, false)

// function savetask(){
//     localStorage.setItem("data", ulEl.innerHTML)
// }

// function showtask(){
//     ulEl.innerHTML = localStorage.getItem("data")
// }
// showtask()
// // localStorage.clear()

function Project1(){
    return(
        <div className="to-do-list-bg">
            <div className="container" id="ToDoList">
                 <div className="todo-app">
                     <h2>TO DO LIST</h2>
                     <div className="row">
                         <input id="input-el" type="text" placeholder="Task to be done.."/>
                         <button id="add-btn">ADD</button>
                     </div>
                     <ul id="ul-el"></ul>
                 </div>
            </div> 
        </div>
    )    
}

export default Project1;