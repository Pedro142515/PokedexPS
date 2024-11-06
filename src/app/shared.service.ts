import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  vida: number = 2; 
  ataque: number = 4; 
  defensa: number = 6; 
  corazones: number[] = []; 
  ataques: number[] = []; 
  defensas: number[] = []; 

  constructor() 
  {
    this.corazones = Array(this.vida).fill(0); 
    this.ataques = Array(this.ataque).fill(0); 
    this.defensas = Array(this.defensa).fill(0); 
  }
  generateRandomNumber(): void {
    this.vida = Math.floor(Math.random() * 10)+1;
    this.ataque = Math.floor(Math.random() * 10)+1;
    this.defensa = Math.floor(Math.random() * 10)+1;
  }
}
