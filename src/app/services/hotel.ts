import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../entites/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  // URL de ton backend Spring Boot
  private baseUrl = 'http://localhost:8080/hotels/api/hotels';

  constructor(private http: HttpClient) { }

  // Récupérer tous les hôtels
  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.baseUrl);
  }

  // Récupérer un hôtel par ID
  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.baseUrl}/${id}`);
  }

  // Ajouter un hôtel
  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.baseUrl, hotel);
  }

  // Mettre à jour un hôtel
  updateHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(this.baseUrl, hotel);
  }

  // Supprimer un hôtel
  deleteHotel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
