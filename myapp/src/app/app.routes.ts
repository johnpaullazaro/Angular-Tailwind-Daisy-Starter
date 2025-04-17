import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { EventsComponent } from './pages/events/events.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

export const routes: Routes = [ 
    {
        path: "home", component : HomeComponent
    },
    {
        path: "aboutus",  component : AboutusComponent
    },
    {
        path: "events",  component : EventsComponent
    },
    {
        path: "announcements",  component : AnnouncementsComponent
    },
    {
        path: "contactus",  component : ContactusComponent
    }
];
 