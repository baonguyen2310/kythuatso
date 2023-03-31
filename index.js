//https://en.wikipedia.org/wiki/Template:Letters_with_macron
const arrayLogicText = [
  "ĀB̄C̄D̄",
  "ĀB̄C̄D",
  "ĀB̄CD̄",
  "ĀB̄CD",
  "ĀBC̄D̄",
  "ĀBC̄D",
  "ĀBCD̄",
  "ĀBCD",
  "AB̄C̄D̄",
  "AB̄C̄D",
  "AB̄CD̄",
  "AB̄CD",
  "ABC̄D̄",
  "ABC̄D",
  "ABCD̄",
  "ABCD",
];

const arrayGroup16 = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
];

const arrayShortText16 = [
  "1"
];

const arrayGroup8 = [
  [0, 4, 12, 8, 1, 5, 13, 9], //hàng
  [1, 5, 13, 9, 3, 7, 15, 11],
  [3, 7, 15, 11, 2, 6, 14, 10],
  [0, 4, 12, 8, 2, 6, 14, 10]
  [0, 1, 2, 3, 4, 5, 6, 7], //cột
  [4, 5, 6, 7, 12, 13, 14, 15],
  [12, 13, 14, 15, 8, 9, 10, 11],
  [0, 1, 2, 3, 8, 9, 10, 11]
];

const arrayShortText8 = [
  "C̄",
  "D",
  "C",
  "D̄",
  "Ā",
  "B",
  "A",
  "B̄"
];

const arrayGroup4 = [
  [0, 4, 12, 8], //hàng
  [1, 5, 13, 9],
  [3, 7, 15, 11],
  [2, 6, 14, 10],
  [0, 1, 2, 3], //cột
  [4, 5, 6, 7],
  [12, 13, 14, 15],
  [8, 9, 10, 11],
  [0, 1, 4, 5], //ô vuông
  [4, 5, 12, 13],
  [12, 13, 8, 9],
  [1, 3, 5, 7],
  [5, 7, 13, 15],
  [13, 15, 9, 11],
  [3, 2, 7, 6],
  [7, 6, 15, 14],
  [15, 14, 11, 10],
  [0, 8, 2, 10], //góc
  [0, 1, 8, 9], //đối 2 - 2
  [1, 3, 9, 11],
  [3, 2, 11, 10],
  [0, 4, 2, 6],
  [4, 12, 6, 14],
  [2, 8, 14, 10]
];

const arrayShortText4 = [
  "C̄D̄",
  "C̄D",
  "CD",
  "CD̄",
  "ĀB̄",
  "ĀB",
  "AB",
  "AB̄",
  "ĀC̄",
  "BC̄",
  "AC̄",
  "ĀD",
  "BD",
  "AD",
  "ĀC",
  "BC",
  "AC",
  "B̄D̄",
  "B̄C̄",
  "B̄D",
  "B̄C",
  "ĀD̄",
  "BD̄",
  "AD̄"
];

const arrayGroup2 = [
  [0, 4], [4, 12], [12, 8], [0, 8], //hàng
  [1, 5], [5, 13], [13, 9], [1, 9],
  [3, 7], [7, 15], [15, 11], [3, 11],
  [2, 6], [6, 14], [14, 10], [2, 10],
  [0, 1], [1, 3], [3, 2], [0, 2], //cột
  [4, 5], [5, 7], [7, 6], [4, 6],
  [12, 13], [13, 15], [15, 14], [12, 14],
  [8, 9], [9, 11], [11, 10], [8, 10]
];

const arrayShortText2 = [
  "ĀC̄D̄", "BC̄D̄", "AC̄D̄", "B̄C̄D̄",
  "ĀC̄D", "BC̄D", "AC̄D", "B̄C̄D",
  "ĀCD", "BCD", "ACD", "B̄CD",
  "ĀCD̄", "BCD̄", "ACD̄", "B̄CD̄",
  "ĀB̄C̄", "ĀB̄D", "ĀB̄C", "ĀB̄D̄",
  "ĀBC̄", "ĀBD", "ĀBC", "ĀBD̄",
  "ABC̄", "ABD", "ABC", "ABD̄",
  "AB̄C̄", "AB̄D", "AB̄C", "AB̄D̄"
];

const arrayGroup1 = [
  [0], [1], [2], [3], [4], [5], [6], [7], 
  [8], [9], [10], [11], [12], [13], [14], [15]
]

const arrayShortText1 = [
  "ĀB̄C̄D̄",
  "ĀB̄C̄D",
  "ĀB̄CD̄",
  "ĀB̄CD",
  "ĀBC̄D̄",
  "ĀBC̄D",
  "ĀBCD̄",
  "ĀBCD",
  "AB̄C̄D̄",
  "AB̄C̄D",
  "AB̄CD̄",
  "AB̄CD",
  "ABC̄D̄",
  "ABC̄D",
  "ABCD̄",
  "ABCD"
]

let arrayGroupTrue;
let arrayIndexGroupTrue;
let arraymfull;

