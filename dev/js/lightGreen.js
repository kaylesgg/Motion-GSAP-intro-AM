import {gsap} from "gsap";

export function lightGreenAnimation(){

    var tl = gsap.timeline();
    tl.to(".light-green",{duration: 3, rotation: 360, x: 500, borderRadius:"200px"});

    return tl;

}