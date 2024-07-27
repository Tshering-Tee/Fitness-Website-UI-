import { Component } from '@angular/core';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent {

  product=[
    {
      id: 1,
      name: "Life Fitness 95ci Upright Bike (Remanufactured)",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
      Catogory: "Running",
      size:[2,4,6,7],
      color:["white", "Red", "Black"],
      price: 2999.00,
      is_in_inventory: true,
      item_left: 3,
      imageURL: 'assets/Images/Shop-now/95CI-2.jpg',
    },

      {
        id: 2,
        name: "Life Fitness Discover SE 95R Elevation Recumbent Bike (Remanufactured)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 3599.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/RBK835-2.jpg',
      },
      
      {
        id: 3,
        name: "First Degree Fitness Apollo Pro II Reserve AR Rower (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 1599.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-WR40-2.jpg',
      },

      {
        id: 4,
        name: "Star Trac E-TC Treadclimber (Remanufactured)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 4399.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/ste-e-tc-2.jpg',
      },

      {
        id: 5,
        name: "Star Trac 10 Series Freerunner w/LCD (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 12599.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/ST-10TRX-LCDQ-2.jpg',
      },

      {
        id: 6,
        name: "Power Plate My7 (Remanufactured)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 5699.0,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/My7-2.jpg',
      },
      
     
      

      

  ]
};

 