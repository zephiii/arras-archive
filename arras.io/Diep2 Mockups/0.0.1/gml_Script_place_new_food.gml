var xplace = argument0;
var yplace = argument1;
var scatter = argument2;
var level = argument3;
var attempts_remaining = 20;
var o;

repeat (attempts_remaining)
{
    xplace += gauss(0, scatter * 2);
    yplace += gauss(0, scatter * 2);
    o = instance_nearest(xplace, yplace, Foodstuffs);
    
    if (o == -4)
        break;
    else if (point_distance(xplace, yplace, o.x, o.y) > scatter)
        break;
    
    attempts_remaining -= 1;
}

if (!attempts_remaining)
{
    with (o)
        food_upgrade();
    
    exit;
}

if (xplace < 0 || yplace < 0 || xplace > room_width || yplace > room_height)
    exit;

o = instance_create(xplace, yplace, Foodstuffs);
o.ANGLE = irandom(360);
o.masterid = masterid;

with (o)
{
    food_define(level);
    apply_acceleration(id, 1 / sqr(level), irandom(360));
    entity_initalize();
}
