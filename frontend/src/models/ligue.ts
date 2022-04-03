import { Gestionnaire } from "./gestionnaire";

export class Ligue{
    id : number;
    name: string;
    address: string;
    description: string;
    sport: string;
    privacy: string;
    
    gestionnaire: Gestionnaire;
}