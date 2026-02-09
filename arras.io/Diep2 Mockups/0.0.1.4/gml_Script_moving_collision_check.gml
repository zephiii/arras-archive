var xinital1 = argument0;
var yinital1 = argument1;
var xinital2 = argument2;
var yinital2 = argument3;
var xfinal1 = argument4 + xinital1;
var yfinal1 = argument5 + yinital1;
var xfinal2 = argument6 + xinital2;
var yfinal2 = argument7 + xinital2;
var buffer = argument8;
var tmin = min(argument9, argument10);
var tmax = 1;
var AA = xinital1 - xinital2;
var BB = xfinal2 - xfinal1;
var CC = yinital1 - yinital2;
var DD = yfinal2 - yfinal1;
var sqrAA = sqr(AA);
var sqrBB = sqr(BB);
var sqrCC = sqr(CC);
var sqrDD = sqr(DD);
var AB = AA * BB;
var CD = CC * DD;
var A = (((sqrAA - (2 * AB)) + sqrBB + sqrCC) - (2 * CD)) + sqrDD;
var B = ((AB - sqrAA) + CD) - sqrCC;
var C = (sqrAA + sqrCC) - buffer;
var det = (B * B) - (4 * A * C);

if (A == 0 || det < 0)
    return 0;

var t1 = (-B - sqrt(det)) / (2 * A);
var t2 = (-B + sqrt(det)) / (2 * A);

if (t1 <= tmin || t1 > tmax)
{
    if (t2 <= tmin || t2 > tmax)
        return 0;
    
    return t2;
}

if (t2 > tmin && t2 <= tmax)
    return min(t1, t2);

return t1;
