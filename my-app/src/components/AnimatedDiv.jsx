import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedDiv() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = 650;

		let particles = [];
		const colors = ["#ff3cac", "#784ba0", "#2b86c5", "#ff6a00", "#ff0099"];

		class Particle {
			constructor(x, y, radius, color, speed) {
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.color = color;
				this.speed = speed;
			}
			update() {
				this.y += this.speed;
				if (this.y > canvas.height) {
					this.y = 0;
					this.x = Math.random() * canvas.width;
				}
			}
			draw() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = this.color;
				ctx.fill();
				ctx.closePath();
			}
		}

		function initParticles() {
			for (let i = 0; i < 50; i++) {
				let x = Math.random() * canvas.width;
				let y = Math.random() * canvas.height;
				let radius = Math.random() * 6 + 2;
				let color = colors[Math.floor(Math.random() * colors.length)];
				let speed = Math.random() * 2 + 0.5;
				particles.push(new Particle(x, y, radius, color, speed));
			}
		}

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			particles.forEach((particle) => {
				particle.update();
				particle.draw();
			});
			requestAnimationFrame(animate);
		}

		initParticles();
		animate();
	}, []);

	return (
		<motion.div
			className="w-full h-[650px] relative overflow-hidden"
			style={{
				background: "linear-gradient(45deg, #ff3cac, #784ba0, #2b86c5)",
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
		>
			<canvas
				ref={canvasRef}
				className="absolute top-0 left-0 w-full h-full"
			/>
			<div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold drop-shadow-lg">
				Premium Animated Div
			</div>
		</motion.div>
	);
}
