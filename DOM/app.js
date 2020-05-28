let organizer = document.getElementById('organizer');
let addButton = document.createElement('button');
// add HTML to button
addButton.textContent = "Click Me: Objective 1";
// attach classname to button (used to keep button on it's own line)
addButton.className = "btn btn-primary my-1";

// Alert Nice message on addButton click

addButton.addEventListener("click", function () {
    alert("Nice Message");
});
// add button to the top of the body
organizer.prepend(addButton);

// Pull button 2 and textSubmit
let button2 = document.getElementById('button2');
let text = document.getElementById('textSubmit');

// add event listener button that alerts on click with textSubmit value
button2.addEventListener("click", function () {
    alert(text.value);
});
// Pulls element with ID box
let box = document.getElementById('box');
// adds mouse enter listener and changes background to red
box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = 'red';
});
// adds event listener to remove background color when mouse leaves
box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = null;
});
// creates p that changes color when you click on it and adds it to the body 
let addP = document.createElement('p');
addP.className = "mb-3 w-50"
addP.innerText = 'Objective 4: This Paragraph changes to a random color when you click on it';
addP.addEventListener('click', function () {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    addP.style.color = randomColor;
});

// create a button and div.  when button is clicked insert a span with your name into the div
let buttonName = document.createElement('button');
buttonName.className = 'btn btn-primary';
buttonName.textContent = 'Click Me: Objective 5'
let divName = document.createElement('div');
divName.id = 'divName'
divName.className = 'my-3 w-50'
buttonName.addEventListener('click', function () {
    let span = document.createElement('span');
    span.textContent = 'Mike Baumgarten';
    span.className = "mr-3"
    divName.appendChild(span);
    // disables button after first click (only wanted one span to show up)
    buttonName.disabled = 'true';
});

// pulls div that contains button and list
let listContainer = document.getElementById('listContainer');

let buttonList = document.getElementById('buttonList');
let list = document.getElementById('list');
let friends = [
    'Nikki',
    'Brian',
    'Matt',
    'Joe',
    'Richard',
    'Mei',
    'Jordan',
    'Tony',
    'Janelle',
    'Jeff'
]
buttonList.addEventListener('click', function () {
    friends.forEach(friend => {
        let listItem = document.createElement('li')
        listItem.className = 'list-group-item w-25';
        listItem.textContent = friend;
        list.appendChild(listItem)

    })
    // disables button after first click (only wanted one list of names to show up)
    buttonList.disabled = 'true';
});
// inserts div, button, and paragraph in a specific order before list container
organizer.insertBefore(divName, listContainer);
organizer.insertBefore(buttonName, divName);
organizer.insertBefore(addP, buttonName);