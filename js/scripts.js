function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) { return 'Nieprawidłowe dane.'; }
    return a * h / 2;
}

console.log(getTriangleArea(10, 6));

var firstTriangleArea = getTriangleArea(4, 2);
var secondTriangleArea = getTriangleArea(12, 8);
var thirdTriangleArea = getTriangleArea(20, 10);