window.addEventListener("load", (event) => {
    for (let i = 0; i < 81; i++) {
        // el = el.innerHTML + `<div class="item"></div>`;+
        let el = document.getElementById("board");
        el.innerHTML +=
            `<div class="item"><input type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"  #mycell class="cell" maxlength="1" id="` +
            i +
            `" /></div>`;
    }
    fillData();
});

const colMapping = (col) => {
    let dup = col;
    while (dup > 9) dup = dup - 9;
    for (let i = 0; i < 9; i = i + 3) {
        if (dup < i + 3 && dup >= i) return i;
    }
};

var stub = [
    [0, 8, 0, 0, 0, 9, 7, 4, 3],
    [0, 5, 0, 0, 0, 8, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 5, 0, 0, 0],
    [0, 0, 0, 8, 0, 4, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 7, 0],
    [0, 3, 0, 5, 0, 0, 0, 8, 0],
    [9, 7, 2, 4, 0, 0, 0, 5, 0],
];
var matrix = [];

function fillData() {
    let index = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = document.getElementById(index++);
            val.value = stub[i][j];
            //val.value = index++;
            //row.push(val);
        }
    }
}

function getAvailable(stub, pos) {
    let allValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let start = getStart(pos);
    let rowIndex = start % 9;
    let colIndex = start % 9;
    console.log(rowIndex + " " + colIndex);
    for (let i = 0; i < 27; i = i + 9) {
        for (let j = 0; j < 3; j++) {
            console.log(stub[0][0]);
            if (stub[rowIndex + i][colIndex + j] !== 0) {
                let ind = allValues.indexOf(stub[rowIndex + i][colIndex + j]);
                allValues.splice(ind, 0);
            }
        }
    }
    return allValues;
}

function rowCheck(val, row) {
    for (let i = 0; i < 9; i++) {
        if (stub[row][i] == val) return true;
    }
    return false;
}

function colCheck(val, col) {
    for (let i = 0; i < 9; i++) {
        if (stub[i][col] == val) return true;
    }
    return false;
}

function gridCheck(chk, val) {
    let start = getStart(val);
    let rowIndex = start % 9;
    let colIndex = start % 9;
    for (let i = 0; i < 27; i = i + 9) {
        for (let j = 0; j < 3; j++) {
            if (stub[rowIndex + i][colIndex + j] == chk) return false;
        }
    }
    return true;
}

function solve() {
    console.log(getAvailable(stub, 20));
}

const getStart = (cell) => {
    let startPositions = [0, 3, 6, 9, 27, 30, 33, 54, 57, 60];
    for (let i = 0; i < startPositions.length; i++) {
        //row1
        for (let k = 0; k < 27; k = k + 9) {
            let r1 = startPositions[i] + k;

            for (let j = 0; j < 3; j++) {
                if (cell == r1 + j) return startPositions[i];
            }
        }
    }
};