import { useEffect } from 'react';

const MouseAnimation = () => {
  useEffect(() => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    let w, h, balls = [];
    let mouse = {
        x: undefined,
        y: undefined
    }
    let rgb = [
        "rgb(62,166,201)",
        "rgb(15,37,52)",
    ]

    function init() {
        resizeReset();
        animationLoop();
    }

    function resizeReset() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function animationLoop() {
        ctx.clearRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'lighter';
        drawBalls();

        let temp = [];
        for (let i = 0; i < balls.length; i++) {
            if (balls[i].time <= balls[i].ttl) {
                temp.push(balls[i]);
            }
        }
        balls = temp;

        requestAnimationFrame(animationLoop);
    }

    function drawBalls() {
        for (let i = 0; i < balls.length; i++) {
            balls[i].update();
            balls[i].draw();
        }
    }

    function mousemove(e) {
        mouse.x = e.x;
        mouse.y = e.y;

        for (let i = 0; i < 1; i++) {
            balls.push(new Ball());
        }
    }

    function mouseout() {
        mouse.x = undefined;
        mouse.y = undefined;
    }

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    }

    class Ball {
        constructor() {
            this.start = {
                x: mouse.x + getRandomInt(-10, 10),
                y: mouse.y + getRandomInt(-10, 10),
                size: getRandomInt(5, 10)
            }
            this.end = {
                x: this.start.x + getRandomInt(-150, 150),
                y: this.start.y + getRandomInt(-150, 150)
            }

            this.x = this.start.x;
            this.y = this.start.y;
            this.size = this.start.size;

            this.style = rgb[getRandomInt(0, rgb.length - 1)];

            this.time = 0;
            this.ttl = 120;
        }
        draw() {
            ctx.fillStyle = this.style;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            if (this.time <= this.ttl) {
                let progress = 1 - (this.ttl - this.time) / this.ttl;

                this.size = this.start.size * (1 - easeOutQuart(progress)*0.5);
                this.x = this.x + (this.end.x - this.x) * 0.005;
                this.y = this.y + (this.end.y - this.y) * 0.005;
            }
            this.time++;
        }
    }

    window.addEventListener("DOMContentLoaded", init);
    window.addEventListener("resize", resizeReset);
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseout", mouseout);

    return () => {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseout", mouseout);
    }
  }, []);

  return (
    <canvas id="canvas" style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: -1 }}></canvas>
  );
};

export default MouseAnimation;
