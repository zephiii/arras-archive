if (my_Health <= 0 || AlreadyRanCollisions)
    return 0;

var did_collide = 0;
var stillselfhit = 0;

for (var i = 0; i < 2; i++)
{
    var n = instance_nth_nearest(x, y, 1, i + 2);
    
    if (ds_list_find_index(CollisionArray, n.id) == -1 && masterid != n.id && n.masterid != id && n.my_Health > 0 && n != id)
    {
        var goahead = 0;
        var combinedradius = my_Size + n.my_Size;
        var tock = min(stepremaining, n.stepremaining);
        var xdiff = x - n.x;
        var ydiff = y - n.y;
        var xdelt = tock * ((xspeed + xaccel) - n.xspeed - n.xaccel);
        var ydelt = tock * ((yspeed + yaccel) - n.yspeed - n.yaccel);
        var n_dist = instance_distance(n, id);
        var n_dir = point_direction(x, y, n.x, n.y);
        var xdir = dcos(n_dir);
        var ydir = -dsin(n_dir);
        var component = max(0, (xdir * xdelt) + (ydir * ydelt));
        
        if (!(component < (n_dist - combinedradius)))
        {
            var tmin = 1 - tock;
            var tmax = 1;
            var A = (xdelt * xdelt) + (ydelt * ydelt);
            var B = (2 * xdelt * xdiff) + (2 * ydelt * ydiff);
            var C = ((xdiff * xdiff) + (ydiff * ydiff)) - (combinedradius * combinedradius);
            var det = (B * B) - (4 * A * C);
            
            if (A == 0 || det < 0 || C < 0)
            {
                t = 0;
                
                if (C < 0)
                    goahead = 1;
            }
            else
            {
                var t1 = (-B - sqrt(det)) / (2 * A);
                var t2 = (-B + sqrt(det)) / (2 * A);
                
                if (t1 < tmin || t1 > tmax)
                {
                    if (t2 < tmin || t2 > tmax)
                    {
                        t = 0;
                    }
                    else
                    {
                        t = t2;
                        goahead = 1;
                    }
                }
                else if (t2 >= tmin && t2 <= tmax)
                {
                    t = min(t1, t2);
                    goahead = 1;
                }
                else
                {
                    t = t1;
                    goahead = 1;
                }
            }
            
            if (goahead)
            {
                if (t)
                {
                    x += ((xspeed + xaccel) * t);
                    y += ((yspeed + yaccel) * t);
                    n.x += (n.xspeed + n.xaccel) * t;
                    n.y += (n.yspeed + n.yaccel) * t;
                    stepremaining -= t;
                    n.stepremaining -= t;
                    xdiff = x - n.x;
                    ydiff = y - n.y;
                    n_dist = instance_distance(n, id);
                    n_dir = point_direction(x, y, n.x, n.y);
                    xdir = dcos(n_dir);
                    ydir = -dsin(n_dir);
                    component = max(0, (xdir * xdelt) + (ydir * ydelt));
                }
                
                var reductionfactor = 1;
                var accelerationfactor;
                
                if (length(xdelt, ydelt))
                    accelerationfactor = combinedradius / 4 / (floor(combinedradius / length(xdelt, ydelt)) + 1);
                else
                    accelerationfactor = 0.001;
                
                var mydepthfactor = clamp((combinedradius - n_dist) / (2 * my_Size), 0, 1);
                var n_depthfactor = clamp((combinedradius - n_dist) / (2 * n.my_Size), 0, 1);
                var combinedupdepthfactor = mydepthfactor * n_depthfactor;
                var combineddndepthfactor = (1 - mydepthfactor) * (1 - n_depthfactor);
                var mysqrpen = sqr(my_Penetration);
                var n_sqrpen = sqr(n.my_Penetration);
                var mysqrtpen = sqrt(my_Penetration);
                var n_sqrtpen = sqrt(n.my_Penetration);
                var combinedshieldfactor;
                
                if (n.shieldfactor)
                    combinedshieldfactor = (2 * arctan((1 - (0.8 * shieldfactor)) / (1 - (0.8 * n.shieldfactor)))) / pi;
                else if (shieldfactor)
                    combinedshieldfactor = 1;
                else
                    combinedshieldfactor = 0.5;
                
                if (id.masterid != n.masterid)
                {
                    var speedfactor;
                    
                    if (my_MaxSpeed)
                        speedfactor = sqrt(length(xspeed + xaccel, yspeed + yaccel) / my_MaxSpeed);
                    else
                        speedfactor = 1;
                    
                    var n_speedfactor;
                    
                    if (n.my_MaxSpeed)
                        n_speedfactor = sqrt(length(n.xspeed + n.xaccel, n.yspeed + n.yaccel) / n.my_MaxSpeed);
                    else
                        n_speedfactor = 1;
                    
                    var componentnorm = component / length(xdelt, ydelt);
                    var mydamage = 1 * my_Damage * my_Ratio * max(speedfactor, 1) * speedfactor;
                    var n_damage = 1 * n.my_Damage * n.my_Ratio * max(n_speedfactor, 1) * n_speedfactor;
                    
                    if (DamageEffects)
                        mydamage *= ((1 * accelerationfactor * (1 + ((componentnorm - 1) * (1 - n_depthfactor))) * ((1 + (n_sqrtpen * n_depthfactor)) - n_depthfactor)) / n_sqrtpen);
                    
                    if (n.DamageEffects)
                        n_damage *= ((1 * accelerationfactor * (1 + ((componentnorm - 1) * (1 - mydepthfactor))) * ((1 + (mysqrtpen * mydepthfactor)) - mydepthfactor)) / mysqrtpen);
                    
                    var mydamagetoapply = mydamage;
                    var n_damagetoapply = n_damage;
                    
                    if (n.my_MaxShield)
                        mydamagetoapply -= get_shield_damage(mydamagetoapply, n.my_MaxShield, n.my_Shield, n.my_Resist);
                    
                    if (my_MaxShield)
                        n_damagetoapply -= get_shield_damage(n_damagetoapply, my_MaxShield, my_Shield, my_Resist);
                    
                    var mybit = 1;
                    var n_bit = 1;
                    var stuff = get_health_damage(mydamagetoapply, n.my_Health, n.my_Resist);
                    
                    if (stuff > my_Health)
                        mybit = my_Health / stuff;
                    
                    stuff = get_health_damage(n_damagetoapply, my_Health, my_Resist);
                    
                    if (stuff > n.my_Health)
                        n_bit = n.my_Health / stuff;
                    
                    reductionfactor = min(mybit, n_bit);
                    var resistdiff = (n.my_Resist - my_Resist) + 1;
                    DamageRecieved += (n_damage * n_bit * resistdiff);
                    n.DamageRecieved += mydamage * mybit * (2 - resistdiff);
                    did_collide = 1;
                }
                else if (!selfhit && !n.selfhit)
                {
                    stillselfhit = 1;
                }
                
                if ((id.masterid != n.masterid || (selfhit && n.selfhit)) && my_Pushability && n.my_Pushability)
                {
                    var elasticity = 2 - ((4 * arctan(mysqrpen * n_sqrpen)) / pi);
                    
                    if (MotionEffects && n.MotionEffects)
                        elasticity *= ((my_Ratio / mysqrtpen) + (n.my_Ratio / n_sqrtpen));
                    
                    var spring = 0.5 * sqrt(my_Ratio * n.my_Ratio);
                    var elasticimpulse = (sqr(combineddndepthfactor) * elasticity * component * mass * n.mass) / (mass + n.mass);
                    var springimpulse = spring * combinedupdepthfactor;
                    var force = -(elasticimpulse + springimpulse) * reductionfactor * accelerationfactor;
                    var mymodifiers = combinedshieldfactor / mass / my_Penetration;
                    var n_modifiers = (1 - combinedshieldfactor) / n.mass / n.my_Penetration;
                    apply_acceleration(id, mymodifiers * force, n_dir);
                    apply_acceleration(n, -n_modifiers * force, n_dir);
                    did_collide = 1;
                }
                
                ds_list_add(n.CollisionArray, id);
                ds_list_add(CollisionArray, n.id);
            }
        }
    }
}

selfhit = stillselfhit;
AlreadyRanCollisions = 1;
return did_collide;
