console.log('workin')


const updateList= () => {

    let newItem = document.createElement('li');
    let userItem = document.getElementById('user-input').value;
    let newText = document.createTextNode(userItem);

    newItem.appendChild(newText);

    let position = document.getElementsByTagName('ul')[0];

    position.appendChild(newItem);

    document.getElementById("user-input").value = "";

}