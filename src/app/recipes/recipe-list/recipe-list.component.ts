import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540'),
    new Recipe('Another Test Recipe', 'This is simply a test',
    'https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540')
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
