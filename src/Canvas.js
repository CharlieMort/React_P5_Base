import p5 from "p5";
import React, { useEffect, useRef, useState } from "react";

export const Canvas = () => {
    const myRef = useRef();
    const [myP5, setMyP5] = useState();
    
    const Sketch = (p) => {
        let x = 0;
        let y = 0;

        p.setup = () => {
            p.createCanvas(200, 200);
        }

        p.draw = () => {
            p.background(0);
            p.fill(255);
            p.rect(x, y, 50, 50);
            x += 2;
            y += 1;
            if (x > p.width) x = -50;
            if (y > p.height) y = -50;
        }

    }

    useEffect(() => {
        setMyP5(new p5(Sketch, myRef.current))
    }, []);

    return(
        <div ref={myRef} className="Canvas">
            <h1>React And P5</h1>
        </div>
    )
}