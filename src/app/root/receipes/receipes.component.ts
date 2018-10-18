import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Receipe } from 'src/app/root/receipes/receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipeService]
})
export class ReceipesComponent implements OnInit {

  selectedReceipe: Receipe;

  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
    this.receipeService.selectedReceipe.subscribe((receipe: Receipe)=>{
      this.selectedReceipe = receipe;
    })
  }

  

}
