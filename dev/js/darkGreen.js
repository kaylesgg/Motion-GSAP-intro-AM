import {gsap} from "gsap";


export function darkGreenAnimation(){

    var tl = gsap.timeline();
    tl.to(".dark-green",{duration: 2, rotation: 360, x: 100, borderRadius:"50px"});

    return tl;
}