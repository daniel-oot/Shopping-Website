import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CartComponent } from './cart/cart.component';
import { WomenComponent } from './shop/women/women.component';
import { KidsComponent } from './shop/kids/kids.component';
import { MenComponent } from './shop/men/men.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'shop',component:ShopComponent,
  children: [
    { path: 'men', component: MenComponent },
    { path: 'women', component: WomenComponent },
    { path: 'kids', component: KidsComponent }
  ]},
  {path:'favorite',component:FavoriteComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
