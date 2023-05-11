class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

init() {
     const image = new Image(); 
     image.onload = () => {
        this.ctx.drawImage(image,0,0)
     };
     image.src = "/images/maps/test-map.jpg";

     const hero = new GameObject({
      x: 5,
      y: 6,
      src: "/images/red2.png"
     }) 
      setTimeout(() => { 
         hero.sprite.draw(this.ctx);
      }, 200)
      
      
    const keyFunction = (e,pressed) => {
        switch(e.key){
            case "z":
            case "ArrowUp":
                game.top(pressed);
                break;
            case "s":
            case "ArrowDown":
                game.bottom(pressed);
                break;
            case "q":
            case "ArrowLeft":
                game.left(pressed);
                break;
            case "d":
            case "ArrowRight":
                game.right(pressed);
                break;
            case " ":
            case "0":
                game.action(pressed);
                break;
            default:
                break;
        }
    }
    
    }
    top(pressed){
        // S'exécute dès qu'on utilise Z ou la flèche du haut.
        // S'exécute une fois lorsqu'on appuie, une fois lorsqu'on relache, avec "pressed"
        // à true ou à false alternativement
        if(pressed){
            this.direction.y = -1;
        }
        else {
            this.direction.y = 0;
        }
    }

    bottom(pressed){
        // Idem pour S et la flèche du bas
        if(pressed){
            this.direction.y = 1;
        }
        else {
            this.direction.y = 0;
        }
    }

    left(pressed){
        // Idem pour Q et la flèche de gauche
        if(pressed){
            this.direction.x = -1;
        }
        else {
            this.direction.x = 0;
        }
    }

    right(pressed){
        // Idem pour D et la flèche de droite
        if(pressed){
            this.direction.x = 1;
        }
        else {
            this.direction.x = 0;
        }
    }
}
