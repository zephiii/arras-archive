var pointx = argument0;
var pointy = argument1;
var object = argument2;
var n = argument3;
var range = argument4 + my_realSize;
n = min(max(1, n), instance_number(object));
var list = ds_priority_create();
var nearest = -4;

with (object)
{
    var d = distance_to_point(pointx, pointy) - my_realSize;
    
    if (d <= range)
        ds_priority_add(list, id, distance_to_point(pointx, pointy));
}

repeat (n)
    nearest = ds_priority_delete_min(list);

ds_priority_destroy(list);
return nearest;
