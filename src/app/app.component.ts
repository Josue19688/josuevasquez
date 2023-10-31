import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as AOS from 'aos';
import { ThemeService } from './modules/public/services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portafolio';

  private themeService=inject(ThemeService);

  @HostBinding('class.dark') get mode(){
    //return this.darkMode();
    return this.themeService.darkMode()
  }

  
  ngOnInit(): void {
   
    initFlowbite();
    AOS.init();//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
}
