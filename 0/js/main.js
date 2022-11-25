let elBody = document.querySelector("body");
// elBody.addEventListener("load", ()=>{
//   move("element")
// })

let element = document.querySelector(".element");
let location1 = 0;


elBody.addEventListener("mousedown", (e)=>{
  element.style.position = "absolute";
  if(e.target == element)
  {
    
    location1 = element
    
    document.addEventListener("mousemove", (e) =>{
      let x = e.pageX;
      let y = e.pageY;
      location1.style.left = `${x - 25}px`;
      location1.style.top = `${y - 25}px`;
    })
  }
})

document.addEventListener("mouseup", () =>{
  location1 = 0
})
