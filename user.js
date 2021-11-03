var g = 10; //Сколько элемен. должны получить или хотим
var fibonachi = [0, 1]; //Первые две последовательности фибоначчи
for (p = 2; i < g; i ++) { 

    fibonachi[p] = fibonachi[p-1] + fibonachi[p-2];

}
console.log(fibonachi.slice(0,n)); //slice-это отрезание от массива первые m эелементов, если g < 2
// 
function solution(str) {
    let chars = new Set(str),
         wasOdd = false;
    for(let char of chars)
        if(str.match(new RegExp(char, 'gi')).length % 2)
            if(wasOdd)
                 return false;
            else
                wasOdd = true;
    return true;
}