var X = argument0;
var Y = argument1;
var S = argument2;
var A = argument3;
var L = argument4;
var o = instance_create(X + lengthdir_x(S, A), Y + lengthdir_y(S, A), Foodstuffs);

with (o)
{
    food_define(L);
    entity_initalize();
}

o.ANGLE = A + irandom_range(90, 180);
o.masterid = masterid;
