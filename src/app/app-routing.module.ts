import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BindingsComponent } from './pages/bindings/bindings.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';
import { FlexBoxComponent } from './pages/flex-box/flex-box.component';
import { LifeCicleHooksComponent } from './pages/life-cicle-hooks/life-cicle-hooks.component';
import { UtilityTypesComponent } from './pages/utility-types/utility-types.component';

export type InterviewTopic = {
  title: string
}

export type InterviewRoute = Route & InterviewTopic;

export type InterviewRoutes = InterviewRoute[];

const javascriptQuestions: InterviewRoutes = [
  {
    title: 'Что такое Event loop?',
    path: 'event-loop',
    component: EventLoopComponent
  },
]

const typescriptQuestions: InterviewRoutes = [
  {
    title: 'Utility types',
    path: 'utility-types',
    component: UtilityTypesComponent
  },
]

const cssQuestions: InterviewRoutes = [
  {
    title: 'Что такое flex-box?',
    path: 'flex-box',
    component: FlexBoxComponent
  },
]

const angularQuestions: InterviewRoutes = [
  {
    title: 'Какие есть типы Binding?',
    path: 'bindings',
    component: BindingsComponent
  },
  {
    title: 'Что такое Life cycle hooks?',
    path: 'life-cicle-hooks',
    component: LifeCicleHooksComponent
  }
]

export const routes: InterviewRoutes = [
  ...cssQuestions,
  ...javascriptQuestions,
  ...typescriptQuestions,
  ...angularQuestions
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
