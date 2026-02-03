
const events = document.querySelectorAll(".event");
const tooltip = document.getElementById("tooltip");
const isMobile = window.innerWidth < 768;
events.forEach(event => {

    if (!isMobile) {
        event.addEventListener("mouseenter", e => {
            showTooltip(event, e);
        });

        event.addEventListener("mousemove", e => {
            moveTooltip(e);
        });

        event.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    }

    event.addEventListener("click", e => {
        e.stopPropagation();
        showMobileTooltip(event);
    });
});

document.addEventListener("click", () => {
    tooltip.style.display = "none";
});

function showTooltip(el, e) {
    if (!el.dataset.message) return;

    tooltip.innerText = el.dataset.message;
    tooltip.style.display = "block";
    moveTooltip(e);
}

function moveTooltip(e) {
    const padding = 12;
    let x = e.clientX + 14;
    let y = e.clientY + 18;

    const rect = tooltip.getBoundingClientRect();

    if (x + rect.width > window.innerWidth - padding) {
        x = window.innerWidth - rect.width - padding;
    }

    if (y + rect.height > window.innerHeight - padding) {
        y = e.clientY - rect.height - 18;
    }

    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";
}

function showMobileTooltip(el) {
    if (!el.dataset.message) return;

    tooltip.innerText = el.dataset.message;
    tooltip.style.display = "block";

    tooltip.style.left = "50%";
    tooltip.style.top = "65%";
    tooltip.style.transform = "translateX(-50%)";
}

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

    setTimeout(() => heart.remove(), 7000);
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
        setTimeout(() => heart.remove(), 4000);
    }
}

if (!isMobile) {
    document.addEventListener("mousemove", e => {

        const bg = document.querySelector(".bg-3d");
        if (bg) {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            bg.style.transform = `translate(${x}px, ${y}px)`;
        }
        if (Math.random() > 0.7) return;

        const heart = document.createElement("div");
        heart.className = "cursor-heart";

        const hearts = ["❤", "💗", "💖", "💞"];
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        heart.style.setProperty("--randX", Math.random());

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    });
}
