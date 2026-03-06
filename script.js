const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let moveInterval = null;

/* ===== NÚT HONG CHẠY ===== */

function startRunning() {

    if (moveInterval) return;

    noBtn.style.position = "fixed";

    moveInterval = setInterval(() => {

        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        const padding = 20;

        const maxX = window.innerWidth - btnWidth - padding;
        const maxY = window.innerHeight - btnHeight - padding;

        const minX = padding;
        const minY = padding;

        const randomX = Math.random() * (maxX - minX) + minX;
        const randomY = Math.random() * (maxY - minY) + minY;

        noBtn.style.transition = "all 0.35s ease";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";

    }, 500);
}

noBtn.addEventListener("mouseover", startRunning);

noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    startRunning();
});


/* ===== YES CLICK ===== */

yesBtn.addEventListener("click", yesClick);

function yesClick() {

    for (let i = 0; i < 40; i++) {
        setTimeout(createHeart, i * 80);
    }

    const card = document.getElementById("mainCard");
    card.style.opacity = "0";

    setTimeout(() => {
        document.body.innerHTML = `
        <div class="success-screen">
            <div style="font-size:90px;">💖</div>
            <h1 style="font-size:clamp(22px,5vw,36px);">
                Vậy chốt kèo nhaaa 😍<br>
                Tui qua đón đó 💕
            </h1>
        </div>
        `;
    }, 800);
}

function createHeart() {
    var heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.animation = "floatUp 4s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function createSparkle() {
    var sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = window.innerHeight + "px";
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);
}

setInterval(createSparkle, 150);