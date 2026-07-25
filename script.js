// ==========================================
// NEW GREEN BAWARCHI
// script.js
// ==========================================

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const loadingScreen = document.getElementById("loadingScreen");

    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }

    if (loadingScreen) {
        loadingScreen.style.opacity = "0";
        setTimeout(() => loadingScreen.style.display = "none", 500);
    }

});

// Scroll Progress Bar
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});

// ==============================
// Full Screen Image Viewer
// ==============================

const menuImages = document.querySelectorAll(".menuGallery img");
const viewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

let currentImage = 0;

menuImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentImage = index;

        viewer.style.display = "flex";
        viewerImage.src = img.src;

        document.body.style.overflow = "hidden";

    });

});

function closeImageViewer() {

    viewer.style.display = "none";
    document.body.style.overflow = "auto";

}

if (closeViewer) {

    closeViewer.addEventListener("click", closeImageViewer);

}

if (viewer) {

    viewer.addEventListener("click", (e) => {

        if (e.target === viewer) {

            closeImageViewer();

        }

    });

}

// Keyboard Navigation

document.addEventListener("keydown", (e) => {

    if (!viewer || viewer.style.display !== "flex") return;

    if (e.key === "Escape") {

        closeImageViewer();

    }

    if (e.key === "ArrowRight") {

        currentImage++;

        if (currentImage >= menuImages.length)
            currentImage = 0;

        viewerImage.src = menuImages[currentImage].src;

    }

    if (e.key === "ArrowLeft") {

        currentImage--;

        if (currentImage < 0)
            currentImage = menuImages.length - 1;

        viewerImage.src = menuImages[currentImage].src;

    }

});

// ==============================
// Scroll To Top
// ==============================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 400) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==============================
// Header Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==============================
// Fade Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".menuGallery img, .highlightCard, .quickCards a, .contactCard"

).forEach(el => observer.observe(el));

// ==============================
// Disable Image Drag
// ==============================

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

// ==============================
// Lazy Loading
// ==============================

if ("loading" in HTMLImageElement.prototype) {

    document.querySelectorAll("img").forEach(img => {

        img.loading = "lazy";

    });

}

// ==============================
// Footer Year
// ==============================

const year = document.querySelector(".copyright");

if (year) {

    year.innerHTML =
        "© " + new Date().getFullYear() + " New Green Bawarchi";

}

console.log("New Green Bawarchi Website Loaded Successfully");