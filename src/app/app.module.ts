import { FadeBlockComponent } from './fadeblock.component';
import { MouseComponent } from './mouse.component';
import { AnimboxComponent } from './animbox.component';
import { ContainedComponent } from './routes/contained.component';
import { AdvancedComponent } from './routes/advanced.component';
import { BasicComponent } from './routes/basic.component';
import { HomeComponent } from './routes/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';



const animationRoutes:Routes = [
  {
    path: 'animation-home',
    component: HomeComponent,
    data: {

      animation: {

        value: 'home',

      }}
  },
  {
    path: 'animation-basics',
    component: BasicComponent,
    data: {

      animation: {

        value: 'basic',

      }}
  },
  {
    path: 'animation-contained',
    component: ContainedComponent,
    data: {

      animation: {

        value: 'contained',

      }}
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent,
    data: {

      animation: {

        value: 'advanced',

      }}
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full',
    data: {

      animation: {

        value: 'home',

      }}
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    AdvancedComponent,
    ContainedComponent,
    AnimboxComponent,
    MouseComponent,
    FadeBlockComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
