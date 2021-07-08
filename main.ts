sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    Hopper.vy = -100
})
let projectile: Sprite = null
let speed = 0
let Hopper: Sprite = null
scene.setBackgroundColor(1)
Hopper = sprites.create(img`
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `, SpriteKind.Player)
Hopper.setPosition(20, 100)
info.setScore(0)
game.onUpdate(function () {
    if (Hopper.y < 100) {
        Hopper.ay = 250
    } else {
        Hopper.ay = 0
        Hopper.vy = 0
    }
})
game.onUpdateInterval(2000, function () {
    speed = -100
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . . 
        . . . . b b 3 3 3 3 b b . . . . 
        . . . c b 3 3 3 3 1 1 b c . . . 
        . . c b 3 3 3 3 3 1 1 1 b c . . 
        . c c 1 1 1 3 3 3 3 1 1 3 c c . 
        c c d 1 1 1 3 3 3 3 3 3 3 b c c 
        c b d d 1 3 3 3 3 3 1 1 1 b b c 
        c b b b 3 3 1 1 3 3 1 1 d d b c 
        c b b b b d d 1 1 3 b d d d b c 
        . c b b b b d d b b b b b b c . 
        . . c c b b b b b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        . . . . . . b 1 1 b . . . . . . 
        . . . . . . b 1 1 b b . . . . . 
        . . . . . b b d 1 1 b . . . . . 
        . . . . . b d d 1 1 b . . . . . 
        `, speed, 0)
    projectile.y = 104
    info.changeScoreBy(1)
})
