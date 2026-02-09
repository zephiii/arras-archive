switch (argument0)
{
    case "basic":
        return array(1, "machine", "twin", "pounder", "sniper", "flank");
        break;
    
    case "pounder":
        return array(2, "destroy", "artillery");
        break;
    
    case "destroy":
        return array(3, "anni", "hotshot", "destroygun", "deathstar");
        break;
    
    case "artillery":
        return array(3, "spread", "mortar");
        break;
    
    case "twin":
        return array(2, "triplet", "bent", "double", "gunner");
        break;
    
    case "triplet":
        return array(3, "quint", "dual");
        break;
    
    case "bent":
        return array(3, "penta", "doublebent", "bentblaster");
        break;
    
    case "double":
        return array(3, "doublebent", "doubledouble");
        break;
    
    case "gunner":
        return array(3, "heavy", "mortar");
        break;
    
    case "flank":
        return array(2, "hexa", "tri");
        break;
    
    case "hexa":
        return array(3, "octo", "duodeca", "wubdub");
        break;
    
    case "tri":
        return array(3, "fighter", "booster");
        break;
    
    case "sniper":
        return array(2, "hunter", "assass");
        break;
    
    case "hunter":
        return array(3, "preda");
        break;
    
    case "assass":
        return array(3, "ranger", "buttbutt");
        break;
    
    case "machine":
        return array(2, "blaster", "gatling", "ministream", "doublemach");
        break;
    
    case "blaster":
        return array(3, "bentblaster", "machblaster");
        break;
    
    case "ministream":
        return array(3, "stream", "hotshot");
        break;
    
    case "gatling":
        return array(3, "sprayer");
        break;
    
    case "doublemach":
        return array(3, "triplemach", "halfnhalf");
        break;
    
    default:
        return 0;
}
