import { Enemy } from "./ui/enities.js";
import { Background } from "./ui/basic-ui.js";



const background = new Background();
const enemies = [];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameLoop = () => {
  clear();

  update();

  render();

  fps();
  window.requestAnimationFrame(gameLoop);
};

const enemy = {
  hp: 100,
  name: "Enemy 1",
  dmg: 12,
};

const clear = () => {
  canvas.width = 1280;
  canvas.height = 720;
  background.draw(ctx);
};
const update = () => {
  enemies.map((a) => {
    a.update();
  })
};
const render = () => {
 enemies.map((a) => {
  a.draw(ctx);
 })
};
const fps = () => {};

const loadData = async () => {
  const entitiesFile = await fetch("./res/data/entities.json");
  const data = await entitiesFile.json();
  Enemy.entitiesData = data;
};

const genEnemies = () => {
  Enemy.entitiesData.map((a) => {
    enemies.push(
      new Enemy(
        a.name,
        a.hp,
        a.dmg,
        a.imagePath,
        a.width,
        a.height,
        a.velocity,
        a.type
      )
    );
  });
};

window.onload = async () => {
  await loadData();
  console.log(Enemy.entitiesData);
  genEnemies();
  console.log/(enemies);
  window.requestAnimationFrame(gameLoop);
};
//const battleBus = new Image();
//battleBus.src = "./res/img/battle_bus.png";

//let bossPaths = [
//"./res/img/battle_bus.png" ,
// "./res/img/BOSS.png" ,
//"./res/img/fn kid.png" ,
//"./res/img/kevin.png" ,
//"./res/img/mecha.png"
//];

// canvas.width = 1280;
// canvas.height = 720;

// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, 1280, 720);

// ctx.fillStyle = "blue";
// ctx.fillRect(100, 200, 100, 200);

// ctx.strokeStyle = "red";
// ctx.strokeRect(400, 200, 100, 200);

// ctx.strokeStyle = "black";
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(100, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(200, 150);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(650, 255, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(800, 255, 50, 0, 4 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(800, 255, 40, 0, 4 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(650, 255, 40, 0, 4 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(725, 395, 40, 0, 4 * Math.PI);
// ctx.stroke();

// ctx.strokeStyle = "black";

// let busX = 200;
// let busXVelocity = 1;

// let busY = 200;
// let busYVelocity = 1;

// let bus = {
//   x: 200,
//   y: 200,
//   xVelocity: 1,
//   yVelocity: 1,
// };

// window.onload = () => {
//   setInterval(() => {
//       if (canvas.width <= bus.x + 200) {
//         bus.xVelocity *= -1;
//         battleBus.src = bossPaths[1];
//       }
//       if (bus.x <= 0) {
//         bus.xVelocity *= -1;
//         battleBus.src = bossPaths[3];
//       }
//       if (canvas.height <= bus.y + 200) {
//         bus.yVelocity *= -1;
//         battleBus.src = bossPaths[2];
//       }
//       if (bus.y <= 0) {
//         bus.yVelocity *= -1;
//         battleBus.src = bossPaths[4];
//         bossPaths[3] = bossPaths[0];
//       }

//       bus.x += bus.xVelocity;
//       bus.y += bus.yVelocity;

//       ctx.fillStyle = "white";
//       ctx.fillRect(0, 0, 1280, 720);
//       ctx.drawImage(battleBus, bus.x, bus.y, 200, 200);
//     },
//     0,
//     1
//   );
// };
