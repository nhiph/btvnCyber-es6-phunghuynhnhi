const tinhTrungBinh = (...diems) => {
    if (!diems.length) {
        return 'Cannot find average'
    }
    let total = 0;  
    for(const num of diems)
    {
        total +=num;
        n= diems.length;
    }
    return total/n;
}

document.getElementById("btnKhoi1").onclick = () => {
    let diems = [];
    diems[0] = parseFloat(document.getElementById("inpToan").value);
    diems[1] = parseFloat(document.getElementById("inpLy").value);
    diems[2] = parseFloat(document.getElementById("inpHoa").value);
    let dtb1 = tinhTrungBinh(...diems);
    console.log(diems);
    console.log(dtb1);
    document.getElementById("tbKhoi1").innerHTML = dtb1;
}

document.getElementById("btnKhoi2").onclick = () => {
    let diems = [];
    diems[0] = parseFloat(document.getElementById("inpVan").value);
    diems[1] = parseFloat(document.getElementById("inpSu").value);
    diems[2] = parseFloat(document.getElementById("inpDia").value);
    diems[3] = parseFloat(document.getElementById("inpEnglish").value);
    let dtb2 = tinhTrungBinh(...diems);
    document.getElementById("tbKhoi2").innerHTML = dtb2;
}