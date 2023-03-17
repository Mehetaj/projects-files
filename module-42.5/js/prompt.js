const clicked = () => {
    let person = prompt("Please enter your name");
    if (person != Number) {
    const added  =  parseInt(person) + 200;
    alert('Your Output : ' +  added)
    }
}

const locate =() => {
    let comf = confirm('Are you want to see location')
    if (comf == true) {
        console.log(1);
    } else{
        console.log(0);
    }
}