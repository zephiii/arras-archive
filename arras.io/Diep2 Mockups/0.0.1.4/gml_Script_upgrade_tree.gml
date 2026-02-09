switch (argument0)
{
    case "basic":
        return array(1, "machine", "twin", "pounder", "sniper", "flank", "manager");
        break;
    
    case "manager":
        return array(2, "overseer", "cruiser");
        break;
    
    case "overseer":
        return array(3, "overlord", "overtrap");
        break;
    
    case "cruiser":
        return array(3, "carrier", "battle", "defend");
        break;
    
    case "pounder":
        return array(2, "destroy", "artillery", "builder");
        break;
    
    case "destroy":
        return array(3, "anni", "hotshot", "destroygun", "wubdub", "hybrid");
        break;
    
    case "artillery":
        return array(3, "spread", "mortar");
        break;
    
    case "builder":
        return array(3, "construct", "boombuild");
        break;
    
    case "twin":
        return array(2, "triplet", "bent", "double", "gunner");
        break;
    
    case "triplet":
        return array(3, "quint", "dual", "battle");
        break;
    
    case "bent":
        return array(3, "penta", "doublebent", "bentblaster");
        break;
    
    case "double":
        return array(3, "doublebent", "doubledouble", "doubletrap");
        break;
    
    case "gunner":
        return array(3, "heavy", "mortar");
        break;
    
    case "flank":
        return array(2, "hexa", "tri", "trap");
        break;
    
    case "trap":
        return array(3, "guntrap", "rifletrap", "doubletrap", "bomber", "defend");
        break;
    
    case "hexa":
        return array(3, "octo", "duodeca", "wubdub");
        break;
    
    case "tri":
        return array(3, "fighter", "booster", "bomber");
        break;
    
    case "sniper":
        return array(2, "hunter", "assass", "rifle");
        break;
    
    case "rifle":
        return array(3, "rifletrap", "longrifle", "multirifle");
        break;
    
    case "hunter":
        return array(3, "preda", "poach");
        break;
    
    case "assass":
        return array(3, "ranger", "buttbutt");
        break;
    
    case "machine":
        return array(2, "blaster", "gatling", "ministream", "doublemach");
        break;
    
    case "blaster":
        return array(3, "bentblaster", "machblaster", "flame");
        break;
    
    case "ministream":
        return array(3, "stream", "hotshot");
        break;
    
    case "gatling":
        return array(3, "sprayer", "howitzer");
        break;
    
    case "doublemach":
        return array(3, "triplemach", "halfnhalf");
        break;
    
    default:
        return 0;
}
