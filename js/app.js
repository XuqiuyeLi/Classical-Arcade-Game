var Enemy = function(x, y) {
    "use strict";
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    // set x,y coordinate for each enemy object location
    this.width = 88;
    this.height = 67;
    // make enemy as a rectangular object for checking collisions
    this.speed = 100 + 50 * Math.random();
    // generate random speed for each enemy
};


Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    this.checkCollisions();
    if (this.x > 500) {
        this.reset();
    }
};

Enemy.prototype.reset = function() {
    this.x = 0;
};
Enemy.prototype.checkCollisions = function() {
    if (this.x < player.x + player.width &&
        this.x + this.width > player.x &&
        this.y < player.y + player.height &&
        this.height + this.y > player.y) {
        // collision detected!
        player.reset();
    }
}


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
    "use strict";
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 400;
    this.width = 70;
    this.height = 80;
};

Player.prototype.update = function(dt) {
    // Not sure what I should include here..
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
    // take the inputs of entered key

    if (this.y < 80) {
        this.reset();
        // need a player.prototype.reset();
    } else if (input === 'left' && this.x > 40) {
        // only changes the location if x > 60
        this.x = this.x - 30;
    } else if (input === 'right' && this.x < 400) {
        this.x = this.x + 30;
    } else if (input === 'down' && this.y < 400) {
        this.y = this.y + 50;
    } else if (input === 'up' && this.y > 80) {
        this.y = this.y - 50;
        // the location remains the same when the player tries to move off the screen.
    }
};

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
}

var player = new Player();

var amy = new Enemy(-150, 150);
var ben = new Enemy(-400, 200);
var cathy = new Enemy(-200, 100);
var daniel = new Enemy(-300, 250);
var elena = new Enemy(-550, 180);
var frank = new Enemy(-50, 180);

var allEnemies = [
    amy,
    ben,
    cathy,
    daniel,
    elena,
    frank
];