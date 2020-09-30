import {gsap} from "gsap";

export function medGreenAnimation(){

    var tl = gsap.timeline();
    tl.from(".blue-box",{duration:0.5,x:-600});

    return tl;
}