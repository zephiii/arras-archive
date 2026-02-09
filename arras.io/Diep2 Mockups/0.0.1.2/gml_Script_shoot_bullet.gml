var N = instance_create(argument0, argument1, Bullet);
var position = argument5;
var settings = argument6;
var skills = argument7;
var Damage = skills[0];
var Penetration = skills[1];
var Speed = skills[2];
var Strength = skills[3];
N.my_Size = (settings[3] * argument3 * argument4) / 20;
N.my_SetHealth = settings[4] * Strength;
N.my_Resist = 1 - power(0.7, settings[12] * (Strength - 1));
N.my_Penetration = max(1, settings[6] * Penetration * sqrt(Speed));
N.my_Damage = (settings[5] * Damage) / sqrt(Strength);
N.my_Density = settings[10] * Penetration * sqrt(Strength);
N.my_MaxSpeed = settings[8] * Speed;
N.range = settings[9] * 3 * 30;
N.my_Color = merge_color(my_Color, #820A66, random(0.1));
N.masterid = id;
N.my_Shield = 0;
N.selfhit = 0;
N.DRAWHEALTH = 0;
var d = argument2;
var s = settings[7] * Speed;
var ss;

do
    ss = gauss(0, settings[2]);
until (abs(ss) < (settings[2] * 2));

var sd;

do
    sd = gauss(0, settings[11] * sqrt(settings[2]));
until (abs(sd) < (settings[11] / 2));

N.xspeed = s * (ss + 1) * dcos(d + sd);
N.yspeed = s * (ss + 1) * -dsin(d + sd);
N.x += N.xspeed * position;
N.y += N.yspeed * position;
var extraboost = ((N.xspeed * xspeed) + (N.yspeed * yspeed)) / length(xspeed, yspeed) / length(N.xspeed, N.yspeed);
N.xspeed += max(0, extraboost) * xspeed;
N.yspeed += max(0, extraboost) * yspeed;
N.xaccel = 0;
N.yaccel = 0;

with (N)
    entity_initalize();
