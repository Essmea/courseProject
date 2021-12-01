import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Churros',
      'Traditional spanish recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvZeudU9_f40x24hYo66JFwjNImf30kwyTA&usqp=CAU',
      
      [ 
        new Ingredient('Sugar', 1),
        new Ingredient('Oil', 30)
      ]),
    new Recipe('Cinnamon buns',
      'Traditional Swedish fika!',
      'https://lrfs7g12er-flywheel.netdna-ssl.com/wp-content/uploads/2020/10/kanelbullelo_7043.jpg',
      
      [
        new Ingredient('Cinnamon', 1),
        new Ingredient('Butter', 10)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
