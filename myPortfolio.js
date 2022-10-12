const playButton = document.querySelector('#spanbutton')
const appear = document.querySelector('#addelement')

playButton.addEventListener('click', addelement)

function addelement(){
    appear.innerText = "hello world!"
    appear.classList.add("printhello")
    playButton.removeEventListener('click',addelement)
    playButton.addEventListener('click',remove)
}


function remove(){
    appear.innerText = ""
    playButton.removeEventListener('click',remove)
    playButton.addEventListener('click',addelement)

}

// function update(){
//     addelement()
// }



