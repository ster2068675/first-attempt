var images =    [["https://upload.wikimedia.org/wikipedia/commons/5/57/Abyssinian_cat_-_Patricia.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/American_bobtail_2.jpg/640px-American_bobtail_2.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/0/09/Bengal_-_20150402_22h18_%2810049%29.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Birman2.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/6/68/Bombay_Katzen_of_Blue_Sinfonie.JPG"],
                ["https://upload.wikimedia.org/wikipedia/commons/b/be/A_two_years_old_British_Shorthair_cat.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/1/1b/British_burmese_cat_-_London_1.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/8/80/Chartreux-cat-edouard-marie.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/0/02/Devon_Rex_Yoshimi.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/3/3c/Bissel.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/7/7f/Himalayan_Male_Cat_Cosmo_51x84x3456_2012-2-7_by_A_Silverstein.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/5/52/GeorgeManxProfile.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/6/6e/Norskskogkatt_Evita_3.JPG"],
                ["https://upload.wikimedia.org/wikipedia/commons/8/87/Lavender_Chocolate_Ocicats.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/9/94/OrientalShorthairAndSiameses.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/5/54/Maine_Coon_look.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Grouchy_Persian_cat_%28Unsplash%29.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/7/72/Russian_Blue_Cat_American_type.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/7/78/CustardBlanket.jpg"],
                ["https://upload.wikimedia.org/wikipedia/commons/5/56/Cat_Sphynx._img_006.jpg"]];

var ans =       [["Abyssinian"],
                ["American Bob Tail"],
                ["Bengal"],
                ["Birman"],
                ["Bombay"],
                ["British Shorthair"],
                ["Burmese"],
                ["Chartreux"],
                ["Devon Rex"],
                ["Exotic Shorthair"],
                ["Himalayan"],
                ["Manx"],
                ["Norwegian Forest"],
                ["Ocicat"],
                ["Oriental Shorthair"],
                ["Maine Coon"],
                ["Persian"],
                ["Russian Blue"],
                ["Scottish Fold"],
                ["Sphynx"]];

var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

//game running variables
var score = 0;
var count = 0;
var correctSoFar = 0;
var newQ = true;

//creating display elements
var imageContainer = document.getElementById("image");
var startImg = document.createElement("img");

//initalizing correct ans & next Q buttons
var nextQue = document.getElementById('nextQ');
var corrAns = document.getElementById('showAns');

//button event listeners 
nextQue.addEventListener("click", updateQ, false);
corrAns.addEventListener("click", showAns, false);


//helper functions
function randomInt(n) {
    return Math.floor(Math.random() * n);
}
function shuffle(arr) {
    for (var i = 0; i < arr.length; i++) {
        var j = randomInt(arr.length);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

//Main function that sets up page for initial use
function run() {
    setScore();
    //trying to avoid duplicates upon reload
    shuffle(index);
    console.log("Shuffled Indeces: " + index);

    //inital launch uses first index (count=0)
    imageInit(count);
    populateButtons(index[count]);

}

//populates container with a random image when page is loaded 
function imageInit(int) {

    startImg.src = images[index[int]];
    //modifying images to size that works best for most imgs (look into dynamic sizing)
    startImg.width = 500;
    startImg.height = 400;
    //setting image to display
    imageContainer.appendChild(startImg);
}

//populates answer choices with correct answer and 3 other random choices
function populateButtons(n) {
    console.log("Correct starting index: " + n);
    var correct = ans[n];
    //lots of testing
    console.log("Correct Ans: " + correct);

    var choices = [];
    choices.push(correct);

    console.log("Starting Choices: " + choices);

    //adding random answers other than the correct choice
    for (var i = 1; i < 4; i++) { 
        if( n+i < 19)  
        {
            choices.push(ans[index[n + i]]);
        }
        else{
            choices.push(ans[index[randomInt(20)]]);
        }
    }

    console.log("Final Choices: " + choices);
    shuffle(choices);
    console.log("Shuffled Choices: " + choices);

    //initializing button elements and populating with shuffled array
    let btn1 = document.getElementById('ans1');
    let btn2 = document.getElementById('ans2');
    let btn3 = document.getElementById('ans3');
    let btn4 = document.getElementById('ans4');
    btn1.innerHTML = choices[0];
    btn2.innerHTML = choices[1];
    btn3.innerHTML = choices[2];
    btn4.innerHTML = choices[3];

    //initializing eventListeners to check for correct ans
    btn1.onclick = function () { checkAns(choices[0]) };
    btn2.onclick = function () { checkAns(choices[1]) };
    btn3.onclick = function () { checkAns(choices[2]) };
    btn4.onclick = function () { checkAns(choices[3]) };
}

//main game logic to drive scores and count
function checkAns(answer) {
    //window.alert("You selected " + answer);
    var correct = answer == ans[index[count]];
    console.log(correct);

    if (correct && newQ) {
        score += 10;
        correctSoFar++;
        newQ = false;
        console.log("correct choice");
    }
    else if(correct){
        //just so it stays on the screen until the player decides to move on
    }
    else {
        console.log("wrong choice?");
        window.alert("Wrong Answer! The correct choice was " + ans[index[count]]);
        updateQ();
    }
    setScore();
}

//fills score card with initalized variables 
function setScore() {
    let scoreBox = document.getElementById('score');
    scoreBox.innerHTML = ("Score: " + score + "<br>"
        + "Question: " + (count + 1) + "/20" + "<br>"
        + "Correct So Far: " + correctSoFar + "<br>"
        + "Accuracy: " + parseFloat(correctSoFar / (count + 1)).toFixed(2) + "%");
}

//clears old img and populates using next index in shuffled array 
function updateQ() {
    if (count < 19) {
        count++;
        newQ = true;
        console.log(count);
        window.startImg.src = "";
        window.imageContainer.removeChild(startImg);
        imageInit(count);
        populateButtons(index[count]);
    }
    else {
        window.alert("There's no more kitties! Refresh the page and try again!");
    }
    setScore();
}

function showAns() {
    window.alert("This kitty is a(n) " + ans[index[count]] + "!");
}

/*nextQue.addEventListener("keyup", function(event) {       tried fixing enter key to next question rather than resubmitting button push
    // Number 13 is the "Enter" key on the keyboard
    if (event.key == 'Enter') {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("nextQ").click();
    }
  }, false);*/

window.addEventListener("load", run, false);



