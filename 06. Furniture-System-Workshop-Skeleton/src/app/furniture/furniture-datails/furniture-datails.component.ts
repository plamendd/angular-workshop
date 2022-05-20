import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Furniture } from 'src/app/models/furniture';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-datails',
  templateUrl: './furniture-datails.component.html',
  styleUrls: ['./furniture-datails.component.css']
})
export class FurnitureDatailsComponent implements OnInit {
  furniture: Furniture;
  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) { }
  
  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data['id'];
      this.furnitureService.getFurniture(id).subscribe((data) => {
        this.furniture = data;
      })
    })
  }

}
