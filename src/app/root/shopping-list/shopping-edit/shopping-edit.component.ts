import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Receipe } from 'src/app/root/receipes/receipe.model';
import { Ingredient } from 'src/app/root/shared/ingredients.model';
import { ShoppingListService } from 'src/app/root/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  @ViewChild('inputName') inputNameRef:ElementRef
  @ViewChild('inputAmount') inputAmountRef:ElementRef


  ngOnInit() {
  }

  onAddItem(){
    this.shoppingListService.addNewIngredients({name:this.inputNameRef.nativeElement.value, amount:this.inputAmountRef.nativeElement.value});
  }

  

}
