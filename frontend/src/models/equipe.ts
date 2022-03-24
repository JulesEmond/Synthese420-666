import { Ligue } from "./ligue";

export class Equipe{
    id : number;
    name: string;
    homeStadium: string;
    manager: string;
    coach: string;
    assistantCoach: string;
    
    ligue: Ligue
}