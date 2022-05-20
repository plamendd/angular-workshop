import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Furniture } from 'src/app/models/furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furniture$: Observable<Array<Furniture>>;

  constructor(private furnitureService: FurnitureService) { 
    
  
  }

  ngOnInit() {
    setTimeout(() => {
      this.furniture$  = this.furnitureService.getAllFurniture();
    }, 3000);
   
  }

}
