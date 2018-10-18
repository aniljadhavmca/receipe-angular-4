import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from 'src/app/root/receipes/receipe.service';

@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {


  constructor(private receipeService: ReceipeService) { }

  receipes: Receipe[];
  ngOnInit() {
    this.receipes = this.receipeService.getReceipes();
  }
 
  

  

}
