import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Pokemon } from './pokemon';
import { PlayerService } from '../player/player.service';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  pokemons!: Pokemon[];

  constructor(private playerService: PlayerService, private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    // defines which Pokemons are going to be fetched depending on player's nickname
    const queryOffset = this.playerService.player.nickname.length * 10;

    // gets Pokemons from pokeAPI
    return this.http.get(`${environment.pokeAPI}${queryOffset}`).pipe(
      map((data: any) => data.results),
      switchMap((results: [{ name: string; url: string }]) => {
        // makes the Pokemon array empty each time to prevent stacking more pokemons than expected
        this.pokemons = [];
        results.forEach((pokemon: { name: string; url: string }) => {
          // initial Pokemon object that will be filled with API's data
          const fetchedPokemon: Pokemon = {
            name: pokemon.name.replace(/-/g, ' '),
            artwork: '',
            stats: [
              {
                name: '',
                value: 0,
              },
            ],
          };
          // requests each Pokemon's own API to get it's artwork and stats
          this.http.get(pokemon.url).subscribe((data: any) => {
            fetchedPokemon.artwork =
              data.sprites.other['official-artwork'].front_default;
            fetchedPokemon.stats = data.stats.map((stat: any) => {
              return {
                name: stat.stat.name.replace(/-/g, ' '),
                value: stat.base_stat,
              };
            });
          });
          // after getting all needed data each Pokemon gets pushed into the array
          this.pokemons.push(fetchedPokemon);
        });

        // returns an observable carrying fetched Pokemons array
        return new Observable((observer: Observer<Pokemon[]>) => {
          observer.next(this.pokemons);
        });
      })
    );
  }

  catchPokemons(): Pokemon[] {
    // each Pokemon gets 50% chance of getting caught
    this.pokemons.forEach((pokemon: Pokemon) => {
      pokemon.caught = Math.random() < 0.5;
    });

    return this.pokemons.filter((pokemon: Pokemon) => pokemon.caught);
  }
}
