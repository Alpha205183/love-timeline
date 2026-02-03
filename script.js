const events = document.querySelectorAll(".event");
const tooltip = document.getElementById("tooltip");

events.forEach(event => {
    event.addEventListener("mouseenter", () => {
        tooltip.style.display = "block";
        tooltip.innerText = event.dataset.message;
    });

    event.addEventListener("mousemove", e => {
        let x = e.clientX + 15;
        let y = e.clientY + 15;
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        if (x + tooltipWidth > window.innerWidth) {
            x = e.clientX - tooltipWidth - 15;
        }

        if (y + tooltipHeight > window.innerHeight) {
            y = window.innerHeight - tooltipHeight - 20;
        }

        if (y < 20) {
            y = 20;
        }

        tooltip.style.left = x + "px";
        tooltip.style.top = y + "px";
    });

    event.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});

const correctPassword = "anhyeuem"; 
let wrongCount = 0;

function checkPassword() {
    const input = document.getElementById("password");
    const loginBox = document.getElementById("loginBox");
    const loginScreen = document.getElementById("loginScreen");
    const error = document.getElementById("error");
    const hint = document.getElementById("hint");

    if (input.value === correctPassword) {
        error.innerText = "💖 Đúng rồi nè~";
        hint.style.opacity = 0;

        createHearts(25);

        loginBox.classList.add("fade-out");

        setTimeout(() => {
            loginScreen.style.display = "none";
            const timeline = document.getElementById("timeline");
            timeline.classList.remove("hidden");
            timeline.classList.add("show");
        }, 1000);

    } else {
        wrongCount++;
        error.innerText = "😝 Sai rồi kìa~";
        loginBox.classList.add("shake");

        setTimeout(() => {
            loginBox.classList.remove("shake");
        }, 350);

        if (wrongCount === 2) {
            hint.innerText = "💌 Gợi ý: là một từ em rất hay nói...";
            hint.style.opacity = 1;
        }

        if (wrongCount === 4) {
            hint.innerText = "💖 Gợi ý: bắt đầu bằng 'anh'...";
        }

        if (wrongCount === 6) {
            hint.innerText = "🥰 Gợi ý: là điều anh luôn nói với em";
        }
    }
}
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    heart.style.fontSize = 12 + Math.random() * 12 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);

function createHearts(amount) {
    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 2 + Math.random() * 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    const bg = document.querySelector(".bg-3d");
    if (bg) {
        bg.style.transform = `translate(${x}px, ${y}px)`;
    }
});
document.addEventListener("mousemove", (e) => {
    
    if (Math.random() > 0.3) return;

    const heart = document.createElement("div");
    heart.className = "cursor-heart";
    heart.innerHTML = "❤";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

 
    heart.style.setProperty("--randX", Math.random());

    document.body.appendChild(heart);

    
    setTimeout(() => {
        heart.remove();
    }, 1800);
});
document.addEventListener("mousemove", (e) => {
   
    if (Math.random() > 0.35) return;

    const heart = document.createElement("div");
    heart.className = "cursor-heart";

    const hearts = ["❤", "💗", "💖", "💞"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.setProperty("--randX", Math.random());

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1600);
});
document.querySelectorAll(".event").forEach(event => {
    event.addEventListener("click", (e) => {
        e.stopPropagation();
        showTooltip(event, e);
    });
});

document.addEventListener("click", () => {
    if (tooltip) tooltip.style.display = "none";
});
function showTooltip(eventEl, e) {
    tooltip.innerHTML = eventEl.dataset.message;
    tooltip.style.display = "block";

    const offset = 18; 

    tooltip.style.left = e.clientX + "px";
    tooltip.style.top = (e.clientY + offset) + "px";
}
document.addEventListener("mousemove", (e) => {
    if (tooltip.style.display === "block") {
        tooltip.style.left = e.clientX + "px";
        tooltip.style.top = (e.clientY + 18) + "px";
    }
});
