let name = "";
let streak = 0;


$(document).ready( function() {
    console.log("Ready!");

    //event listeners for buttons
    var buttons = document.querySelectorAll('.logo')

    buttons.forEach(element => {
        element.addEventListener('click', function() {
            document.location.href = 'move.html';
        })
    });

    document.getElementsByClassName('smallprofilepic')[0].addEventListener('click', function() {
        document.location.href = 'profile.html'
    })
    document.getElementById('plus').addEventListener('click', function() {
        var extras = document.querySelectorAll('.rest')
        extras.forEach(element => {
            element.classList.toggle('workout_label');
        });
    })

    //event listener for dropdown menu
    document.getElementById('dropbtn').addEventListener('click', function() {
        if (document.getElementById("menu").style.display == 'block')
            document.getElementById("menu").style.display='none';
        else 
            document.getElementById("menu").style.display='block';
    })

    //allows clicking anywhere on page to exit dropdown menu
    window.onclick = function(event) {
        if (!event.target.matches('#bars') && !event.target.matches('#dropbtn')) {
            if (document.getElementById("menu").style.display == 'block')
                document.getElementById("menu").style.display='none';
        }
    }

    //Update welcome message text based on user data
    document.getElementById('streak_msg').textContent = streak;
    document.getElementById('welcome_msg').textContent = document.getElementById('welcome_msg').textContent + name;

});

