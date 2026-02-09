var argx = argument0;
var argy = argument1;
var argn = argument2;
var argl = argument3;
var arga = argument4;
var c = argument5;
var a = argument6;

if (argn < 0)
{
    var _dip = 1 - (6 / argn / argn);
    argn = -2 * argn;
    draw_primitive_begin(pr_trianglelist);
    var bb = 1;
    
    for (var i = 0; i < (argn - 2); i++)
    {
        draw_vertex_color(argx + lengthdir_x(argl * _dip, arga), argy + lengthdir_y(argl * _dip, arga), c, a);
        var aa = (i + 1) * (360 / argn);
        draw_vertex_color(argx + lengthdir_x(argl * bb, arga + aa), argy + lengthdir_y(argl * bb, arga + aa), c, a);
        aa = (i + 2) * (360 / argn);
        
        if (bb == 1)
            bb = _dip;
        else
            bb = 1;
        
        draw_vertex_color(argx + lengthdir_x(argl * bb, arga + aa), argy + lengthdir_y(argl * bb, arga + aa), c, a);
    }
    
    draw_primitive_end();
}
else
{
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
}
