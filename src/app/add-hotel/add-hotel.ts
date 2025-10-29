import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel } from '../entites/hotel';
import { HotelService } from '../services/hotel';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-hotel.html',
  styleUrls: ['./add-hotel.css']
})
export class AddHotelComponent {

  hotel: Hotel = { nomHotel: '', ville: '', adresse: '' };

  constructor(private hotelService: HotelService, private router: Router) {}

  addHotel() {
    this.hotelService.addHotel(this.hotel).subscribe({
      next: () => {
        alert("Hôtel ajouté avec succès !");
        this.router.navigate(['/hotels']);
      },
      error: (err) => console.error(err)
    });
  }

}
