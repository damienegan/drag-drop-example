import { AvailableCoursesService } from './available-courses.service';
import { AvailableBBASpecialisationsService } from './available-bbaspecialisations.service';
import { AcademicHistoryService } from './academic-history.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatAutocompleteModule,
    FormsModule
  ],
  providers: [AcademicHistoryService, AvailableBBASpecialisationsService, AvailableCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
