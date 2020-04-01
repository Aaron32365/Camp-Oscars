var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);




async function confettii(){
    event.preventDefault()
    changeText("Drawing and Painting","Alyssa Macias","Next!")
    confetti.render();
     setTimeout(() => {
        confetti.clear()
        changeText("Clothing and Accessories","Caramel","Next!")
    }, 5000); 
    setTimeout(() => {
    }, 10000);
}

function changeText(header, name, button){
    $("#task").text(header)
    $("#name").text(name)
    $("#revealBtn").text(button)
}

function start(){
    var job = $("#task").text()
    var person = $("#name").text()
    var joblist = []
    var people = []
}//create a reveal button next to the next button, use the next button to switch to the next joblist item 