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
