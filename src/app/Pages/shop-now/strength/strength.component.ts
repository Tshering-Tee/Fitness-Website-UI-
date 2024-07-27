import { Component } from '@angular/core';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent {

  product=[
    {
      id: 1,
      name: "French Fitness Multi Functional Adjustable Bench V2 w/Arm Curl + Leg Ext (New)",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
      Catogory: "Running",
      size:[2,4,6,7],
      color:["white", "Red", "Black"],
      price: 699.00,
      is_in_inventory: true,
      item_left: 3,
      imageURL: 'assets/Images/Shop-now/FF-MFAB-ACLE-V2-2.jpg',
    },


      {
        id: 2,
        name: "French Fitness Rubber Coated Hex Dumbbell Set 5-50 lbs (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 1259.10,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/dubell.jpg',
      },

      {
        id: 3,
        name: "French Fitness Rubber Grip Weight Plate Set w/7 ft Olympic Bar 305 lbs (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 804.60,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-RGOP305-B-2.jpg',
      },
      {
        id: 4,
        name: "French Fitness FSR70 Dual Cable Smith & Half Rack System (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price:2999.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-FSR70-2.jpg',
      },



      {
        id: 5,
        name: "Body-Solid SPR1000DBBack Extended Double Power Rack Package (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 3995.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/bsldspr1000dbback-2.jpg',
      },

      {
        id: 6,
        name: "Body-Solid Pro Clubline SFB125 Flat Bench (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price:  290.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/BSLDSFB125-2.jpg',
      },    

  ]
};

