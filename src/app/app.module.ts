import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ApRoutingModule } from './app-routing-module/app-routing.module';
import { TypeOfBikeModuleModule } from './type-of-bike-module/type-of-bike-module.module';
import { BikeFeaturesModuleModule } from './bike-features-module/bike-features-module.module';
import { BikeSizeModuleModule } from './bike-size-module/bike-size-module.module';
import { ExploreBikesModuleModule } from './explore-bikes-module/explore-bikes-module.module';
import { HeaderModuleModule } from './header-module/header-module.module';
import { RegisterUserModuleModule } from './register-user-module/register-user-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ApRoutingModule,
    TypeOfBikeModuleModule,
    BikeFeaturesModuleModule,
    BikeSizeModuleModule,
    ExploreBikesModuleModule,
    HeaderModuleModule,
    RegisterUserModuleModule,
    SharedModuleModule.forRoot(),
    MDBBootstrapModule.forRoot()


  ],
  schemas: [ NO_ERRORS_SCHEMA ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
