let mode = "light";

function toggleMode(mode) {
    let modeLocal;

    if (mode === "light") {
        modeLocal = "dark";
    } else {
        modeLocal = "light";
    }

    return modeLocal;
}

console.log("Novo modo:", toggleMode(mode));
console.log("Modo global continua:", mode);