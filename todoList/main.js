const toDoList = []
function addTodoList (){
    let toDo = document.getElementById('input-tdL').value
    if(toDo){
        toDoList.push({
            name1: toDo,
            status1: false
        })
        document.getElementById('input-tdL').value = ''
        console.log(toDoList)
    }
    renderTodoList()
}
function renderTodoList(){
    let toDo = `<tr>
                <th></th>
                <th></th>
            </tr>`
    toDoList.map((value,index)=>{
        toDo += `
            <tr>
                <td><input class="checkbox-complete" type="checkbox" onclick="removeList(${index})"></td>
                <td>${value.status1 ? "<s>" + value.name1 + "</s>" : value.name1}</td>
            </tr>`
    })
    document.getElementById('table').innerHTML = toDo
}
function removeList(index){
    toDoList[index] ={
        name1: toDoList[index].name1,
        status1: !toDoList[index].status1
    }
    renderTodoList()
}

