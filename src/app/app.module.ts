import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { UsersComponent } from './users/users.component';
import { UserServiceService } from './service/user-service.service';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';

import {RouterModule,Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { ServersComponent } from './servers/servers.component';
import { MainServerComponent } from './main-server/main-server.component';
import { CockpitComponent } from './main-server/cockpit/cockpit.component';
import { ServerElementComponent } from './main-server/server-element/server-element.component';
import { App1Component } from './app1/app1.component';
import { HeadingComponent } from './app1/heading/heading.component';
import { RecipesComponent } from './app1/recipes/recipes.component';
import { RecipesListComponent } from './app1/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './app1/recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './app1/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './app1/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './app1/shopping-list/shopping-edit/shopping-edit.component';

const routes:Routes=[
  {path:'users',component:UsersComponent},
  {path:'details',component:DetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'form',component:FormComponent},
  {path:'praServers',component:ServersComponent},
  {path:'praServers1',component:MainServerComponent},
  {path:'booking',component:App1Component}
  
];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    UsersComponent,
    DetailsComponent,
    AboutComponent,
    ChildComponent,
    FormComponent,
    ServersComponent,
    MainServerComponent,
    CockpitComponent,
    ServerElementComponent,
    App1Component,
    HeadingComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
