// selecting files using DOM and storing into an array

const arrayOfFiles = document.querySelectorAll(".files");
// counter for filesArray
let fileNumber = 0;
const filesNameArray = ["a","b","c","d","e","f","g","h"];

for (const i of arrayOfFiles)
{
    // counter variable for ranks(rows)
    let counter = 8;
   for(const el of i.children)
   {
    el.setAttribute("id",filesNameArray[fileNumber]+counter)
    console.log(el)
    counter--;
   }
   fileNumber++
}