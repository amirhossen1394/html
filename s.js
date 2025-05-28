document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("interactiveButton");
    const body = document.body;
    const heading = document.querySelector("h1");
    const image = document.querySelector("img");

    // افکت کلیک روی دکمه با تغییر رنگ و حرکت سه‌بعدی
    button.addEventListener("click", () => {
        button.style.transform = "scale(1.3) rotateX(20deg)";
        button.style.background = "radial-gradient(circle, #ff4081, #ff758c)";
        button.style.boxShadow = "0px 0px 30px rgba(255,64,129,0.9)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
            button.style.background = "linear-gradient(90deg, #00d2ff, #007bff)";
            button.style.boxShadow = "none";
            alert("🚀 شما وارد سطح وزیر اعظم شدید!");
        }, 700);
    });

    // تغییر رنگ داینامیک پس‌زمینه براساس موقعیت ماوس
    document.addEventListener("mousemove", (e) => {
        let x = e.clientX / window.innerWidth * 255;
        let y = e.clientY / window.innerHeight * 255;
        let z = (x + y) / 2;
        body.style.background = `rgb(${x}, ${y}, ${z})`;
    });

    // نورپردازی سینمایی روی تیتر هنگام اسکرول
    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY / 4;
        heading.style.textShadow = `0px ${scrollY}px 25px rgba(255,255,255,0.8)`;
    });

    // افکت سه‌بعدی روی تصویر هنگام کلیک و بازگردانی خودکار
    image.addEventListener("click", () => {
        image.style.transform = "rotateY(20deg) scale(1.15)";
        image.style.boxShadow = "0px 10px 40px rgba(0,0,0,0.5)";
        setTimeout(() => {
            image.style.transform = "rotateY(0) scale(1)";
            image.style.boxShadow = "none";
        }, 700);
    });

    // تغییر متن تیتر به صورت هوشمندانه با گذر زمان
    setInterval(() => {
        const phrases = ["💎 سطح وزیر اعظم 💎", "🚀 قدرت فناوری 🚀", "🔥 جاوااسکریپت پیشرفته 🔥"];
        let randomIndex = Math.floor(Math.random() * phrases.length);
        heading.inner