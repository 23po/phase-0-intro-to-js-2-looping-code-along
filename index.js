const arr = [];
function writeCards(arr, event) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);

    }
return newarr;
}

function countDown(number) {
while (number > 0) {
     console.log(number);
    number--;
    }
console.log(number);
}
