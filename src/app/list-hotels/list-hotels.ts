import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Hotel } from '../entites/hotel';
import { HotelService } from '../services/hotel';

@Component({
  selector: 'app-list-hotels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-hotels.html',
  styleUrls: ['./list-hotels.css']
})
export class ListHotelsComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this.hotelService.getAllHotels().subscribe({
      next: (data) => this.hotels = data,
      error: (err) => console.error(err)
    });
  }

}
