var _maxshield = argument0;
var _shieldlevel = argument1;
return 1 - power(abs((_shieldlevel / _maxshield) - 1), 2);
