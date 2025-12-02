gsap.registerPlugin(ScrollTrigger);

const timeline1 = gsap.timeline( {
    scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom top",
        scrub: true,
        //merkers:true
    }
});

//Animacion header
timeline1.to("header", {
    y:910,
    scale: 0.8,
    duration:1
});

timeline1.to(".montaña-imagen .nube-1, .montaña-imagen .nube-2", {
    x: 500,
    scale: 0.5,
    duration: 1
},"<=");

//animacion seccion 2

const timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".seccion-2",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
    }
});

timeline2.from(".seccion-2 .izquierda", {
    x: -150,
    scale: 0.5,
    opacity: 0,
    duration: 1.5
});

timeline2.from(".seccion-2 .derecha", {
    x: -150,
    scale: 0.5,
    opacity: 0,
    duration: 1.5
},"<=");

const timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".seccion-3",
        start: "top 20%",
        end: "bottom 90%",
        scrub: true
    }
});

timeline3.from(".seccion-3 .contenido .izquierda", {
    x:-550,
    duration:1
});

gsap.to(".seccion-4 .titulo", {
     x:1500,
    duration:1,
    ease:"power2.out",
    scrollTrigger: {
        trigger: ".seccion-4",
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
       // markers: true,
       // pin: true
    }
})

gsap.from(".seccion-7 .formulario", {
    scale: 0.5,
    duration:1,
    ease:"power2.out",
    scrollTrigger: {
        trigger: ".seccion-7",
        start: "top 50%",
        end: "bottom 100%",
        scrub: true,
        //markers: true,
       // pin: true
    }
})