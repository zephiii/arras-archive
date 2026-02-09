var argx = argument0;
var argy = argument1;
var argn = argument2;
var argl = argument3;
var arga = argument4;
var c = argument5;
var a = argument6;
draw_primitive_begin(pr_trianglelist);

for (var i = 0; i < (argn - 2); i++)
{
    draw_vertex_color(argx + lengthdir_x(argl, arga), argy + lengthdir_y(argl, arga), c, a);
    var aa = (i + 1) * (360 / argn);
    draw_vertex_color(argx + lengthdir_x(argl, arga + aa), argy + lengthdir_y(argl, arga + aa), c, a);
    aa = (i + 2) * (360 / argn);
    draw_vertex_color(argx + lengthdir_x(argl, arga + aa), argy + lengthdir_y(argl, arga + aa), c, a);
}

draw_primitive_end();
