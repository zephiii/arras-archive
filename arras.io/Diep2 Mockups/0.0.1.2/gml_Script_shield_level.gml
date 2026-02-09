var _maxshield = argument0;
var _shieldlevel = argument1;
return 1 - power(abs(clamp(_shieldlevel / _maxshield, 0, 1) - 1), 2);
