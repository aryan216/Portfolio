// const na=document.getElementById('title')
// console.log(na);
// na.addEventListener("mousemove", ()=>{
//     console.log("chalaja bsdk");
// })

const arrimg=["aniket.jpg","aniket2.jpg","aniket3.jpg","aniket4.jpg","aniket5.jpg"];
const btn=document.querySelector("#throttle");
    const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        //console.log(now-prev, delay);
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }
    document.querySelector("#title").addEventListener("mousemove", throttleFunction((dets)=>{
      var div=document.createElement("div");
      div.classList.add('imagediv');
      
      div.style.left=dets.clientX+'px';
      div.style.top=dets.clientY+'px';
      document.body.appendChild(div);
      var img=document.createElement("img");
      var rand = arrimg[(Math.random() * arrimg.length) | 0];
      img.setAttribute("src","./Assets/"+rand);
      div.appendChild(img);
      gsap.to(img,{
        y:"0",
        ease:Power3,
        duration:.8
      })
      setTimeout(function(){
        div.remove();
      },600)
    }, 300));