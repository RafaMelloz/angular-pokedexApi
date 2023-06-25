import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BuscaPokemonComponent } from './busca-pokemon/busca-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    BuscaPokemonComponent,
    ListPokemonComponent
  ],
  exports: [
    HeaderComponent,
    BuscaPokemonComponent,
    ListPokemonComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
