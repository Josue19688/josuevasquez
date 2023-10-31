import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Post } from '../../models/post';
import * as moment from 'moment';

@Component({
  selector: 'app-itemblog',
  templateUrl: './itemblog.component.html',
  styleUrls: ['./itemblog.component.css']
})
export class ItemblogComponent implements OnInit{
  
  public id!:string;
  public post!:Post;
  public imagenes!:any[];
  constructor(
    private router:ActivatedRoute,
    private themeService:ThemeService
  ){

  }
  
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
   
    this.getPost()
  }

  getPost(){
    this.themeService.getOnePost(this.id)
    .subscribe(resp=>{
     
      this.post=resp;
      this.imagenes=resp.images;
      console.log(this.imagenes)
    });
  }

  // convertHorario(horario:Date){
  //   let f = moment.tz(horario,"America/Guatemala")
  //   const fechaMoment = moment(f).format('DD/MM/YYYY h:mm a');
  //   return fechaMoment;
  // }

  fechaHora = (fecha: any) => {
    const hoyMes = moment(fecha);
    return hoyMes.format('DD/MM/YYYY h:mm a');
  }

  

}
