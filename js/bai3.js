let str = document.querySelector(".heading").innerHTML;
let arrStr = [...str];

let renderStr = (arr) => {
    let output = '';
    for (index = 0; index < arr.length; index++) {
        output += `
            <span>${arr[index]}</span>
        `;
    }
    document.querySelector(".heading").innerHTML = output;
    return output;
}

renderStr(arrStr);
