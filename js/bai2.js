let toan = document.getElementById("inpToan");
let ly = document.getElementById("inpLy");
let hoa = document.getElementById("inpHoa");
let van = document.getElementById("inpVan");
let su = document.getElementById("inpSu");
let dia = document.getElementById("inpDia");
let english = document.getElementById("inpEnglish");


let toTal = (...scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let result = sum / scores.length;
    return result;
}

document.getElementById("btnKhoi1").onclick  = () => {
    document.getElementById("tbKhoi1").innerHTML = toTal(Number(toan.value), Number(ly.value), Number(hoa.value));
}


document.getElementById("btnKhoi2").onclick  = () => {
    document.getElementById("tbKhoi2").innerHTML = toTal(Number(van.value), Number(su.value), Number(dia.value), Number(english.value));
}
