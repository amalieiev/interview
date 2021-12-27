import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BindingsComponent } from './pages/bindings/bindings.component';
import { ClosureComponent } from './pages/closure/closure.component';
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';
import { FlexBoxComponent } from './pages/flex-box/flex-box.component';
import { LifeCicleHooksComponent } from './pages/life-cicle-hooks/life-cicle-hooks.component';
import { PureImpurePipeComponent } from './pages/pure-impure-pipe/pure-impure-pipe.component';
import { UtilityTypesComponent } from './pages/utility-types/utility-types.component';

export const questions = [
  {
    id: "event-loop",
    group: "javascript",
    title: "Что такое Event Loop?",
    component: EventLoopComponent
  },
  {
    id: "closure",
    group: "javascript",
    title: "Что такое Замыкание?",
    component: ClosureComponent
  },
  {
    id: "utility-types",
    group: "typescript",
    title: "Utility types",
    component: UtilityTypesComponent
  },
  {
    id: "flex-box",
    group: "css",
    title: "Что такое flex-box?",
    component: FlexBoxComponent
  },
  {
    id: "bindings",
    group: "angular",
    title: "Какие есть типы Binding?",
    component: BindingsComponent
  },
  {
    id: "life-cicle-hooks",
    group: "angular",
    title: "Что такое Life cycle hooks?",
    component: LifeCicleHooksComponent
  },
  {
    id: "pure-impure-pipe",
    group: "angular",
    title: "Разница между Pure Pipe и Impure Pipe",
    component: PureImpurePipeComponent
  },
  {
    id: "dynamic-components",
    group: "angular",
    title: "Зачем нужны Динамичиские компоненты?",
    component: DynamicComponentsComponent
  }
]


export const routes: Route[] = [
  ...questions.map((item): Route => {
    return {
      path: item.id,
      component: item.component
    }
  })
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
