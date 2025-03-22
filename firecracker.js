function triggerFirecrackerEffect() {
    const x = window.innerWidth / 2; // Center horizontally
    const y = window.innerHeight / 2; // Center vertically

    for (let i = 0; i < 5; i++) { // Create multiple fireworks
        setTimeout(() => createFirecracker(x, y), i * 300);
    }
}

function createFirecracker(x, y) {
    const firework = document.createElement("div");
    firework.style.position = "absolute";
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    firework.style.width = "10px";
    firework.style.height = "10px";
    firework.style.backgroundColor = "transparent";
    firework.style.zIndex = "9999";
    document.body.appendChild(firework);

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = "6px";
        particle.style.height = "6px";
        particle.style.backgroundColor = "red";
        particle.style.borderRadius = "50%";
        particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
        particle.style.transition = "transform 1s linear, opacity 1s linear";
        particle.style.opacity = "1";

        firework.appendChild(particle);

        setTimeout(() => {
            particle.style.opacity = "0";
        }, 100);
    }

    setTimeout(() => {
        firework.remove();
    }, 1000);
}
