const allsquare = document.getElementsByClassName("square")

for(const el of allsquare){
    el.addEventListener("click",()=>{
        const idOfElement = el.getAttribute("id")
        const elementInnerString = document.getElementById(idOfElement).innerHTML
        
        if(elementInnerString.includes('img'))
        {
            document.getElementById(idOfElement).style.backgroundColor = "yellow"
        }
    })
}