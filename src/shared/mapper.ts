/*
This is a utility function that maps a TodoEntity into a TodoDto. 
Typically, you use some sort of a Mapper library, 
but I'm keeping things simple here and crafting my own mappers. 
During the course of the upcoming articles, 
I'll revisit this mapper and adjust it accordingly.
*/

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;
  let todoDto: TodoDto = { id, name, description, };
  return todoDto;
}; 

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;
  let todoDto: TodoDto = { id, name, description, };
  return todoDto;
};