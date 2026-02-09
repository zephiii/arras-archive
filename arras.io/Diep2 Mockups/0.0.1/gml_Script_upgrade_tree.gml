switch (argument0)
{
    case "basic":
        return array(1, "machine", "twin", "pounder", "sniper", "flank");
        break;
    
    case "pounder":
        return array(2, "destroy");
        break;
    
    case "destroy":
        return array(3, "anni");
        break;
    
    case "twin":
        return array(2, "triplet");
        break;
    
    case "triplet":
        return array(3, "quint");
        break;
    
    case "flank":
        return array(2, "hexa", "tri");
        break;
    
    case "hexa":
        return array(3, "octo", "duodeca");
        break;
    
    case "tri":
        return array(3, "fighter", "booster");
        break;
    
    case "sniper":
        return array(2, "hunter");
        break;
    
    case "hunter":
        return array(3, "preda");
        break;
    
    default:
        return 0;
}
