import {gsap} from "gsap";

export function lightGreenAnimation(){

    var tl = gsap.timeline();
    tl.from(".light-green",{duration:1,x:-800});

    return tl;

}