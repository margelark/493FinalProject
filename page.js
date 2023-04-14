let name = "";
let streak = 0;

let workoutTitle = "Workout";
let Day = "1";
let Month = "0";
let Year = "2023";
let Time = "12:00 AM";
let workoutDay;
let weekday;

const workoutList = ['15glute.html', 
                    '30abs.html', 
                    '30arms.html', 
                    '30cardio.html', 
                    '30hiit.html', 
                    '30legs.html', 
                    '45abs.html', 
                    '45arms.html', 
                    '45cardio.html',
                    '45legs.html'];


$(document).ready( function() {
    console.log(document.getElementById('scroll').style.display);
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

    document.getElementById('random').addEventListener('click', function() {
        var url = workoutList[Math.floor(Math.random() * 10)];
        window.open(url, '_blank');
    })

    //event listener for dropdown menu
    document.getElementById('dropbtn').addEventListener('click', function() {
        if (document.getElementById("menu").style.display == 'block')
            document.getElementById("menu").style.display='none';
        else 
            document.getElementById("menu").style.display='block';
    })

    //nav bar links    
    document.getElementById('Schedule').addEventListener('click', function() {
        document.getElementById('scroll').style.display= 'none';
        document.getElementById('schedule').style.display='block';
        document.getElementById('goalPage').style.display='none';
    })

    document.getElementById('Home').addEventListener('click', function() {
        document.getElementById('schedule').style.display= 'none';
        document.getElementById('scroll').style.display='block';
        document.getElementById('goalPage').style.display='none';

    })
    
    document.getElementById('Goal').addEventListener('click', function() {
        document.getElementById('schedule').style.display= 'none';
        document.getElementById('scroll').style.display='none';
        document.getElementById('goalPage').style.display='block';

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

    //js for Schedule page
    document.getElementById("addworkout").addEventListener("click", click);

    function click() {
        Month = $("#month").val();
        Day = $("#day").val();
        Year = $("#year").val();
        Time = $("#time").val();

        console.log(Year);
        console.log(Month);
        console.log(Day);

        workoutDay = new Date(Year, Month, Day);
        console.log(workoutDay);
        weekday = workoutDay.getDay();
        console.log(weekday);

        document.getElementById(weekday).innerHTML = Time + " " + workoutTitle;
        document.getElementById(weekday + 'a').innerHTML = Time + " " + workoutTitle;
        
        document.getElementById('popup').style.visibility = 'visible';
    }

    // maintaining goals
    maintain(); // HERE
    
    function maintain() {
        var i =0;
        
        containers = document.querySelectorAll(".container");
        compList = document.querySelectorAll(".complete");
        goalsList = document.querySelectorAll(".line");
        delList = document.querySelectorAll(".del");
        
        containers.forEach(element => {
            compList[i].addEventListener('click', function() {
                if (compClick()) {
                    element.remove();
                }
            });
            
            goalsList[i].addEventListener('click', goalclick);
            
            delList[i].addEventListener('click', function() {
                if (delClick()) {
                    element.remove();
                }
            });
            
            ++i;
        });
    }
    
    // editing goals
    function goalclick() {
        var oldgoal = this.getElementsByClassName("line").innerHTML;
        let editgoal = prompt("If you would like to edit the current goal please alter it here", oldgoal);
        
        if (editgoal != null && editgoal != "") {
            this.innerHTML = editgoal;
            //maintain(); // HERE
        }
    }
    
    // deleting
    function delClick() {
        if (confirm("Are you sure you wish to delete this item?")) {
            return true;
        }
        return false;
    }
    
    // completing
    function compClick() {
        if (confirm("Have you completed this goal?")) {
            alert("Congratulations on completing your goal!");
            return true;
        }
        return false;
    }
    
    // adding
    document.getElementById("addgoal").addEventListener("click", add);
    function add() {
        let input = prompt("Please enter your new goal:", "Goal");
        if (input == null || input == "") {
            alert("No goal entered");
            
        } else {
            // actually display the text
            document.getElementById("new").insertAdjacentHTML("beforeend",
                "<div class='container'><div class='complete'> </div> <div class='line'>" + input + "</div><div class='del'>X</div></div>");

            maintain(); // HERE
        }
    }

});
