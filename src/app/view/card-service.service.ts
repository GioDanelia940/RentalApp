import { Injectable } from '@angular/core';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  cards: Card[] = [
    new Card(
      'https://a0.muscache.com/im/pictures/8ed47c5c-e6cd-46a5-98ad-530a6e3bc404.jpg?im_w=720',
      'jordan',
      'wadi rum',
      1591,
      86
    ),
    new Card(
      'https://a0.muscache.com/im/pictures/7d02b15a-7d24-4dff-a155-4b92dbf479fb.jpg?im_w=720',
      'denmark',
      'gudhem',
      2628,
      134
    ),
    new Card(
      'https://a0.muscache.com/im/pictures/miso/Hosting-48897348/original/b635f956-a2cb-4386-b514-5dabba8bc755.jpeg?im_w=720',
      'Switzland',
      'Vals',
      2866,
      656
    ),
    new Card(
      'https://a0.muscache.com/im/pictures/8ed47c5c-e6cd-46a5-98ad-530a6e3bc404.jpg?im_w=720',
      'jordan',
      'wadi rum',
      1591,
      86
    ),
    new Card(
      'https://a0.muscache.com/im/pictures/7d02b15a-7d24-4dff-a155-4b92dbf479fb.jpg?im_w=720',
      'denmark',
      'gudhem',
      2628,
      134
    ),
    new Card(
      'https://a0.muscache.com/im/pictures/miso/Hosting-48897348/original/b635f956-a2cb-4386-b514-5dabba8bc755.jpeg?im_w=720',
      'Switzland',
      'Vals',
      2866,
      656
    ),
    new Card(
      'https://a0.muscache.com/im/pictures/8ed47c5c-e6cd-46a5-98ad-530a6e3bc404.jpg?im_w=720',
      'jordan',
      'wadi rum',
      1591,
      86
    ),
    new Card(
      'https://a0.muscache.com/im/pictures/7d02b15a-7d24-4dff-a155-4b92dbf479fb.jpg?im_w=720',
      'denmark',
      'gudhem',
      2628,
      134
    ),
    new Card(
      'https://a0.muscache.com/im/pictures/miso/Hosting-48897348/original/b635f956-a2cb-4386-b514-5dabba8bc755.jpeg?im_w=720',
      'Switzland',
      'Vals',
      2866,
      656
    ),
  ];
  constructor() {}
  getCard(id: number) {
    return this.cards[id];
  }
}
