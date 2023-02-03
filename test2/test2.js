const numb = 41.7;

function numbToFive(numb) {
    const Five = numb % 5;
    if (Five === 0) {
        return numb;
    } else if (Five >= 2.5) {
        return (numb-Five+5);
    } else if (Five < 2.5){
        return (numb-Five)}
    }

console.log(numbToFive(numb));

// ~10-15 минут