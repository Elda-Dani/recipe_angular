import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  recipename=""
  description=""
  category=""
   posteddate=""
   price=""
status:boolean=false

   readValues=()=>{
let data={
  "recipename":this.recipename,
  "description":this.description,
  "category":this.category,
   "posteddate":this.posteddate,
   "price":this.price
}
console.log(data)
this.myapi.addRecipe(data).subscribe(
  (response)=>{
    console.log(response)
    alert("successfully added")
    this.recipename=""
    this.description=""
    this.category=""
     this.posteddate=""
     this.price=""
    this.status=true
  }
)

   }



  ngOnInit(): void {
  }

}
