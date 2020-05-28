// pulls container div
let $organizer = $("#organizer");
// prepends button with function to organizer div 
let $button = $('<button>Click Me: Objective 1</button>').attr({ id: "btnAlert", class: "btn btn-primary my-1" })
$button.click(function () {
    alert('Nice Message')
})
$organizer.prepend($button);

//adds click function alerting on #textSubmit value
$('#button2').click(function (e) {
    let $textSubmit = $('#textSubmit').val();
    alert($textSubmit);
});

// Change box color to color red on mouseenter.  Returns to original color when mouse leaves
let $box = $('#box')
$box.mouseenter(function () {
    $box.css("background-color", 'red')
})
$box.mouseleave(function () {
    $box.css('background-color', '')
});

// Add p to organizer before #listContainer that changes color when clicked
let $addP = $('<p>').attr({ class: "mb-3 w-50" }).text('Objective 4: This Paragraph changes to a random color when you click on it')

$addP.click(function () {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $addP.css('color', randomColor)
});

$addP.insertBefore('#listContainer')

// Add button after $addP that on click adds a span with my name to an empty div
let $buttonName = $('<button>').attr({ class: 'btn btn-primary' }).text('Click Me: Objective 5');
let $divName = $('<div>').attr({
    class: 'my-3 w-50',
    id: 'divName'
})
$buttonName.click(function () {
    let $span = $('<span>').attr({ class: "mr-3" }).text('Mike Baumgarten')
    $divName.append($span);
    $buttonName.attr("disabled", true);
});
$buttonName.insertAfter($addP);
$divName.insertAfter($buttonName);

// Creates an array named friends with a list of names 
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
];

let $buttonList = $('#buttonList');
let $list = $('#list');

$buttonList.click(function () {
    friends.forEach(friend => {
        let $listItem = $('<li>').attr({class:'list-group-item w-25'}).text(friend);
        $list.append($listItem);
    });
    $buttonList.attr("disabled",true);
});