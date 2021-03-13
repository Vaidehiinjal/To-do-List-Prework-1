var listOfActivities=[];

var input =document.getElementById("input");

var input =document.getElementById("todolist");

document.getElementById("button").onclick=click;

function click(){
    listOfActivities.push(input.value);

    console.log(listOfActivities);

    input.value="";

    showList();
}

function showList(){
    toDolist.innerHTML="";

    listOfActivities.forEach(function(current_value, index){

        toDolist.innerHTML+=("<li>"+current_value+"<a onclick='editIteam("+index+")'>edit</a>")
        "<a onclick='editIteam("+index+")'>&times </a></li>";
    })
}

function editIteam(index){
    var newValue=prompt("Please insert your value");

    listOfActivities.splice(index,1,newValue);

    showList();
}

function deleteIteam(index){
    listOfActivities.splice(index,1);

    showList();
}