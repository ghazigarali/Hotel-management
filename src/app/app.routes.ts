import { Routes } from '@angular/router';
import { ListHotelsComponent } from './list-hotels/list-hotels';
import { AddHotelComponent } from './add-hotel/add-hotel';
import { AddChambre } from './add-chambre/add-chambre';
import {ListChambresComponent} from './list-chambres/list-chambres'


export const routes: Routes = [
  { path: '', redirectTo: '/list-hotels', pathMatch: 'full' },
  { path: 'list-hotels', component: ListHotelsComponent },
  { path: 'add-hotel', component: AddHotelComponent },
  { path: "list-chambres", component: ListChambresComponent },
  { path: "add-chambre", component: AddChambre },
  { path: "", redirectTo: "list-hotels", pathMatch: "full" }
];

