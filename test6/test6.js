const numb = 5;

function table(numb) {
    if (numb => 0 && numb <= 10){
        for(var i = 1; i <= numb; i++){
                if(numb == 1){
                    console.log(  i);
                }else if(numb == 2){
                    console.log(  i +  '    ' + (i * numb));
                }else if (numb == 3){
                    console.log(  i +   '    ' + i*(eval(numb-1)) +'    ' + (i * numb));
                }else if (numb == 4){
                    console.log(  i +  '    '  + i*(eval(numb-2))+  '    ' + i*(eval(numb-1)) +'    ' + (i * numb));
                }else if (numb == 5){
                    console.log(  i +  '    '  + i*(eval(numb-3))+  '    ' + i*(eval(numb-2))+  '    ' + i*(eval(numb-1)) +'    ' + (i * numb));
                }else if (numb == 6){
                    console.log(  i +  '    '  + i*(eval(numb-4))+'    '  + i*(eval(numb-3))+  '    ' + i*(eval(numb-2))+  '    ' + i*(eval(numb-1)) +'    ' + (i * numb));
                }
                else if (numb == 7){
                    console.log(  i +  '    '  + i*(eval(numb-5))+'    '  + i*(eval(numb-4))+'    '  + i*(eval(numb-3))+  '    ' + i*(eval(numb-2))+  '    ' + i*(eval(numb-1)) +'    ' + (i * numb));
                }
                else if (numb == 8){
                    console.log(  i +  '    '  + i*(eval(numb-6))+  '    '  + i*(eval(numb-5))+'    '  + i*(eval(numb-4)) +  '    '  + i*(eval(numb-3))+  '    ' + i*(eval(numb-2))+  '    ' + i*(eval(numb-1)) +'    ' + (i * numb));
                }
                else if (numb == 9){
                    console.log(  i +  '    '  + i*(eval(numb-7))+  '    '  + i*(eval(numb-6))+  '    '  + i*(eval(numb-5))+'    '  + i*(eval(numb-4)) +  '    '  + i*(eval(numb-3))+  '    ' + i*(eval(numb-2))+  '    ' + i*(eval(numb-1)) +'    ' + (i * numb));
                }
                else if (numb == 10){
                    console.log(  i +  '    '  + i*(eval(numb-8))+  '    '  + i*(eval(numb-7))+  '    '  + i*(eval(numb-6))+'    '  + i*(eval(numb-4)) +  '    '  + i*(eval(numb-3))+  '    ' + i*(eval(numb-2))+  '    ' + i*(eval(numb-1)) +'    ' + (i * numb));
                }
        }
    }else return 'err';
}

console.log(table(numb));

// ~30-40 минут