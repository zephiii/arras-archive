if (!check_in_view(x, y + 10, my_Size + 10))
    exit;

draw_set_color(my_Color);
drawdark = merge_color(my_Color, c_black, 0.4);
var guiratio = view_hport[0] / 2 / view_hview[0];
var X = guiratio * (x - view_xview[0]);
var Y = (guiratio * (y - view_yview[0])) + 10;
var guisize = guiratio * my_realSize;
var healthlength = my_Size;
var _health = 0;
var _shield = 0;

if (my_Ratio != 1 && DRAWHEALTH)
    _health = 1;

if (my_Shield != my_MaxShield && DRAWHEALTH)
    _shield = 1;

if (my_MaxShield != 0 && my_Shield == my_MaxShield && _health)
    _shield = 1;

if (_health || _shield)
{
    var healthamount = max(0, 2 * healthlength * (my_Health / my_MaxHealth));
    draw_set_alpha(fade_out);
    draw_set_color(merge_color(#888888, c_black, 0.4));
    draw_rectangle(X - 1 - healthlength, (Y + guisize) - 2, X + 1 + healthlength, Y + guisize + 2, false);
    draw_set_color(#39A016);
    draw_rectangle(X - healthlength, (Y + guisize) - 1, (X - healthlength) + healthamount, Y + guisize + 1, false);
}

if (_shield)
{
    var shieldamount = max(0, 2 * healthlength * (my_Shield / my_MaxShield));
    draw_set_alpha(0.8 * fade_out * shield_level(my_MaxShield, my_Shield));
    draw_set_color(merge_color(#3366D6, #820A66, 0.5));
    draw_rectangle(X - healthlength, (Y + guisize) - 1, (X - healthlength) + shieldamount, Y + guisize + 1, false);
}
