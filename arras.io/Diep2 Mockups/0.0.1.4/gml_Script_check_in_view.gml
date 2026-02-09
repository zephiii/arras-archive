var xx = argument0;
var yy = argument1;
var size = argument2;
var vpos_x = view_xview[0];
var vpos_y = view_yview[0];
var vpos_w = view_wview[0];
var vpos_h = view_hview[0];

if (!(abs(xx - vpos_w - vpos_x) < (vpos_w + (size * 2)) && abs(yy - vpos_h - vpos_y) < (vpos_h + (size * 2))))
    return 0;

return 1;
