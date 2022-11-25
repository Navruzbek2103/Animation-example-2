setTimeout(() => {
  $(".spinner").classList.add("hide-spinner")
  setTimeout(() => {
    $(".wrapper-box").style.transform = "translate(0)"
  }, 200);
  let title = new Audio("./../audio/title.ogg")
  let locationEqual = 0;
  let locationNotEqual = 0;
  
  $(".wrapper-box-img").addEventListener("click", () => {
    title.play()
  })
  // $("body").addEventListener("click", (e)=> {
  //   console.log(e);
  // })

  $("body").addEventListener("mousedown", (e) =>{
    $("#button1").style.position = "absolute"
    
    if(e.target == $("#button1")){
  
      locationEqual = $("#button1");
  
      document.addEventListener("mousemove", (p) => {
        let x = p.pageX;
        let y = p.pageY;
        locationEqual.style.left = `${x - 25}px`;
        locationEqual.style.top = `${y - 25}px`;
      })
    }
    else if(e.target == $("#button2")){
  
      locationNotEqual = $("#button2");
  
      document.addEventListener("mousemove", (p) => {
        let x = p.pageX;
        let y = p.pageY;
        locationNotEqual.style.left = `${x - 25}px`;
        locationNotEqual.style.top = `${y - 25}px`;
      })
    }
  })
  
  document.addEventListener("mouseup", () => {
    locationEqual = 0;
    locationNotEqual = 0;
  })
}, 700);
