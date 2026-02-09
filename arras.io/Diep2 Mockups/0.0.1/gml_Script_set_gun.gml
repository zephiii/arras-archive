var UPDATE = argument1;
var gunplacing = ds_list_create();
var _basic, _BLANK, _pound, _destroy, _sniper, _hunter, _hunter2, _mach, _flank, _halfrecoil, _lowpower, _twin, _triple, _quint, _2reload, _settings;

if (UPDATE)
{
    if (!variable_instance_exists(id, "gunsettings"))
        gunsettings = ds_list_create();
    else
        ds_list_clear(gunsettings);
    
    _settings = array(1, 6, 10, 1, 1);
    _basic = array(20, 0.5, 0.1, 1, 1, 1, 1, 5, 4, 1, 1, 15, 1);
    _BLANK = array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    _pound = array(2, 3, 0.5, 1, 2, 2, 3, 0.6, 0.6, 1, 1.25, 1, 1);
    _destroy = array(2, 2, 0.5, 1, 1, 2, 1, 1, 0.6, 1, 1.1, 1, 1.5);
    _sniper = array(1.5, 1.5, 0.25, 1, 2, 2, 2, 1.5, 2, 2, 1, 0.2, 1);
    _hunter = array(1.25, 0.7, 1, 1, 0.7, 0.8, 1, 1.2, 1.2, 1.2, 1, 1, 0.9);
    _hunter2 = array(1, 1, 1, 0.9, 3, 0.33, 2, 1, 1, 1, 1.5, 1, 1.2);
    _mach = array(0.5, 1, 2, 1, 0.8, 0.8, 1, 1, 1, 1, 1, 2, 1);
    _flank = array(1.2, 1.2, 1, 1, 1.5, 0.9, 0.8, 0.8, 1, 1, 1, 1, 1);
    _twin = array(1, 0.5, 0.9, 1, 1, 0.667, 1, 1, 1.5, 1, 1, 0.9, 1);
    _triple = array(1.5, 0.667, 0.9, 1, 1, 1, 1, 1.1, 1.1, 1, 1.1, 0.9, 1);
    _quint = array(1.5, 0.667, 0.9, 1, 1, 0.75, 1, 1.1, 1.1, 1, 1.1, 0.9, 1);
    _2reload = array(0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    var _halfreload = array(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    _halfrecoil = array(1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    _lowpower = array(1, 1, 2, 1, 1, 0.5, 0.7, 0.7, 1, 1, 1, 1, 0.5);
}

switch (argument0)
{
    case "basic":
        if (UPDATE)
        {
            ds_list_add(gunsettings, multiply_array(_basic, _BLANK));
            _settings = multiply_array(array(1, 1, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 0, 0));
        break;
    
    case "pounder":
        if (UPDATE)
        {
            ds_list_add(gunsettings, multiply_array(_basic, _pound));
            _settings = multiply_array(array(1, 1, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(20, 12, 1, 0, 0, 0, 0));
        break;
    
    case "destroy":
        if (UPDATE)
        {
            ds_list_add(gunsettings, multiply_array(_basic, _pound, _destroy));
            _settings = multiply_array(array(1, 0.9, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(19, 15, 1, 0, 0, 0, 0));
        break;
    
    case "anni":
        if (UPDATE)
        {
            ds_list_add(gunsettings, multiply_array(_basic, _pound, _destroy));
            _settings = multiply_array(array(1, 0.85, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(19.5, 19.5, 1, 0, 0, 0, 0));
        break;
    
    case "sniper":
        if (UPDATE)
        {
            ds_list_add(gunsettings, multiply_array(_basic, _sniper));
            _settings = multiply_array(array(0.5, 0.8, 1, 1, 1.1), _settings);
        }
        
        ds_list_add(gunplacing, array(22, 8, 1, 0, 0, 0, 0));
        break;
    
    case "hunter":
        if (UPDATE)
        {
            ds_list_add(gunsettings, multiply_array(_basic, _sniper, _hunter, _hunter2));
            ds_list_add(gunsettings, multiply_array(_basic, _sniper, _hunter));
            _settings = multiply_array(array(0.5, 0.7, 1, 1, 1.15), _settings);
        }
        
        ds_list_add(gunplacing, array(22, 8, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(19.5, 11.5, 1, 0, 0, 0, 0.2));
        break;
    
    case "preda":
        if (UPDATE)
        {
            ds_list_add(gunsettings, multiply_array(_basic, _sniper, _hunter, _hunter2, _hunter2));
            ds_list_add(gunsettings, multiply_array(_basic, _sniper, _hunter, _hunter2));
            ds_list_add(gunsettings, multiply_array(_basic, _sniper, _hunter));
            _settings = multiply_array(array(0.5, 0.65, 1, 1, 1.15), _settings);
        }
        
        ds_list_add(gunplacing, array(22, 8, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(19.5, 11.5, 1, 0, 0, 0, 0.2));
        ds_list_add(gunplacing, array(17, 14, 1, 0, 0, 0, 0.4));
        break;
    
    case "machine":
        if (UPDATE)
        {
            ds_list_add(gunsettings, multiply_array(_basic, _mach));
            _settings = multiply_array(array(1, 1, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(20, 8, 2, 0, 0, 0, 0));
        break;
    
    case "flank":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _flank);
            ds_list_add(gunsettings, gun, gun, gun);
            _settings = multiply_array(array(1, 1, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 120, 0));
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 240, 0));
        break;
    
    case "tri":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _flank, _halfrecoil);
            var booster = multiply_array(_basic, _flank, _lowpower);
            ds_list_add(gunsettings, gun, booster, booster);
            _settings = multiply_array(array(1.1, 1.1, 0.9, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(20, 8, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(16, 8, 1, 0, 0, 145, 0));
        ds_list_add(gunplacing, array(16, 8, 1, 0, 0, 215, 0));
        break;
    
    case "booster":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _flank, _halfrecoil);
            var booster = multiply_array(_basic, _flank, _lowpower);
            ds_list_add(gunsettings, gun, booster, booster, booster, booster);
            _settings = multiply_array(array(1.1, 1.1, 0.7, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(20, 8, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(15, 7, 1, 0, 0, 130, 0.5));
        ds_list_add(gunplacing, array(15, 7, 1, 0, 0, 230, 0.5));
        ds_list_add(gunplacing, array(16, 8, 1, 0, 0, 145, 0));
        ds_list_add(gunplacing, array(16, 8, 1, 0, 0, 215, 0));
        break;
    
    case "fighter":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _flank, _halfrecoil);
            var sidegun = multiply_array(_basic, _flank, _flank);
            var booster = multiply_array(_basic, _flank, _lowpower);
            ds_list_add(gunsettings, gun, sidegun, sidegun, booster, booster);
            _settings = multiply_array(array(1.1, 1.1, 0.9, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(20, 8, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(17, 7, 1, 0, 1, 90, 0));
        ds_list_add(gunplacing, array(17, 7, 1, 0, -1, 270, 0));
        ds_list_add(gunplacing, array(16, 8, 1, 0, 0, 145, 0));
        ds_list_add(gunplacing, array(16, 8, 1, 0, 0, 215, 0));
        break;
    
    case "hexa":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _flank, _flank);
            ds_list_add(gunsettings, gun, gun, gun, gun, gun, gun);
            _settings = multiply_array(array(1, 1, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 120, 0));
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 240, 0));
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 60, 0.5));
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 180, 0.5));
        ds_list_add(gunplacing, array(18, 8, 1, 0, 0, 300, 0.5));
        break;
    
    case "octo":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _flank, _flank);
            ds_list_add(gunsettings, gun, gun, gun, gun, gun, gun, gun, gun);
            _settings = multiply_array(array(1, 1, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 90, 0));
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 180, 0));
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 270, 0));
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 45, 0.5));
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 135, 0.5));
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 225, 0.5));
        ds_list_add(gunplacing, array(19, 8, 1, 0, 0, 315, 0.5));
        break;
    
    case "duodeca":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _flank, _flank, _flank);
            ds_list_add(gunsettings, gun, gun, gun, gun, gun, gun, gun, gun, gun, gun, gun, gun);
            _settings = multiply_array(array(1, 1, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 0, 0));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 120, 2/3));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 240, 1/3));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 60, 1/3));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 180, 0));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 300, 2/3));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 30, 0.16666666666666666));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 150, 0.8333333333333334));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 270, 0.5));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 90, 0.5));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 210, 0.16666666666666666));
        ds_list_add(gunplacing, array(16, 6, 1, 0, 0, 330, 0.8333333333333334));
        break;
    
    case "twin":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _twin);
            ds_list_add(gunsettings, gun, gun);
            _settings = multiply_array(array(1, 1, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(20, 8, 1, 0, 5.5, 0, 0));
        ds_list_add(gunplacing, array(20, 8, 1, 0, -5.5, 0, 0.5));
        break;
    
    case "triplet":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _twin, _triple);
            ds_list_add(gunsettings, gun, gun, gun);
            _settings = multiply_array(array(1, 0.7, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(18, 9, 1, 0, -5, 0, 0.5));
        ds_list_add(gunplacing, array(18, 9, 1, 0, 5, 0, 0.5));
        ds_list_add(gunplacing, array(21, 9, 1, 0, 0, 0, 0));
        break;
    
    case "quint":
        if (UPDATE)
        {
            var gun = multiply_array(_basic, _twin, _triple, _quint);
            ds_list_add(gunsettings, gun, gun, gun, gun);
            ds_list_add(gunsettings, multiply_array(_2reload, gun));
            _settings = multiply_array(array(1, 0.7, 1, 1, 1), _settings);
        }
        
        ds_list_add(gunplacing, array(16, 10, 1, 0, -5, 0, 0.667));
        ds_list_add(gunplacing, array(16, 10, 1, 0, 5, 0, 0.667));
        ds_list_add(gunplacing, array(19, 10, 1, 0, -3, 0, 0.333));
        ds_list_add(gunplacing, array(19, 10, 1, 0, 3, 0, 0.333));
        ds_list_add(gunplacing, array(22, 10, 1, 0, 0, 0, 0));
        break;
}

if (UPDATE)
{
    my_Acceleration = _settings[0];
    topspeed = _settings[1];
    realtopspeed = topspeed;
    my_BodyHealth = _settings[2];
    my_Damage = _settings[3];
    my_FOV = _settings[4];
    my_MaxSpeed = 0;
    my_GunNumber = ds_list_size(gunsettings);
    
    for (var i = 0; i < my_GunNumber; i++)
    {
        var settings = ds_list_find_value(gunsettings, i);
        var position = ds_list_find_value(gunplacing, i);
        g_motion[i] = 0;
        g_position[i] = 0;
        gunreload[i] = settings[0];
        gunrecoil[i] = settings[1];
        gunshudder[i] = settings[2];
        gunlength[i] = position[0];
        gunheight[i] = position[1];
        gunaspect[i] = position[2];
        gunsetx[i] = position[3];
        gunsety[i] = position[4];
        gunangle[i] = position[5];
        gundelay[i] = position[6];
        g_armed[i] = gunreload[i] * gundelay[i] * stat_Reload;
    }
    
    ds_list_destroy(gunplacing);
    return argument0;
}
else
{
    return gunplacing;
}
