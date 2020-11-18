import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../_service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cates = []
  newCateName = "";
constructor(private cateService: CategoryService) {}

  ngOnInit(): void {
  }

  getCates() {
    this.cateService.getCategory()
                    .subscribe(data => {
                      console.log(data);
                      this.cates = data;
      });
  }
  addCate(){
    const data ={
      name: this.newCateName
    };
    this.cateService.addCategory(data)
                    .subscribe(newItem => {
                      this.cates.push(newItem);
                      this.newCateName = "";
                    });
  }
}
