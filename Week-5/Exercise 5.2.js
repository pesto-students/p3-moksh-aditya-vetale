let vowels = "aeiou";

function vwCount(str) {
  let vowelCount = new Map();
  let string = str.toLowerCase();

  for (let el of string) {
    if (vowels.includes(el)) {
      if (vowelCount.has(el)) {
        let oldCount = vowelCount.get(el);
        vowelCount.set(el, oldCount + 1);
      } else {
        vowelCount.set(el, 1);
      }
    }
  }
  return vowelCount;
}

console.log(vwCount("Aditya"));
