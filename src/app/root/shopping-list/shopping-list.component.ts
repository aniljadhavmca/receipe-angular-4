import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/root/shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[];
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
  }

}
