const arr = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

function unicNum(arr, arr2) {
    let res = [];
    let cm = arr.slice(0);
    for(let i = 0; i < cm.length; i++){
      if(res.includes(cm[i])) continue;
      delete cm[i]
      if (cm.includes(arr[i]) && arr2.includes(arr[i])) {
          let cm2 = arr2.slice(0);
          delete cm2[cm2.indexOf(arr[i])]
          if(cm2.includes(arr[i])) res.push(arr[i])
      }
    }
    return res
  }
  
console.log(unicNum(arr, arr2));


// ~30-40 минут