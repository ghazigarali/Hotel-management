import { Routes } from '@angular/router';
import { ListHotelsComponent } from './list-hotels/list-hotels';
import { AddHotelComponent } from './add-hotel/add-hotel';


export const routes: Routes = [
  { path: '', redirectTo: '/list-hotels', pathMatch: 'full' },  // <-- "full"
  { path: 'list-hotels', component: ListHotelsComponent },
  { path: 'add-hotel', component: AddHotelComponent }
];

