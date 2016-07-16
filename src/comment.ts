export interface Comment {
  id: number;
  author: string;
  text: string;
}

export var data: Comment[] = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
