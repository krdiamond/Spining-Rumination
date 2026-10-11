import "./style.css";

const MESSAGE = "End Rumination Through Decisive Acceptance";
const RING_RADIUS = 42; // percent of ring size from center

const app = document.querySelector("#app");

const stage = document.createElement("main");
stage.className =
  "flex h-full w-full items-center justify-center bg-white";

const ring = document.createElement("div");
ring.className = "ring";
ring.setAttribute("aria-label", MESSAGE);
ring.setAttribute("role", "img");

const chars = Array.from(MESSAGE);
const total = chars.length;

chars.forEach((char, index) => {
  const span = document.createElement("span");
  span.className = "ring-char";
  span.textContent = char === " " ? "\u00A0" : char;

  const angle = (360 / total) * index;
  span.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${RING_RADIUS}%)`;

  ring.appendChild(span);
});

stage.appendChild(ring);
app.appendChild(stage);
