export interface User {
  id: number | string | null;
  username: string;
  age?: number;
  hobbies: string[] | [];
}

export const users: User[] = [
  {
    id: 1,
    username: 'Paul Grin',
    age: 21,
    hobbies: ['Coding', 'Reading'],
  },
  {
    id: 2,
    username: 'Alexander L',
    age: 25,
    hobbies: ['Music', 'Reading'],
  },
  {
    id: 3,
    username: 'Daria B',
    age: 18,
    hobbies: ['Dancing', 'Walking'],
  },
  {
    id: 4,
    username: 'Valery',
    age: 54,
    hobbies: ['Twitch'],
  },
];
