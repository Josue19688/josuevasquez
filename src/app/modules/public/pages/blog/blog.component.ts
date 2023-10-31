import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{


post:any[]=[];



private themeService = inject(ThemeService);

ngOnInit(): void {
  this.getPost();
}

getPost(){
  this.themeService.getPost()
  .subscribe(visitas=>{
    this.post=visitas;
  })
}


}
