import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BusinessComponent } from './business/business.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { CspComponent } from './csp/csp.component';
import { CustomersComponent } from './customers/customers.component';
import { DevelopmentComponent } from './development/development.component';
import { SdacrdComponent } from './development/sdacrd/sdacrd.component';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { SpotlightsComponent } from './spotlights/spotlights.component';
import { TechspecComponent } from './techspec/techspec.component';

const routes: Routes = [

  {
    path:'', 
    redirectTo:'/home',
    pathMatch:'full',
    data: {
      title: 'StackSystem | Secure Codeing Secure Digital'
    }
  },

  {
    path:'home',
    component:MainComponent,
    data:
    {
      title: 'StackSystem | Secure Codeing Secure Digital'
    }
  },

  {
    path:'development',
    component:DevelopmentComponent,
    data:
    {
      title: 'StackSystem | Software Development'
    }
  },
  {
    path:'cybersecurity',
    component:CspComponent,
    data:
    {
      title: 'StackSystem | Cyber Security Practices'
    }
  },
  {
    path:'business',
    component:BusinessComponent,
    data:
    {
      title: 'StackSystem | Business Development'
    }
  },

  {
    path:'aboutus',
    component:AboutusComponent,
    data:
    {
      title: 'StackSystem | Aboutus'
    }
  },

  {
    path:'services',
    component:ServicesComponent,
    data:
    {
      title: 'StackSystem | Services'
    }
  },

  {
    path:'customers',
    component:CustomersComponent,
    data:
    {
      title: 'StackSystem | Customers'
    }
  },

  {
    path:'contactus',
    component:ContactComponent,
    data:
    {
      title: 'StackSystem | Contact Us'
    }
  },
  {
    path:'whitepaper',
    component:TechspecComponent,
    data:
    {
      title: 'StackSystem | Whitepaper'
    }
  },
  {
    path:'career',
    component:CareerComponent,
    data:
    {
      title: 'StackSystem | Career'
    }
  },
  {
    path:'blogs',
    component:BlogsComponent,
    data:
    {
      title: 'StackSystem | Blogs'
    }
  },
  {
    path:'spotlights',
    component:SpotlightsComponent,
    data:
    {
      title: 'StackSystem | Spotlights'
    }
  },
  {
    path:'**',
    component:MainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
