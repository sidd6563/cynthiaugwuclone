const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){

    var tl = gsap.timeline();
    tl.from("#nav", {
        opacity: 0,
        y: '50',
        duration: 0.5
    })
    tl.from("#heading,#secondh1", {
        opacity: 0,
        y: '50',
        duration: 0.8
    })
   
    tl.from("#newdiv h5",{
        opacity: 0,
        y: '-20',
        duration: 0.5
    })
    tl.from("#choti,#herofooter",{
        opacity: 0,
        y: '-20',
        duration: 0.5
    })
    

    

}
function chapta(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets){
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(0.8,1.2,xdiff)
        yscale = gsap.utils.clamp(0.8,1.2,ydiff)

        circleMouseFollower(xscale,yscale)
    })
}


function circleMouseFollower(xscale,yscale){
    
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}
firstPageAnim()
chapta()
circleMouseFollower()










