import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  
  public isLoading: boolean = false;
  public apiError: boolean = false;


  public pokemonDetalhes: any;
  public coresPokemon : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeapiService: PokeapiService,
  ){}

  ngOnInit(): void {
    this.UnicoPokemon();
  }

  public UnicoPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeapiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeapiService.apiGetPokemons(`${this.urlName}/${id}`);
    
    return forkJoin([pokemon,name]).subscribe(
      res =>{
        this.pokemonDetalhes = res;
        this.coresPokemon = res[1].color.name;
        this.isLoading = true;
      },
      error  =>{
        this.apiError = true;
      }

    )
  }
}
