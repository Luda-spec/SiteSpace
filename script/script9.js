var hideButtons = document.querySelectorAll('.hideButton');

hideButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        var textElement = document.getElementById('text' + (index + 1));

        if (textElement.style.display === 'none') {
        textElement.style.display = 'block';
        } else {
        textElement.style.display = 'none';
        }
    });
});



var hideSelfButton = document.getElementById('Button');

hideSelfButton.addEventListener('click', function() {
    hideSelfButton.style.display = 'none';
});


const toggleMenuButton = document.getElementById('MenuButton');
const menu = document.getElementById('menu');

toggleMenuButton.addEventListener('click', function() {
    menu.classList.toggle('closed');
});


var removeButtons = document.querySelectorAll('.remove-button');

removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var pane = button.closest('.pane');
        if (pane) {
            pane.parentNode.removeChild(pane);
        }
    });
});