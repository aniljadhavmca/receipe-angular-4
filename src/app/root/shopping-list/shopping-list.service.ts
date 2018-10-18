import {Ingredient} from '../shared/ingredients.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class ShoppingListService{

    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Mangoes',8)
      ];;

    getIngredients(){
        return this.ingredients;
    }

    addNewIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient)
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)
    }
    

}