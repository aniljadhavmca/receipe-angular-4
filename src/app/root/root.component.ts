import { Component } from '@angular/core';


@Component({
    selector:'root',
    templateUrl:'./root.component.html'
})
export class RootComponent{

    selectedFeature: string = 'receipes';

    onNavigate(ev){
        this.selectedFeature = ev;
    }
}