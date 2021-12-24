import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './pages/bindings/bindings.component';
import { LifeCicleHooksComponent } from './pages/life-cicle-hooks/life-cicle-hooks.component';
import { FlexBoxComponent } from './pages/flex-box/flex-box.component';
import { UtilityTypesComponent } from './pages/utility-types/utility-types.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    LifeCicleHooksComponent,
    FlexBoxComponent,
    UtilityTypesComponent,
    EventLoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
