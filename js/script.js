// index.js

function calculateArea() {
    var height = parseFloat(document.getElementById("input-height").value);
    var base = parseFloat(document.getElementById("input-base").value);
    var area = 0.5 * height * base;
    var resultArea = "Area = 1/2 x " + height + " x " + base + " = " + area;
    document.getElementById("area-result").innerHTML = resultArea;
}

function resetArea() {
    document.getElementById("input-height").value = "";
    document.getElementById("input-base").value = "";
    document.getElementById("area-result").innerHTML = "";
}

function calculatePerimeter() {
    var sideA = parseFloat(document.getElementById("input-side-a").value);
    var sideB = parseFloat(document.getElementById("input-side-b").value);
    var sideC = parseFloat(document.getElementById("input-side-c").value);
    var perimeter = sideA + sideB + sideC;
    var resultPerimeter = "Perimeter = " + sideA + " + " + sideB + " + " + sideC + " = " + perimeter;
    document.getElementById("perimeter-result").innerHTML = resultPerimeter;
}

function resetPerimeter() {
    document.getElementById("input-side-a").value = "";
    document.getElementById("input-side-b").value = "";
    document.getElementById("input-side-c").value = "";
    document.getElementById("perimeter-result").innerHTML = "";
}
