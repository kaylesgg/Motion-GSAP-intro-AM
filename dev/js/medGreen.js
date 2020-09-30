import {gsap} from "gsap";

export function medGreenAnimation(){

    var tl = gsap.timeline();
    tl.from(".blue-box",{duration: 2.5, rotation: 360, x: 300, borderRadius:"100px"});

    return tl;
}