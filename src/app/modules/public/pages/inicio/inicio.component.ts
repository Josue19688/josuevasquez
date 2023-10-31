import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  public url ='https://github.com/Josue19688';

  private router = inject(Router);



  ngOnInit(): void {
    const options = {
      strings: [
        'Hola!! mi nombre es, <br>Josué Vásquez',
        'Soy Software Developer'],
      typeSpeed: 100,
      backSpeed: 20,
      showCursor: true,
      cursorChar: '',
      loop: true
    };
    const typed = new Typed('.typed-user', options);
  }

}
