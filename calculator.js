let outputscreen = document.getElementById("output_screen");

// create function for display()

function display(num){
    outputscreen.value +=num;
}

// create function for Calculate()
function Calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("invalid")
    }
}

//create function for Clear()

function Clear(){
    outputscreen.value=""
}

//create function for Delete()

function Delete(){
    outputscreen.value =outputscreen.value.slice(0,-1)
}