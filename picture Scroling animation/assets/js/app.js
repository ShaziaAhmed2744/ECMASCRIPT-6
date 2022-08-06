


const box = document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes() {
const triggerBottom = window.innerHeight / 5 * 4 


boxes.forEach(box => {
    const boxTop = box.getBouningClientRect().top


   
 if(boxTop < triggerBottom) {
    box.classList.add('show')
    } else {
        box.classList.remove('show')
    }

    
})
 }

