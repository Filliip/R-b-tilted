export class Enemy {

static entitiesData;

  constructor(name, hp, dmg, imagePath, width, height, velocity, type) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.imagePath = imagePath;
    this.img = new Image();
    this.img.src = this.imagePath;
    this.position = {
      x: 0,
      y: 0,
    };
    if (type == "ground"){
      this.position.y =600;
    }
    this.ratio = 0.5;
    this.size = {
      width: 200 * this.ratio,
      height: 200 * this.ratio,
    };
    this.velocity = {
        x:5,
        y:0,
    };
    this.type = type;
  }
  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }


  update() {
    this.move();
  }

  move() {
    this.position.x += this.velocity.x;
    if (this.position.x >= 550) {
    this.velocity.x *=-1;
    }
    if (this.position.x <= 0){
        this.velocity.x *= -1;
    }
  }
}


//const myEnemy = new  Enemy("Enemy 1", 100, 12);
