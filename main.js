var words = [
    "alphabet", "marvellous", "hello", "prismacolor", "Singapore"
]
var secretword= ""
var currentguess = ""
var guessesleft = 10
var secretarray = []
var userguessarray = []
var guesseslefttext = document.getElementById("guessremaining")

var currentguesstext = document.getElementById("currentanswer")

function setup(){
    guessesleft=10
    secretarray=[]
    userguessarray=[]
    var count = words.length
var randomindex = Math.floor(Math.random() * count)
 secretword = words[randomindex]
 currentguess= ""
    
    for (let index = 0; index < secretword.length; index++) {
        currentguess = currentguess + " _ "
        secretarray[index] = secretword[index]
        userguessarray[index] = " _ "
    
    
    }
    guesseslefttext.innerText = guessesleft + " lives left"
    currentguesstext.innerText = currentguess

}
setup()


console.log(secretarray)
function checkGuess(guess) {
    var found= false
    for (let index = 0; index < secretword.length; index++) {
        if (guess == secretword[index]) {
            userguessarray[index] = guess
            found=true
        }
    }
    return found
}

var userguessinput = document.getElementById("userguess")
userguessinput.onkeydown=function(e){
    if(e.keyCode==13){
        playgame()
    }
}
function playgame() {
    if(userguessinput.value.trim()==""){
        return
    }
    if(checkGuess(userguessinput.value.toLowerCase().trim())){
        currentguesstext.innerText = listtoword()
        if(listtoword()==secretword){
            alert ("Congratulations! You won!")
            setup()
        }
        
    }else{
        guessesleft=guessesleft-1
        guesseslefttext.innerText = guessesleft + " lives left"
    }
    userguessinput.value= ""
    if(guessesleft==0){
        alert("You've lost!The right answer was "+ secretword)
        setup()
    }
    
    
}
function listtoword(){
    var word= ""
    for (let index = 0; index <userguessarray.length; index++) {
        word= word+userguessarray[index]
        
    }
    return word
}




