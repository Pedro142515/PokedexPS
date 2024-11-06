import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GraficoComponent } from '../grafico/grafico.component';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent, GraficoComponent, FormsModule],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonImagen: string = "https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/0.png";
  pokemonID: number = 0;

  valoresGrafico = {
    vida: 5,
    ataque: 5,
    defensa: 5
  };
  generarValoresAleatorios() {
    // Generar nuevos valores aleatorios para cada atributo
    this.valoresGrafico = {
      vida: Math.floor(Math.random() * 7) + 1,
      ataque: Math.floor(Math.random() * 7) + 1,
      defensa: Math.floor(Math.random() * 7) + 1
    };
  }

  updatePokemonImage(): void {
    // Asegúrate de que el pokemonID sea un número válido
    if (this.pokemonID >= 1) {
      this.pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/' + this.pokemonID + '.png';
    }
  }
  
  handlePokemon(event: number): void {
    this.pokemonID += event;

    // Asegúrate de que el pokemonID no sea menor que 0
    if (this.pokemonID < 0) {
      this.pokemonID = 0;
    }

    // Actualiza la imagen del Pokémon
    this.updatePokemonImage();
  }


}
