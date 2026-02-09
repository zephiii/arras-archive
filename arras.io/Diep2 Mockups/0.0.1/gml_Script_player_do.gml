if (keyboard_check(ord("N")))
    scorevalue += get_level(skilllevel);

while ((scorevalue - skilldeduction) >= get_level(skilllevel))
{
    skilldeduction += get_level(skilllevel);
    skilllevel += 1;
    skillpoints += 1;
    
    if (skilllevel == 15 || skilllevel == 30 || skilllevel == 45)
        upgrade = 1;
    
    my_Size = tank_get_size(skilllevel);
    my_Density = 1 + (0.1 * skilllevel);
    my_SetHealth = my_BodyHealth + skilllevel + stat_Health;
    entity_initalize();
}

for (var i = 0; i < 10 && skillpoints; i++)
{
    var k = translate_stats(i, "out");
    
    if (keyboard_check_pressed(ord(string((i + 1) % 10))) && skill[k] != 10 && !(skilllevel < 30 && skill[k] == 7))
    {
        skillpoints -= 1;
        skill[k] += 1;
        stats_do();
        my_SetHealth = my_BodyHealth + skilllevel + stat_Health;
    }
}

if (upgrade)
{
    var upgrades = upgrade_tree(_tank);
    var len = array_length_1d(upgrades);
    
    for (var i = 1; i < len; i++)
    {
        if (keyboard_check_pressed(ord(string_upper(get_upgrade_key(i)))))
        {
            _tank = set_gun(upgrades[i], 1);
            
            if (skilllevel < ((upgrades[0] + 1) * 15))
                upgrade = 0;
            
            break;
        }
    }
}

var facing = point_direction(x, y, mouse_x, mouse_y);
var key_shoot = mouse_check_button(mb_left);
var key_shoot_pressed = mouse_check_button_pressed(mb_left);
var key_up = keyboard_check(MoveKeys[1]);
var key_dn = keyboard_check(MoveKeys[2]);
var key_lf = keyboard_check(MoveKeys[3]);
var key_rg = keyboard_check(MoveKeys[4]);
var move_mass = mass / 145;
var horz = 0;
var vert = 0;
var rate = max(0, length(xspeed, yspeed) / my_MaxSpeed);
var powercoeff = 1;
var move = (my_Acceleration * powercoeff) / sqrt(move_mass);
var realtopspeed = stat_Mobility * topspeed * max(1 - (0.01 * skilllevel), 0.5);
my_Damp = move / realtopspeed;

if (key_up ^^ key_dn)
    vert = 1;

if (key_lf ^^ key_rg)
    horz = 1;

if (vert && horz)
    move *= 0.7071;

var vfrict = (my_Friction * yspeed) / my_Size;
var hfrict = (my_Friction * xspeed) / my_Size;

if (vert)
{
    if (key_up)
    {
        if (yaccel > 0)
            yaccel -= vfrict;
        
        yaccel -= move;
    }
    
    if (key_dn)
    {
        if (yaccel < 0)
            yaccel -= vfrict;
        
        yaccel += move;
    }
}
else
{
    yaccel -= vfrict;
}

if (horz)
{
    if (key_lf)
    {
        if (xaccel > 0)
            xaccel -= hfrict;
        
        xaccel -= move;
    }
    
    if (key_rg)
    {
        if (xaccel < 0)
            xaccel -= hfrict;
        
        xaccel += move;
    }
}
else
{
    xaccel -= hfrict;
}

for (var g = 0; g < my_GunNumber; g++)
{
    if (key_shoot_pressed && !g_armed[g])
        g_armed[g] += gunreload[g] * gundelay[g] * stat_Reload;
}

var sizey = 0.1 * my_Size;
var g_x, g_y, g_facing;

for (var g = 0; g < my_GunNumber; g++)
{
    g_facing[g] = gunangle[g] + facing;
    g_motion[g] += -my_Spring * g_position[g];
    g_position[g] += g_motion[g];
    
    if (g_position[g] < 0)
    {
        g_position[g] = 0;
        g_motion[g] = -g_motion[g];
    }
    
    if (g_motion[g] > 0)
    {
        var recoilforce = (gunrecoil[g] * g_motion[g] * my_ShockAbsorb) / 8;
        xaccel -= (recoilforce * dcos(g_facing[g]));
        yaccel += (recoilforce * dsin(g_facing[g]));
        g_motion[g] *= 1 - my_ShockAbsorb;
    }
    
    var gundistance = length(gunsetx[g], gunsety[g]);
    var gundirection = point_direction(0, 0, gunsetx[g], gunsety[g]) + g_facing[g];
    g_x[g] = lengthdir_x(gundistance, gundirection) + lengthdir_x((gunlength[g] - g_position[g]) / 2, g_facing[g]);
    g_y[g] = lengthdir_y(gundistance, gundirection) + lengthdir_y((gunlength[g] - g_position[g]) / 2, g_facing[g]);
    g_armed[g] -= min(1, g_armed[g]);
    
    while (key_shoot && g_armed[g] < 1)
    {
        g_motion[g] -= 4 * ln((stat_Speed * gunrecoil[g]) + 1);
        shoot_bullet(x + (sizey * g_x[g]), y + (sizey * g_y[g]), g_facing[g], my_Size, gunheight[g], g_armed[g], ds_list_find_value(gunsettings, g), array(stat_Damage, stat_Penetration, stat_Speed, stat_Strength));
        g_armed[g] += gunreload[g] * stat_Reload;
    }
}

if (entity_step())
{
    for (var g = 0; g < my_GunNumber; g++)
    {
        var theta = arctan((gunheight[g] * (gunaspect[g] - 1)) / gunlength[g]);
        var yoffset1 = 2 * tan(0.7853981633974483 - (theta / 2));
        var yoffset2 = 2 * tan(0.7853981633974483 + (theta / 2));
        var h1, h2;
        
        if (gunaspect[g] > 0)
        {
            h1 = sizey * gunheight[g];
            h2 = sizey * gunheight[g] * gunaspect[g];
        }
        else if (gunaspect[g] < 0)
        {
            h1 = -sizey * gunheight[g] * gunaspect[g];
            h2 = sizey * gunheight[g];
        }
        
        draw_rotated_trapezoid(x + 1 + (sizey * g_x[g]), y + 1 + (sizey * g_y[g]), (sizey * (gunlength[g] - g_position[g])) + 4, h1 + (2 * yoffset1), h2 + (2 * yoffset2), g_facing[g], merge_color(#888888, c_black, 0.4), fade_out);
        draw_rotated_trapezoid(x + 1 + (sizey * g_x[g]), y + 1 + (sizey * g_y[g]), sizey * (gunlength[g] - g_position[g]), h1, h2, g_facing[g], 8947848, fade_out);
    }
    
    entity_draw();
}
