import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit{
  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(private pokeapiService: PokeapiService){}
  
  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    )
  }
 
  public getSearch(value:string){
    const filter = this.setAllPokemons.filter( (res:any) => {
      return !res.name.indexOf(value.toLocaleLowerCase())
    })
   this.getAllPokemons = filter
  }
}
