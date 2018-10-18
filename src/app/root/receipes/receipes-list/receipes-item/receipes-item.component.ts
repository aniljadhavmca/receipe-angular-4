import { Component, OnInit, Input } from '@angular/core';
import { ReceipesListComponent } from 'src/app/root/receipes/receipes-list/receipes-list.component';
import { Receipe } from 'src/app/root/receipes/receipe.model';
import { ReceipeService } from 'src/app/root/receipes/receipe.service';

@Component({
  selector: 'app-receipes-item',
  templateUrl: './receipes-item.component.html',
  styleUrls: ['./receipes-item.component.css']
})
export class ReceipesItemComponent implements OnInit {

  @Input() receipe: Receipe;
  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
  }

  onSelected(){
    this.receipeService.selectedReceipe.emit(this.receipe)
  }

}
