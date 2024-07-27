import { Component } from '@angular/core';

@Component({
  selector: 'app-gym-access',
  templateUrl: './gym-access.component.html',
  styleUrls: ['./gym-access.component.css']
})
export class GymAccessComponent {

  product=[
    {
      id: 1,
      name: "French Fitness Multi Functional T-Bar Landmine System (New)",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
      Catogory: "Running",
      size:[2,4,6,7],
      color:["white", "Red", "Black"],
      price: 249.00,
      is_in_inventory: true,
      item_left: 3,
      imageURL: 'assets/Images/Shop-now/FF-LMA100-2.jpg',
    },

      {
        id: 2,
        name: "French Fitness TBL10 360 Degree T-Bar Row Landmine (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 79.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-TBL10-2.jpg',
        
      },
      
      {
        id: 3,
        name: "French Fitness Toning Resistance Tube Bands Set of 5 w/Handles (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 49.88,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-TRTB5-2.jpg',
      },

      {
        id: 4,
        name: "French Fitness Resistance Pull Up Assist Bands - Set of 7 (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 79.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-RPAB6-2.jpg',
      },

      {
        id: 5,
        name: " French Fitness Training Battle Rope 1.5 in x 30 ft (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 69.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-BR1530-2.jpg',
       
      },

      {
        id: 6,
        name: " French Fitness Adjustable Weighted Vest, 20 lbs (New)",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis inventore tempore aut, officia at.", 
        Catogory: "Running",
        size:[2,4,6,7],
        color:["white", "Red", "Black"],
        price: 69.00,
        is_in_inventory: true,
        item_left: 3,
        imageURL: 'assets/Images/Shop-now/FF-AWV20-2.jpg',
      },
      
     
      

      

  ]
};
