import strTest from './sample.js'
/* Flages
    g -> global match
    m -> multiline match
    i -> case-insensitive match
  - can mix and match ie. gi is global and case-insenitive

  can create regex in 2 ways.
    1. let regEx = /[a-z]/gi
    2. let regEx = new RegExp("[a-z]", "gi")
  
  Testing regex:
    regEx.test("some string you want to test")
    -> output is a boolean

Notation
 Anchors: Match position before/after characters
   ^  -> start of string
   $  -> End of string
   \b -> word boundry
   \B -> Not word boundry

 
  .  -> all characters, or first character
  .\ -> a period(\ escapes the character)
  \d -> Digits (0-9)
  \D -> Not a Digit (0-9)
  \w -> word characters(a-z,A-Z,0-9, _)
  \W -> Not word characters 
  \s -> Whitespace
  \S -> not Whitespace

*/

let pattern = "[a-z]";
let flages = "gi"

let regEx = new RegExp(pattern,flages)

let reg = /[^a-z]/g

// console.log(reg.test(strTest))
const phoneNum = /\d{3}[-]\d{3}[-]\d{4}/g

// const nums = strTest.match(phoneNum)

// console.log(nums)

function pNums900(n) {
  const phoneNum = /\d{3}[-]\d{3}[-]\d{4}/g
  const nums = strTest.match(phoneNum)
  let nine = []
  for(let i=0;i<nums.length;i++){
    if(/(9|8)\d{2}(-|.)\d{3}(-|.)\d{4}/g.test(nums[i])){
      nine.push(nums[i])
    }
  }
  nine.sort()
  return nine;
}

console.log(pNums900())


