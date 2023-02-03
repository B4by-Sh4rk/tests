const numb = 100;

function simpleNumb(numb) {
    if (numb===1)  {
        return 'число не является простым';
      }
      else if(numb === 2)  {
        return 'простое число';
      } else   {
        for(var x = 2; x < numb; x++)  {
          if(numb % x === 0) {
            return 'число не является простым';
          }
        }
        return 'простое число';  
      }
}

console.log(simpleNumb(numb));

// ~10-15 минут