import { Hotel } from './hotel';

export interface Chambre {
    idChambre?: number;
    numero: string;
    type: string;
    prixParNuit: number;
    dateReservation: Date;
    hotel?: Hotel;           // référence vers l'hôtel
}
