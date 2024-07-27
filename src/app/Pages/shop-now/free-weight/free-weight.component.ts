import { Component } from '@angular/core';

@Component({
  selector: 'app-free-weight',
  templateUrl: './free-weight.component.html',
  styleUrls: ['./free-weight.component.css']
})
export class FreeWeightComponent {

  product=[
    {
      id: 1,
      name: " French Fitness Cast Iron Kettlebell Set 5-30 lbs (New)",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
      Catogory: "Running",
      size:[2,4,6,7],
      color:["white", "Red", "Black"],
      price:292.23,
      is_in_inventory: true,
      item_left: 3,
      imageURL: 'assets/Images/Shop-now/FF-CIKB530-2.jpg',
    },



      {
        id: 2,
        name: " French Fitness Colorful Hex Vinyl Dumbbell Set of 1 to 10 lbs (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 275.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-HVD-1-10-2.jpg',
      },
      
      {
        id: 3,
        name: "French Fitness Olympic Bumper Plate Set 280 lbs (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 714.60,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-OBP280-2.jpg',
      },

      {
        id: 4,
        name: "French Fitness Straight Urethane Barbell Bar - Set of 5 (20-60 lbs) (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 616.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-STRBB-20-60-2.jpg',

      },

      {
        id: 5,
        name: "French Fitness EZ Curl Urethane Barbell Bar Set of 5 (25-65 lbs) (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 693.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-EZCURLBB-25-65-2.jpg',

      },

      {
        id: 6,
        name: " French Fitness Weighted Body Bar Set of 8 w/Rack (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price:  809.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-WBB-SET-2.jpg',

       

      },
      
     
      

      

  ]
};

