console.log('workin')


const updateList= () => {

    let newItem = document.createElement('li');
    let userItem = document.getElementById('user-input').value;
    let newText = document.createTextNode(userItem);

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<button onclick="deleteItem">'+ 'Delete' + '<button>';

    

    newItem.appendChild(newText);

    let position = document.getElementsByTagName('ul')[0];

    // add to list with delete button
    position.appendChild(newItem);
    newItem.appendChild(deleteButton)

    // clear text box
    document.getElementById("user-input").value = "";

    

}

