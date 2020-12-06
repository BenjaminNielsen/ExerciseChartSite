import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ExerciseMainComponent} from './ExerciseModule/components/exercise-main.component'
import {BodyMainComponent} from './BodyModule/components/body-main/body-main.component'
import {PageNotFoundComponent} from './MiscellaneousComponents/components/page-not-found/page-not-found.component'
import {ExerciseContentComponent} from './ExerciseModule/components/exercise-content/exercise-content.component'

const routes: Routes = [
  {
    path: 'exercises',
    component: ExerciseMainComponent,
    children: [
      {
        path: ':exerciseId', // child route path
        component: ExerciseContentComponent, // child route component that the router renders
      },
    ]
  },
  {path: 'body', component: BodyMainComponent},
  {path: '', redirectTo: '/exercises/0', pathMatch: 'full'}, // redirect to `exercises/0`
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
