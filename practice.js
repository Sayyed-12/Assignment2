const lines=["hello world","javascript is not fun"]
const capitalized=lines.map(line=>{ //hello world
    return line
    .split(' ') //'hello','world'
    .map(word=> word[0].toUpperCase()+word.slice(1))                   //hello  //Hello
    .join(' ')
})
console.log(capitalized)


//return only extentions
const files = ["index.html", "style.css", "script.js"];
// Expected Output: ["html", "css", "js"]

const extentionsOnly=files.map(file=>{
   return file.split('.').slice(1).join()
})
console.log(extentionsOnly)


// Given an array of 10-digit phone numbers as strings, mask all digits except the last 4.
// Expected Output: ["******3210", "******7890", "******9999"]
const phones = ["9876543210", "1234567890", "9999999999"];

const mask=phones.map(phone=>{
   
  return  "******"+phone.slice(-4)
})
console.log(mask)


// Count the number of words in each sentence.
const thoughts = ["Be yourself", "JavaScript is fun", "Map is powerful"];
// Expected Output: [2, 3, 3]

const wordsCount=thoughts.map(thought=>thought.split(' ').length)
console.log(wordsCount)

// Convert each hex color to "rgb(r, g, b)" format.
const colors = ["#FF0000", "#00FF00", "#0000FF"];
// Expected Output: ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"]
 const hexToRGB=colors.map(color=>{
const r=parseInt(color.slice(1,3),16)
const g=parseInt(color.slice(3,5),16)
const b=parseInt(color.slice(5,7),16)

return `rgb( ${r},${g},${b})`
 })

 console.log(hexToRGB)



 

 

 
const users = [
  { name: "sana", age: 22 },
  { name: "saniya", age: 19 },
  { name: "Mahira", age: 25 }
];
 

/*Convert each user object into a sentence like
[
  "sana is 5 years old",
  "Saniya is 19 years old",
  "Mahira is 25 years old"
]
*/

const sentence=users.map(user=>{
    return `${user.name} is ${user.age} years old`
})
console.log(sentence)


const products = [
  { name: "laptop", price: 70000 },
  { name: "mobile", price: 25000 },
  { name: "tablet", price: 30000 }
];

const pdtNames=products.map(product=>product.name.toUpperCase())
console.log(pdtNames)


const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Atomic Habits", author: "James Clear", year: 2018 },
  { title: "1984", author: "George Orwell", year: 1949 }
];
const titleWithYear=books.map(book=>`${book.title} (${book.year})`)
console.log(titleWithYear)


const students = [
  { name: "Sana", marks: [80, 85, 90] },
  { name: "saniya", marks: [70, 75, 72] },
  { name: "Muskan", marks: [88, 89, 91] }
];

const nameWithMarks=students.map(student=>{
 const avg=student.marks.reduce((sum,mark)=>sum+mark,0)/student.marks.length
 return `${student.name} : ${avg.toFixed(2)}`
    

})
console.log(nameWithMarks)


const nums = [1, 2, 3, 4, 5];
// Use reduce to find the sum of all numbers in the array.
 const sum=nums.reduce(((acc,num)=>acc=acc+num),0)
 console.log(sum)
