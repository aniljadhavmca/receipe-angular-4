import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from 'src/app/root/receipes/receipe.model';
import { ReceipeService } from 'src/app/root/receipes/receipe.service';

@Component({
  selector: 'app-receipes-details',
  templateUrl: './receipes-details.component.html',
  styleUrls: ['./receipes-details.component.css']
})
export class ReceipesDetailsComponent implements OnInit {

  @Input() receipe: Receipe;

  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.receipeService.addToShoppingList(this.receipe.ingredients);
  }


}
