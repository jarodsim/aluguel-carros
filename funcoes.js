function fatorial(n){
   if (n === 0){
    return 1;
   } else {
     return n * fatorial(n-1);
   }
}

const n = 5;
console.log(fatorial(n))