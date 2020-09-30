import {gsap} from "gsap";


export function darkGreenAnimation(){

    var tl = gsap.timeline();
    tl.from(".dark-green",{duration:3,x:-400});

    return tl;
}