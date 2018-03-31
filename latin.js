function getString() {
  var unLatin = document
    .getElementById("frm1")
    .submit()
    .toString()
    .toLowerCase();
  return unLatin;
}
console.log(getString());
console.log(unLatin);

switch (unLatin.charAt(0)) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    let pigLatinAdd = unLatin.charAt(0) + "ay";
    return unLatin + pigLatinAdd;
    break;
  default:
    let pigLatinArr = unLatin.split("").length;
    let pigLatinStart = unLatin.slice(1, pigLatinArr);
    console.log(pigLatinStart);
    let pigLatinEnd = unLatin.charAt(0) + "ay";
    return pigLatinStart + pigLatinEnd;
    break;
}

function getString2() {
  var unEnglish = document
    .getElementById("frm2")
    .submit()
    .toString()
    .toLowerCase();
  return unEnglish;
}
switch (unEnglish.charAt(0)) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    let english = unEnglish.split("-");
    return english[0];
    break;
  default:
    let english2 = unEnglish.split("-");
    let first = english2[0].join();
    let second = english2[1];
    let lengthSecond = second.length;
    let secondStr = second.splice(1, lengthSecond).join();
    return first + secondStr;
}
