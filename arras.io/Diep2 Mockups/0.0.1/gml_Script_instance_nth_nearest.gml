var pointx = argument0;
var pointy = argument1;
var object = argument2;
var n = argument3;
n = min(max(1, n), instance_number(object));
var list = ds_priority_create();
var nearest = -4;

with (object)
    ds_priority_add(list, id, point_distance(x, y, pointx, pointy));

repeat (n)
    nearest = ds_priority_delete_min(list);

ds_priority_destroy(list);
return nearest;
