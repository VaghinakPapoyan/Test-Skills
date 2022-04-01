// Create Canvas
var canvas = document.createElement("canvas");

// Get Context
var ctx = canvas.getContext('2d');

// Function For Canvas Settings
export function createCanvas (width, height, backgroundColor, element) 
{
	// Set Canvas size
	canvas.width = width;
	canvas.height = height;
	console.log(element);
	element?.current.appendChild(canvas)

	// Fill Canvas
	canvas.style.backgroundColor = backgroundColor;
}

// Class Snake
export class SnakeGame
{
	// Snake Settings
	constructor(snakeWidth, snakeHeight, snakeSpeed, snakeColor)
	{
		this.width = snakeWidth;
		this.height = snakeHeight;
		this.speed = snakeSpeed;
		this.snakeColor = snakeColor;
		this.x = canvas.width / 2 - (this.width / 2);
		this.y = canvas.height / 2 - (this.height / 2);
		this.xspeed = 0;
		this.yspeed = 0;
		this.applex =  (Math.random() * (canvas.width - this.width));
		this.appley =  (Math.random() * (canvas.height - this.height));
		this.score = 0;
		this.childs = [];
		this.lastPos = [];
		this.childDistance = 4;
		this.gameOver = false;
	}

	start()
	{
		document.body.addEventListener("keydown", e => this.changeDirection(e))
		ctx.fillStyle = this.snakeColor;
		requestAnimationFrame(this.game.bind(this));
	}

	changeDirection(event)
	{
		if ((event.key.toLowerCase() == "a" || event.key.toLowerCase() == "arrowleft") && this.xspeed == 0) 
		{
			this.xspeed = -1 * this.speed / 60;
			this.yspeed = 0;
		}
		else if ((event.key.toLowerCase() == "d" || event.key.toLowerCase() == "arrowright") && this.xspeed == 0) 
		{
			this.xspeed = 1 * this.speed / 60;
			this.yspeed = 0;
		}
		else if ((event.key.toLowerCase() == "w" || event.key.toLowerCase() == "arrowup") && this.yspeed == 0) 
		{
			this.yspeed = -1 * this.speed / 60;
			this.xspeed = 0;
		}
		else if ((event.key.toLowerCase() == "s" || event.key.toLowerCase() == "arrowdown") && this.yspeed == 0) 
		{
			this.yspeed = 1 * this.speed / 60;
			this.xspeed = 0;
		}
	}

	appleSpawn()
	{
		ctx.fillStyle = "#CF4647";
		ctx.fillRect(this.applex, this.appley, this.width, this.height)
		ctx.fill();
	}

	changeApple()
	{
		this.score++;
		document.getElementById("score").innerHTML = "Your Score: " + this.score;
		this.applex = (Math.random() * (canvas.width - this.width));
		this.appley = (Math.random() * (canvas.height - this.height));
	}

	clear()
	{
		ctx.fillStyle = "#303841";
		ctx.fillRect(0, 0, canvas.width, canvas.height)
		ctx.fill();
	}

	teleport()
	{
		if (this.x + (this.width / 2) > canvas.width) 
		{
			this.x = 0 - (this.width / 2);
		}
		else if (this.x < 0 - this.width / 2) 
		{
			this.x = canvas.width - (this.width / 2);
		}
		else if (this.y < 0 - this.height / 2) 
		{
			this.y = canvas.width - (this.height / 2);
		}
		else if (this.y > canvas.height - (this.height / 2)) 
		{
			this.y = 0 - (this.height / 2);
		}
	}

	move()
	{
		this.x += this.xspeed;
		this.y += this.yspeed;
	}

	appleCollider()
	{
		if (this.x + this.width >= this.applex && this.x <= this.applex + this.width && this.y + this.height >= this.appley && this.y <= this.appley + this.height) 
		{
			this.changeApple()
		}
	}

	restart()
	{
		document.querySelector(".restart").classList.remove("active");
	}

	drawSnake()
	{
		ctx.fillStyle = this.snakeColor;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.fill();
		for (let i = 0; i < this.childs.length; i++) 
		{
			if(i != this.childs.length - 2 && this.childs.length - 1 != this.childs[i].id )
			{
				if (this.x + this.width >= this.childs[i]?.x && this.x <= this.childs[i]?.x + this.width && this.y + this.height >= this.childs[i]?.y && this.y <= this.childs[i]?.y + this.height) 
				{
					this.gameOver = true;
					setTimeout(() => 
						{
							document.querySelector(".restart").classList.add("active");
						}, 800);
				}
			}
			ctx.fillStyle = this.snakeColor;
			ctx.fillRect(this.childs[i]?.x, this.childs[i]?.y, this.width, this.height);
			ctx.fill();
		}
	}

	childPosition()
	{
		this.lastPos.push({
			x: this.x,
			y: this.y
		})
		if (this.lastPos.length > this.childDistance * this.score) 
		{
			this.lastPos.shift();
		}
		this.childs = [];
		if (this.score != this.childs.length) 
		{
			for (let i = 0; i <= this.lastPos.length; i += this.childDistance) 
			{
				this.childs.push({...this.lastPos[i], id: i / 4})
			}
		}
	}

	snakeCollider()
	{
	}

	game()
	{
		if (!this.gameOver) 
		{
			this.move();
			this.teleport();
			this.clear();
			this.appleSpawn();
			this.appleCollider();
			this.snakeCollider();
			this.drawSnake();
			this.childPosition();
		}
		requestAnimationFrame(this.game.bind(this));
	}
}