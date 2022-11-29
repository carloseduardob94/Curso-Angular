import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Fruit } from '../Fruit';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name)
  }
  removeFruit(fruits: Fruit[], fruit: Fruit) {
    return fruits.filter((f) => fruit.name !== f.name)
  }
}
