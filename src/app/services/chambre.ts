import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../entites/chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  // ✅ URL de ton backend Spring Boot pour les chambres
  private baseUrl = 'http://localhost:8080/hotels/api';

  constructor(private http: HttpClient) { }

  // 🔹 Récupérer toutes les chambres
  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.baseUrl);
  }

  // 🔹 Récupérer une chambre par ID
  getChambreById(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.baseUrl}/${id}`);
  }

  // 🔹 Ajouter une nouvelle chambre
  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.baseUrl, chambre);
  }

  // 🔹 Mettre à jour une chambre existante
  updateChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(this.baseUrl, chambre);
  }

  // 🔹 Supprimer une chambre
  deleteChambre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
