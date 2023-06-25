import { HttpClient } from '@angular/common/http';
import { DoCheck, Injectable, OnChanges } from '@angular/core';

//observable
import { Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  public numMin:number = 0;
  public numMax: number = 70;
 
  public url: string = `https://pokeapi.co/api/v2/pokemon?offset=${this.numMin}&limit=${this.numMax}`

  constructor(private http: HttpClient) { }

  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap( res => {
        res.results.map((resPokemons: any) =>{
          
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
            )
        })
      })
    )
  }

  public apiGetPokemons(url: string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res => res)
      )
  }

}
