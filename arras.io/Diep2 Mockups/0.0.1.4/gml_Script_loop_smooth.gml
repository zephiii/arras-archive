var a = argument0 % 360;
var b = argument1 % 360;
var slow = argument2;
var diff = -angle_difference(a, b);
return diff / slow;
