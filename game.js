let civilization = {
fear: 0,
awe: 0,
aggression: 0
};

let paintings = [];

const config = {
type: Phaser.AUTO,
width: 800,
height: 500,
backgroundColor: "#3b2a1a",
scene: {
create: create
}
};

const game = new Phaser.Game(config);

function create() {
this.add.text(20, 20, "Cave Wall", { fontSize: "24px", fill: "#ffffff" });
updateStats();
}

function generatePainting() {
const prompt = document.getElementById("promptInput").value.toLowerCase();

// Simple keyword tagging (temporary system)
if (prompt.includes("sun")) civilization.awe += 2;
if (prompt.includes("serpent")) civilization.fear += 3;
if (prompt.includes("hunt")) civilization.aggression += 2;
if (prompt.includes("fire")) civilization.aggression += 1;

paintings.push(prompt);

renderPaintings();
updateStats();
}

function renderPaintings() {
const scene = game.scene.scenes[0];

scene.children.removeAll();

scene.add.text(20, 20, "Cave Wall", { fontSize: "24px", fill: "#ffffff" });

paintings.forEach((text, index) => {
scene.add.text(40, 70 + index * 40, "🖐 " + text, { fontSize: "16px", fill: "#ffcc88" });
});
}

function updateStats() {
document.getElementById("stats").innerHTML = `
Fear: ${civilization.fear} |
Awe: ${civilization.awe} |
Aggression: ${civilization.aggression}
`;
}
