import { Chambre } from "./chambre";

export interface Hotel {
    idHotel?: number;
    nomHotel: string;
    ville: string;
    adresse: string;
    chambres?: Chambre[];
}
