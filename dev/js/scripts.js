

import {gsap} from "gsap";

import {darkGreenAnimation} from "./darkGreen.js";
import {medGreenAnimation} from "./medGreen.js";
import {lightGreenAnimation} from "./lightGreen.js";



const mainTL = gsap.timeline({paused:true});

    mainTL.add(darkGreenAnimation())
      
        .add(medGreenAnimation())
        
        .add(lightGreenAnimation(),"-=2")
        
        .play();
