import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
    {   path: '', 
        component:HomeComponent 
    },
    {
        path:'detalhes/:id', 
        component: DetalhesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