const createLogic = () => {
  let logicText = "";
  for (let i = 0; i < arraymfull.length; i++) {
    if (arraymfull[i] === 1){
      logicText += arrayLogicText[i] + " + ";
    }
  }
  logicText = logicText.substring(0, logicText.length - 3);
  document.getElementById("logic-text").innerHTML = logicText;
}

const createTrueTable = () => {
  const Fcells = document.getElementsByClassName("F");
  for (let i = 0; i < arraymfull.length; i++) {
    Fcells[i].innerHTML = arraymfull[i];
  }
};

const createCacnoTable = () => {
  for (let i = 0; i < arraymfull.length; i++) {
    const mElement = document.getElementById(`m${i}`);
    mElement.innerHTML = arraymfull[i] + `<p>m${i}`;

    if (arraymfull[i] === 1)
    {
      mElement.style.color = "red";
    } else {
      mElement.style.color = "black";
    }
  }
}

const addGroupTrue = (arrayGroupTrue, arrayGroup, arrayIndexGroupTrue) => {
  for(let i = 0; i < arrayGroup.length; i++){
    let isGroupTrue = true;
    const existIndexs = [];
    for(let j = 0; j < arrayGroup[i].length; j++){  //xét mỗi tổ hợp
      const index = arrayGroup[i][j];

      //Kiểm tra phần tử index có tồn tại rồi chưa
      for(let k = 0; k < arrayGroupTrue.length; k++){
        for(let m = 0; m < arrayGroupTrue[k].length; m++){
          const existIndex = arrayGroupTrue[k][m];
          if (existIndex === index){  //nếu phần tử tổ hợp đang xét trùng với phần tử đã có
            if (!existIndexs.includes(index)){ //nếu trong mảng tồn tại chưa có phần tử trùng này
              existIndexs.push(index);
            }  
          }
        }
      }
      //kiểm tra ô bằng 0 hay bằng 1
      if (arraymfull[index] === 0){
        isGroupTrue = false;
      }
    }
    if (isGroupTrue === true && existIndexs.length < arrayGroup[i].length)
    {
      arrayGroupTrue.push(arrayGroup[i]);
      if (arrayGroup[0].length === 16){
        arrayIndexGroupTrue[0].push(i);
      } else if(arrayGroup[0].length === 8){
        arrayIndexGroupTrue[1].push(i);
      } else if(arrayGroup[0].length === 4){
        arrayIndexGroupTrue[2].push(i);
      } else if(arrayGroup[0].length === 2){
        arrayIndexGroupTrue[3].push(i);
      } else if(arrayGroup[0].length === 1){
        arrayIndexGroupTrue[4].push(i);
      } 
    }
  }
}

const createGroupTrue = () => {
  arrayGroupTrue = [];
  arrayIndexGroupTrue = [[],[],[],[],[]];
  addGroupTrue(arrayGroupTrue, arrayGroup16, arrayIndexGroupTrue); //theo thứ tự ưu tiên
  addGroupTrue(arrayGroupTrue, arrayGroup8, arrayIndexGroupTrue);
  addGroupTrue(arrayGroupTrue, arrayGroup4, arrayIndexGroupTrue);
  addGroupTrue(arrayGroupTrue, arrayGroup2, arrayIndexGroupTrue);
  addGroupTrue(arrayGroupTrue, arrayGroup1, arrayIndexGroupTrue);

  let mShortText = "= ";
  for(let i = 0; i < arrayGroupTrue.length; i++){
    mShortText += "(";
    for(let j = 0; j < arrayGroupTrue[i].length; j++){
      mShortText += `m${arrayGroupTrue[i][j]} + `;
    }
    mShortText = mShortText.substring(0, mShortText.length - 3);
    mShortText += ") + ";
  }
  mShortText = mShortText.substring(0, mShortText.length - 3);
  document.getElementById("m-short-text").innerHTML = mShortText;

  let shortText = "= ";
  for(let i = 0; i < arrayIndexGroupTrue.length; i++){
    for(let j = 0; j < arrayIndexGroupTrue[i].length; j++){
      const index = arrayIndexGroupTrue[i][j];
      if (i === 0){
        shortText += `${arrayShortText16[index]} + `;
      } else if (i === 1){
        shortText += `${arrayShortText8[index]} + `;
      } else if (i === 2){
        shortText += `${arrayShortText4[index]} + `;
      } else if (i === 3){
        shortText += `${arrayShortText2[index]} + `;
      } else if (i === 4){
        shortText += `${arrayShortText1[index]} + `;
      }
    }
    if (arrayIndexGroupTrue[i].length > 0){
      shortText = shortText.substring(0, shortText.length - 3);
      shortText += " + ";
    }
  }
  shortText = shortText.substring(0, shortText.length - 3);
  document.getElementById("short-text").innerHTML = shortText;
}

const handleStart = () => {
  const arraym = document.getElementById("question-input").value.split(" ");
  arraymfull = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < arraym.length; i++) {
    arraymfull[arraym[i]] = 1;
  }

  createLogic();
  createTrueTable();
  createCacnoTable();
  createGroupTrue();
};
