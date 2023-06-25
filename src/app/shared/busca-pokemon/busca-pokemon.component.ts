import { Component, EventEmitter, Output } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'busca-pokemon',
  templateUrl: './busca-pokemon.component.html',
  styleUrls: ['./busca-pokemon.component.css']
})


export class BuscaPokemonComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  
  constructor(private pokeapiService: PokeapiService){}

  public search(value:string){
    this.emmitSearch.emit(value);
  }

  
}
