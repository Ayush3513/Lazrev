function locoScroll(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locoScroll()

function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".page1",{
    y:"-=-30%",
    duration:1.5,
    ease:"expo.out",
    transform:`scaleX(0.8) scaleY(0.1)`,
    ease:"expo.inOut",
    borderRadius:"30px",
})
tl.to(".main",{
    backgroundColor:"#111111"
})
tl.to("nav,.page1 h1,.page1 p,.page1-cont,.move",{
    opacity:1,
    stagger:{
        amount:1.4
    },
    ease:Power1

})

}
loadingAnimation()


function navAnimation(){
    
var tl = gsap.timeline()
var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter",function(){
            tl.to(".nav-btm",{
            height:"10vw",
            duration:0.05,
            ease:"expo.out"
        })
        tl.to(".nav2-elem h5 ",{
            display:"block",
        } )
        tl.to(".nav2-elem h5 span",{
            y:0,
            stagger:{
                amount:0.2
            },
            delay:-.4,
            ease:Power1,
        })
        
    })
    nav.addEventListener("mouseleave",function(){
        tl.to(".nav2-elem h5 span",{
            transform:`translateY(25px)`,
            ease:Power1,
            duration:0.1
        })
        tl.to(".nav-btm",{
            height:"0vw",
            duration:0.05,
            ease:"expo.out"
        })
        tl.to(".nav2-elem h5",{
            display:"none"
         })
    })

}
navAnimation

function hoverAnimation(){
    var elem = document.querySelectorAll(".page2-elem")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        console.log(e.childNodes)
        gsap.to(e.childNodes[5],{
            opacity:1,
            scale:1
        })
    })
    e.addEventListener("mouseleave",function(){
        gsap.to(e.childNodes[5],{
            opacity:0,
            scale:0
        })
    })
    e.addEventListener("mousemove",function(dets){
       gsap.to(e.childNodes[5],{
        x:dets.x - e.getBoundingClientRect().x -67,
        y:dets.y - e.getBoundingClientRect().y - 80,
       })
    })
})
}
hoverAnimation()

function vidAnimation(){

var nav = document.querySelector("nav")
var cont = document.querySelector(".page3-cont")
var video = document.querySelector(".page3 video")
cont.addEventListener("click",function(){
    nav.style.opacity = 0
    video.play()
    gsap.to(".page3 video",{
        top:"50%",
        duration:1.5,
        transform:`translate(-50%,-50%) scaleX(1) scaleY(1)`,
        ease:"expo.inOut",
        borderRadius:0,
    })
})
video.addEventListener("click",function(){
    nav.style.opacity = 1
    video.pause()
    gsap.to(".page3 video",{
        top:"90%",
        duration:1,
        transform:`translate(-50%,-50%) scaleX(0.8) scaleY(0)`,
        ease:"ease",
        borderRadius:"30px",
    })
})

}
vidAnimation()


    var img6 = document.querySelectorAll(".sect-right img")
var vid6 = document.querySelectorAll(".sect-right video")

img6.forEach(function(img){

    img.addEventListener("mouseenter",function(){
        img.style.opacity = 0,
       vid6.forEach(function(vid){
        vid.play()
       })
    })
    img.addEventListener("mouseleave",function(){
        img.style.opacity = 1,
        vid6.forEach(function(vid){
            vid.load()
           })
    })
})

    var img7 = document.querySelectorAll(".hvr-cont img")
var vid7 = document.querySelectorAll(".hvr-cont video")
var container = document.querySelectorAll(".hvr-cont")



    img7[0].addEventListener("mouseenter",function(){
        img7[0].style.opacity = 0,
       vid7[0].play()
       container[0].style.height = "80%"
    })
    img7[1].addEventListener("mouseenter",function(){
        img7[1].style.opacity = 0,
       vid7[1].play()
       container[1].style.height = "80%"
    })
    img7[0].addEventListener("mouseleave",function(){
        img7[0].style.opacity = 1,
       vid7[0].load()
       container[0].style.height = "44%"
    })
    img7[1].addEventListener("mouseleave",function(){
        img7[1].style.opacity = 1,
       vid7[1].load()
       container[1].style.height = "44%"
    })
   


gsap.to(".elem11 h4",{
    transform:`translateX(0)`,
    scrollTrigger:{
        trigger:".elem11 h4",
        scroller:".main",
        scrub:true,
        start:"top 70%",
        end:"top 0%",
    }
})