import { Component, OnInit } from '@angular/core';
import { Chambre } from '../entites/chambre';
import { ChambreService } from '../services/chambre';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-chambres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-chambres.html',
  styleUrls: ['./list-chambres.css'],
})
export class ListChambresComponent implements OnInit {
  chambres: Chambre[] = [];
  filteredChambres: Chambre[] = [];
  searchNumero: string = '';

  constructor(private chambreService: ChambreService) {}

  ngOnInit(): void {
    this.getChambres();
  }

  getChambres(): void {
    this.chambreService.getAllChambres().subscribe({
      next: (data) => {
        this.chambres = data;
        this.filteredChambres = data;
      },
      error: (err) => console.error('Erreur lors du chargement des chambres :', err),
    });
  }

  onEdit(id: number | undefined): void {
    if (id !== undefined) {
      console.log('Modifier chambre ID:', id);
      // tu pourras ici naviguer vers une page d’édition :
      // this.router.navigate(['/edit-chambre', id]);
    }
  }

  onDelete(id: number | undefined): void {
    if (id !== undefined && confirm('Voulez-vous vraiment supprimer cette chambre ?')) {
      this.chambreService.deleteChambre(id).subscribe({
        next: () => {
          console.log('Chambre supprimée avec succès.');
          this.getChambres();
        },
        error: (err) => console.error('Erreur suppression:', err),
      });
    }
  }

  onSearchChambre(): void {
    const search = this.searchNumero.toLowerCase().trim();
    if (search === '') {
      this.filteredChambres = this.chambres;
    } else {
      this.filteredChambres = this.chambres.filter(ch =>
        ch.numero.toLowerCase().includes(search)
      );
    }
  }
}

