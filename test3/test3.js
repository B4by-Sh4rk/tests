const numb = 593;
const str = numb.toString();

function computer(numb) {
    if(numb[numb.length - 1] == 1){
        return numb + ' компьютер';
    } else if ( numb[numb.length - 1] > 1 && numb[numb.length - 1] < 5) {
        return numb + ' компьютера';
    }else if ( numb[numb.length - 1] >= 5 && numb[numb.length - 1]) {
        return numb + ' компьютеров';
    }else if ( numb[numb.length - 1] == 0) {
        return numb + ' компьютеров';
    }
}

console.log(computer(str));

// ~10-15 минут