// BOOLEAN 1

const number = +prompt("Raqam kiriting:");
if (number > 0) {
    alert("Berilgan son musbat");
} else if (number < 0) {
    alert("Kiritilgan son musbat emas");
} else {
    alert("Kiritilgan son 0");
}
//
//
//
//
//
//
//
//
//

// BOOLEAN 2

const a = +prompt("Raqam kiriting:");
if (a < 0) {
    alert("Berilgan son manfiy");
} else if (a > 0) {
    alert("Berilgan son manfiy emas");
} else {
    alert("Berilgan son 0");
}
//
//
//
//
//
//
//
//
//
//
// BOOLEAN 3
const a1 = +prompt("Birinchi raqamni kiriting:");
const b1 = +prompt("Ikkinchi sonni kiriting:");
if (a1 > 2) {
    alert("Birinchi son 2 dan katta");
} else if (a1 < 2) {
    alert("Birinchi son 2 dan kichik");
} else {
    alert("Birinchi kiritilgan son 2");
}

if (b1 < 3) {
    alert("Ikkinchi son 3dan kichik");
} else if (b1 > 3) {
    alert("Ikkinchi son 3 dan katta");
} else {
    alert("Ikkinchi son 3");
}
//
//
//
//
//
//
//
//
// BOOLEAN 4
alert("a<b<c formulasi uchun son kiriting");
const a2 = +prompt("1-sonni kiriting:");
const b2 = +prompt("2-sonni kiriting:");
const c2 = +prompt("3-sonni kiriting:");

if (a2 <= b2 && b2 <= c2) {
    alert("Kiritilgan sonlar berilgan formula uchun to'gri tushadi");
} else {
    alert("Kiritilgan sonlar formula uchun to'gri kelmaydi");
}
//
//
//
//
//
//
//
//
//
//
// BOOLEAN 5
//
const a3 = +prompt("1-sonni kiriting:");
const b3 = +prompt("2-sonni kiriting:");

if ((a3 % 2 == 0 && b3 % 2 == 0) || (a3 % 2 !== 0 && b3 % 2 !== 0)) {
    alert("Rost: A va B sonlarining har ikkalasi ham yoki toq yoki juft son.");
} else {
    alert(
        "Yolg'on: A va B sonlarining har ikkalasi ham yoki toq yoki juft son emas."
    );
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// BOOLEAN 6
//
const a4 = +prompt("1-sonni kiriting");
const b4 = +prompt("2-sonni kiriting");
const c4 = +prompt("3-sonni kiriting");

if (a4 > 0 || b4 > 0 || c4 > 0) {
    alert("Rost: hech bo'lmasa bitta son musbat");
} else {
    alert("Yolg'on: hech qaysi son musbat emas");
}

//BOOLEAN 7

const number1 = +prompt("Uch xonali son kiriting:");

if (number1 >= 100 && number1 <= 999) {
    let a5 = Math.floor(number1 / 100); // Yuzlik
    let b5 = Math.floor((number1 % 100) / 10); // O'nlik
    let c5 = number1 % 10; // Birlik

    if (a5 !== b5 && b5 !== c5 && a5 !== c5) {
        alert("Rost: Ushbu sonning barcha raqamlari har xil.");
    } else {
        alert("Yolg'on: Ushbu sonning barcha raqamlari har xil emas.");
    }
} else {
    alert("Kiritilgan son uch xonali emas.");
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//BOOLEAN 8
const a6 = +prompt("1-sonni kiriting");
const b6 = +prompt("2-sonni kiriting");
const c6 = +prompt("3-sonni kiriting");

if (a6 == b6 || b6 == c6 || a6 == c6) {
    alert("Berilgan uchta sonning kamida ikkita qiymati teng.");
} else {
    alert("Berilgan sonlar hammasi har xil.");
}

//
//
//
//
//
//
//
//
//BOOLEAN 9

const a7 = +prompt("Son kiriting:");

if (a % 2 == 0) {
    alert("Kiritilgan son juft son");
} else {
    alert("Kiritilgan son juft son emas");
}

//BOOLEAN 10

const a8 = +prompt("a sonini kiriting:");
const b8 = +prompt("b sonini kiriting:");
const c8 = +prompt("c sonini kiriting:");

if (a8 < b8 < c8 || a8 > b8 > c8) {
    alert("Ha b soni a va c sonlarini ortasida yotadi");
} else {
    alert("Yo'q b soni a va c sonlarini ortasida emas!");
}

// PART 2