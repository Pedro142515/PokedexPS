import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  vida: number = 2; 
  ataque: number = 4; 
  defensa: number = 6; 
  corazones: number[] = []; 
  ataques: number[] = []; 
  defensas: number[] = []; 

  constructor() 
  {
    this.updateArrays();
  }

  @Input() set valoresRandom(newValues: { vida: number; ataque: number; defensa: number }) {
    this.vida = newValues.vida;
    this.ataque = newValues.ataque;
    this.defensa = newValues.defensa;
    this.updateArrays(); // Actualiza los arreglos después de recibir nuevos valores
  }

  private updateArrays(): void {
    this.corazones = Array(this.vida).fill(0); 
    this.ataques = Array(this.ataque).fill(0); 
    this.defensas = Array(this.defensa).fill(0); 
  }
}
