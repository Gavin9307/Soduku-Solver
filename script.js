const boxes = document.querySelectorAll(".box");
console.log(boxes.length)

boxes.forEach( (box) => {
    box.maxLength = "1";
});

boxes.forEach( (box,index,array) => {
    box.addEventListener('input',(e)=>{
        if(e.target.value !== ""){
            if(index < array.length -1){
                array[index+1].focus();
            }
        }
    })
});