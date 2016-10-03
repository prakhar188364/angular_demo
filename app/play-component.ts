import {Component} from "angular2/core";
import {FruitService} from "./fruits.service";
import {Fruits} from "./fruits";
import {OnInit} from "angular2/core";

@Component({
   selector: "my-list",
   template: ` List of Fruits<br>
   <ul>
      <li *ngFor="#list of fruits">  //The NgFor directive instantiates a template once per item from an iterable
         {{list.id}} - {{ list.name }}
      </li>
   </ul>
   `,
   providers: [FruitService]  //providers are part of @Component metadata
})

//The 'MyListComponent' should get list of fruits from the injected 'FruitService'
export class MyListComponent implements OnInit {
   public fruits : Country[];

   //Using constructor, call the _fruitService and populate the fruits list
   constructor(private _fruitService: FruitService) {}

   getContacts(){
      this._fruitService.getContacts().then((fruits: Country[]) => this.fruits = fruits);
   }

   //The 'ngOnInit()' hook is called when done with creating the component and evaluated the inputs
   ngOnInit():any{
      this.getContacts();
   }
}