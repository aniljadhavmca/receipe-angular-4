import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/header/header.component';
import { ReceipesComponent } from './root/receipes/receipes.component';
import { ReceipesListComponent } from './root/receipes/receipes-list/receipes-list.component';
import { ReceipesDetailsComponent } from './root/receipes/receipes-details/receipes-details.component';
import { ReceipesItemComponent } from './root/receipes/receipes-list/receipes-item/receipes-item.component';
import { ShoppingListComponent } from './root/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './root/shopping-list/shopping-edit/shopping-edit.component';
import { DemoDirective } from './demo.directive';
import { DropdownDirective } from './root/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipesListComponent,
    ReceipesDetailsComponent,
    ReceipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DemoDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
