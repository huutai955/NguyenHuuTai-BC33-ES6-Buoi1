let colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender"
    , "celadon", "saffron", "fuschia", "cinnabar"];


let renderBtn = (colorList) => {
    let output = '';
    for (let index = 0; index < colorList.length; index++) {
        output += `
        <button class="color-button ${colorList[index]}" onclick="changeColor('${colorList[index]}')"></button>
        `
    }
    document.getElementById("colorContainer").innerHTML = output;
}

renderBtn(colorList);

let changeColor = (color) => {
    document.querySelector(".house").classList = `house ${color}`;
    let btnActive = document.querySelectorAll("button");
    for (let index = 0; index < colorList.length; index++) {
        if(colorList[index] == color) {
            btnActive[index].classList = `color-button ${color} active`
        }else {
            btnActive[index].classList = `color-button ${colorList[index]}`
        }
    }
}
