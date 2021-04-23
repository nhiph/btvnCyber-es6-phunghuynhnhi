const getHover = () => {
    let content = document.getElementById("hover").textContent;
    const slicedText = [...content];
    console.log(slicedText);
    let newContent ="";
    slicedText.map((letter, index) => {
        newContent += `
            <span>${letter}</span>
        `
    })
    document.getElementById("hover").innerHTML = newContent;
}
getHover();