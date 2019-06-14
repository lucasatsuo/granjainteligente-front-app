import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaiaService } from 'src/app/services/baia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public baias:Array<Object>=[];
  constructor(private baiaService: BaiaService) { }

  ngOnInit() {

    this.baiaService.getBaias().subscribe((data:Array<Object>)=>{
      this.baias=data
    });
  }

}
