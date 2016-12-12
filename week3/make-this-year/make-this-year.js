console.log('hellow');
function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.querySelector('.dots').innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

// function reverseLetterByLetter(destination, message, speed){
//     var i = message.length;
//     var interval = setInterval(function(){
//         document.querySelector('.destination').innerHTML += message.charAt(i);
//         i--;
//         if (i > message.length){
//             clearInterval(interval);
//         }
//     }, speed);
// }



printLetterByLetter("p", "a web app", 100);
// reverseLetterByLetter("p", "Hello world, bonjour le monde.", 100);
