//Рассчет налоговой ставки
const incomeTaxRate = 0.18;// %
const militaryTaxRate = 0.015 //%
let income = prompt("Please, enter ypur income salary: ");
income = parseFloat(income);
console.log (`Your income salary is: $${income}`);
let incomeTax = income * incomeTaxRate;
console.log (`Your Tax Rate is: $${incomeTax}`)
let militaryTax = militaryTaxRate * income;
console.log (`Your military tax is: $${militaryTax}`)
let afterTax = income - (incomeTax+militaryTax);
console.log (`Your aftertax is: $${afterTax}`);
//Рассчет налоговой ставки

//Индекс массы тела
var retVal = confirm("Do you want to continue ?");
console.clear();
if( retVal == true ) {
    let mass = +prompt ("Enter your weight (kilogramms):");
    let height  = +prompt ("Enter your height (meters):")
    let index = mass / (height ** 2);
    console.log (`Index of your body is: ${index}`);
//Индекс массы тела
    
//Сторона квадрата
    var retVal = confirm("Do you want to continue ?");
    console.clear();
    if( retVal == true ) {
        let squareSide = +prompt ('Please enter the side of square(in santimeters):');
        let squareS = squareSide * 4;
        console.log (`The square area is is ${squareS} sm`);
//Сторона квадрата

//Объем куба
        var retVal = confirm("Do you want to continue ?");
        console.clear();
        if( retVal == true ) {
            let cubeSide = +prompt ('Please enter the side of cube(in santimeters):');
            let cubeSideS = cubeSide * cubeSide * cubeSide;
            let cubeAmount = 6 * cubeSide * cubeSide;
            console.log (`The cube side area is is ${cubeSideS} sm, and cube amount is ${cubeAmount}`);
//Объем куба

//Окружность и площадь круга
            var retVal = confirm("Do you want to continue ?");
            console.clear();
            if( retVal == true ) {
                const Pi = 3.14;
                let Radius = +prompt ("Please enter the R:");
                let Length = Radius * 2;
                let circleLength = Length * Pi;
                let S = Pi * (Radius * Radius);
                console.log (`Circle L = ${circleLength} and circle S = ${S}`);
//Окружность и площадь круга

//Плотность
                var retVal = confirm("Do you want to continue ?");
                console.clear();
                if( retVal == true ) {
                    let M = +prompt ("Enter the mass of body:");
                    let V = +prompt ("Enter the weight:");
                    let density = M / V;    
                    console.log (`The density of body is: ${density}`);
//Плотность

// Плотность населения
                    var retVal = confirm("Do you want to continue ?");
                    console.clear();
                    if( retVal == true ) {
                        let N = +prompt ("Enter the amount of citizens:");
                        let Sitizens = +prompt ("Enter the S of country:")
                        let P = N / Sitizens;
                        console.log (`The population density area of country is: ${P}`);
// Плотность населения

// Длина гипотенузы
                        var retVal = confirm("Do you want to continue ?");
                        console.clear();
                        if( retVal == true ) {
                            let firstCathetus = +prompt ("Enter the first cathetus:");
                            let secondCathetus = +prompt ("Enter the second cathetus:")
                            let squareHypotenuse = (firstCathetus * firstCathetus) + (secondCathetus * secondCathetus);
                            let Hypotenuse =  Math.sqrt(squareHypotenuse);
                            console.log (`The Hypotenuse is: ${Hypotenuse}`);
// Длина гипотенузы

//Найти Y
                            var retVal = confirm("Do you want to continue ?");
                            console.clear();
                            if( retVal == true ) {
                                let a = prompt ('Enter the "a"');
                                let b = (a * a) + 10;
                                let c = (a * a) + 1;
                                let d = Math.sqrt(c);
                                let y = b / d;
                                console.log (`The "y" is: ${y}`);
                                alert ("Thanks for completed tasks")
                                console.clear();
                            }
//Найти Y
                        }

                        else {
                            alert ("Good Buye!");
                            console.clear();
                        }

                    }

                    else {
                        alert ("Good Buye!");
                        console.clear();
                    }

                }

                else {
                    alert ("Good Buye!")
                    console.clear();
                }

            }

            else {
                alert ("Good Buye!");
                console.clear();
            }

        }

        else {
            alert ("Good Buye!");
            console.clear();
        }

    }

    else {
        alert ("Good Buye!");
        console.clear();
    }

} else {
    alert ("Good Buye!");
    console.clear();
} 
