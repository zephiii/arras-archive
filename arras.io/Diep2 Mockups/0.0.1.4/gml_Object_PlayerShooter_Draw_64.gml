event_inherited();
draw_set_valign(fa_top);
draw_set_halign(fa_left);
var text = "REL: " + string(stat_Reload) + "#" + "PEN: " + string(stat_Penetration) + "#" + "STR: " + string(stat_Strength) + "#" + "DAM: " + string(stat_Damage) + "#" + "SPD: " + string(stat_Speed) + "#" + "RST: " + string(stat_BulletResist) + "#" + "#" + "SHI: " + string(stat_Shield) + "#" + "ATK: " + string(stat_Attack) + "#" + "HLT: " + string(stat_Health) + "#" + "MOB: " + string(stat_Mobility) + "#" + "REG: " + string(stat_Regeneration);
draw_text_diep(10, 200, text, 16777215, 12, 0, 1, 20);
