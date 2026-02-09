var _damagetoapply = argument0;
var _maxshield = argument1;
var _shieldlevel = argument2;
var nothing = argument3;
return min(_damagetoapply * shield_level(_maxshield, _shieldlevel), _maxshield);
