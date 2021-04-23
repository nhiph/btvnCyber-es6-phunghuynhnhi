const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

const changeColor = color => document.getElementById("house").className += ` ${color}`;

const renderColor = (colorList) => {
    let content = "";
    colorList.map((color, index) => {
        content+= `<button class="color-button ${color}" onclick="changeColor('${color}')"></button>`;
    });
    document.getElementById("colorContainer").innerHTML = content;
    console.log(color);
}

renderColor(colorList);

