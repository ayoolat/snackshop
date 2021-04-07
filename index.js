let hoverBoxes = document.getElementsByClassName('hover-box')
console.log(hoverBoxes)
function hovers(){
    console.log('hi')
    if(this.style.display == 'block'){
        this.style.display == 'none'
    }
    // hoverBoxes.forEach(element => {
    //     if(element.style.display == 'block'){
    //         element.style.display == 'none'
    //     }
    // });
}