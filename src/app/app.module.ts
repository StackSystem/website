import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContactformComponent } from './contact/contactform/contactform.component';
import { MailcontactComponent } from './contact/mailcontact/mailcontact.component';
import { LocationComponent } from './contact/location/location.component';
import { SubscribeComponent } from './common/subscribe/subscribe.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './main/banner/banner.component';
import { MainComponent } from './main/main.component';
import { PillarsComponent } from './main/pillars/pillars.component';
import { DbannerComponent } from './development/dbanner/dbanner.component';
import { DevelopmentComponent } from './development/development.component';
import { SdacrdComponent } from './development/sdacrd/sdacrd.component';
import { TechspecComponent } from './techspec/techspec.component';
import { DevopsComponent } from './techspec/devops/devops.component';
import { Kmbanner1Component } from './main/kmbanner1/kmbanner1.component';
import { Kmbanner2Component } from './main/kmbanner2/kmbanner2.component';
import { CustomerComponent } from './common/customer/customer.component';
import { CareerComponent } from './career/career.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { CustomersComponent } from './customers/customers.component';
import { SpotlightsComponent } from './spotlights/spotlights.component';
import { CspComponent } from './csp/csp.component';
import { BusinessComponent } from './business/business.component';
import { EducationComponent } from './education/education.component';
import { ServbannerComponent } from './services/servbanner/servbanner.component';
import { AubannerComponent } from './aboutus/aubanner/aubanner.component';
import { AucardComponent } from './aboutus/aucard/aucard.component';
import { MissionComponent } from './aboutus/mission/mission.component';
import { SsstartComponent } from './aboutus/ssstart/ssstart.component';
import { TeamComponent } from './aboutus/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactformComponent,
    MailcontactComponent,
    LocationComponent,
    SubscribeComponent,
    ContactComponent,
    BannerComponent,
    MainComponent,
    PillarsComponent,
    DbannerComponent,
    DevelopmentComponent,
    SdacrdComponent,
    TechspecComponent,
    DevopsComponent,
    Kmbanner1Component,
    Kmbanner2Component,
    CustomerComponent,
    CareerComponent,
    BlogsComponent,
    AboutusComponent,
    ServicesComponent,
    CustomersComponent,
    SpotlightsComponent,
    CspComponent,
    BusinessComponent,
    EducationComponent,
    ServbannerComponent,
    AubannerComponent,
    AucardComponent,
    MissionComponent,
    SsstartComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
