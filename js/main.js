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

  // LEFT:  left: 223px; top: 206px
  // RIGHT: left: 916px; top: 206px;
  let finish = new Audio("./../audio/finish.ogg")
  $("body").addEventListener("mousedown", (e) =>{
    $("#button1").style.transition = "all 0s ease-in"
    $("#button2").style.transition = "all 0s ease-in"
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
        // left: left: 406
        // left: top: 206

        // right: left: 916
        // right: top: 206

        // btnLeft : left: 628
        // btnLeft : top: 378

        // btnRight : left: 685
        // btnRight : top: 378
        if($("#button1").style.left > '374px' && $("#button1").style.left < '436px' && $("#button1").style.top > '174px' && $("#button1").style.top < '236px'){
          $("#button1").style.transition = "all .4s ease-in";
          $("#button1").style.left = "406px";
          $("#button1").style.top = "206px";
          $("#button1").style.border = "3px solid #98BB88";
        }

        else{
          $("#button1").style.left = '628px';
          $("#button1").style.top = '378px';
          $("#button1").style.transition = 'all .4s ease-in';
          $("#button1").style.border = '3px solid #59C2E2';
        }
        if($("#button2").style.left > "886px" && $("#button2").style.left < "946px" && $("#button2").style.top > "176px" && $("#button2").style.top < "236px"){
          $("#button2").style.left = "916px";
          $("#button2").style.top = "206px";
          $("#button2").style.transition = "all .4s ease-in";
          $("#button2").style.border = "3px solid #98BB88";
        }
        else{
          $("#button2").style.left = "685px";
          $("#button2").style.top = "378px";
          $("#button2").style.transition = "all .4s ease-in";
          $("#button2").style.border = "3px solid #59C2E2";
        }

        (function(){
          if($("#button1").style.left == '406px' && $("#button1").style.top == "206px" && $("#button2").style.left == "916px" && $("#button2").style.top == "206px"){
            $(".wrapper").style.transform = "translateX(-200%)"
            $(".wrapper").style.transition = "transform .5s ease-in"
            $(".success").style.transform = "translateX(0)"
            $(".success").style.transition = "transform .5s ease-in"
            finish.play()
            $(".success-img").addEventListener("click", ()=> {
              window.location.reload()
            })
          }
        })()
      })
}, 700);

