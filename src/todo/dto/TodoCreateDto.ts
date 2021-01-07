// The server sends the client a TodoCreateDto when the client creates a new To Do item
export class TodoCreateDto {
  name: string;
  description?: string;
}