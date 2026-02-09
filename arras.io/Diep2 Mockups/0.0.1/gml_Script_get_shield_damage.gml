var _damagetoapply = argument0;
var _maxshield = argument1;
var _shieldlevel = argument2;
var _resist = 1 + argument3 + argument3;
var _shieldfactor = shield_level(_maxshield, _shieldlevel);
return min(_resist * _damagetoapply * _shieldfactor, _maxshield);
