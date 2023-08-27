import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;

  items = [
    { title: 'What is a dog?', content: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.' },
    { title: 'What kinds of dogs are there?', content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'},
    { title: 'What kinds of dog we have?', content: 'We have a Golden Retriever, his name is Süti, it means Cookie' }
  ]
  onClick() {
    this.modalOpen = !this.modalOpen;

  }
}
