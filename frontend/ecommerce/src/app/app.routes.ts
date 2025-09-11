import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { About } from './components/about/about';

export const routes: Routes = [

    { path: 'category/:id', component: ProductList },
    { path: 'category', component: ProductList },
    { path: 'products', component: ProductList },
    { path: 'about', component: About },

    //priority list. this two must be the last ones
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', redirectTo: '/products', pathMatch: 'full' },
];
