import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ExerciseModule } from './ExerciseModule/exercise.module'
import { BodyModule } from './BodyModule/body.module'
import { PageNotFoundComponent } from './MiscellaneousComponents/components/page-not-found/page-not-found.component'

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    ExerciseModule,
    AppRoutingModule,
    BodyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
