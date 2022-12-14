import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { Fruit } from 'src/app/Fruit';

import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {
      name: 'Turca', type: 'Dog', age: 5
    },
    {
      name: 'Tom', type: 'Cat', age: 3
    },
    {
      name: 'Frida', type: 'Dog', age: 2
    },
    {
      name: 'Bob', type: 'Horse', age: 10
    }
  ]

  fruits: Fruit[] = [
    {name: 'banana', color: 'yellow'},
    {name: 'apple', color: 'red'},
    {name: 'orange', color: 'orange'},
    {name: 'grape', color: 'purple'}
  ]

  animalDetails = ''

  constructor(private listService: ListService) {

  }

  showAge(animal: Animal) {
    this.animalDetails = ` O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal)
  }

  removeFruit(fruit: Fruit){
    this.fruits = this.listService.removeFruit(this.fruits, fruit)
  }
}
