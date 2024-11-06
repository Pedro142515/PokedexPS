import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input({required:true}) solicitarImagen ='';//Paso 1: Ir al hijo y hacer input a la propiedad
  
  @Output() clickPokemon = new EventEmitter<number>();

  @Output() cambioValores = new EventEmitter<void>();

  experiencia: number = 0;

  constructor() {
    this.generarExperiencia();
  }

  antePokemon()
  {
    this.clickPokemon.emit(-1);
    this.cambioValores.emit();
  }
  sigPokemon()
  {
    this.clickPokemon.emit(1);
    this.cambioValores.emit();
  }

  generarExperiencia(): void 
  {
    this.experiencia = Math.floor(Math.random() * 100) + 1;
  }

}
