import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public respuesta:boolean=false;


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(6)]],
    compania: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required,Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(6)]]
  })

  
  constructor(
    private fb: FormBuilder,
    private themeService:ThemeService
  ) {

  }

  agregar(){
    this.themeService.enviarNotificacion(this.miFormulario.value)
    .subscribe((resp:any)=>{
    
      if(resp.ok){
        this.respuesta=true;
        this.miFormulario.reset()
        setTimeout(() => {
          this.respuesta=false;
        }, 3000);
       
      }
     
    })
  }
}
