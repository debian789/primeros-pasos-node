import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLBoolean
  } from 'graphql/type';
  
  import ToDoModel from '../data/TodoModel'
  
  export function getProjection (fieldASTs) {
    return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
      projections[selection.name.value] = true;
      return projections;
    }, {});
  }
  
  var todoType = new GraphQLObjectType({
    name: 'todo',
    description: 'todo item',
    fields: () => ({
      itemId: {
        type: (GraphQLInt),
        description: 'Id item Todo.',
      },
      item: {
        type: GraphQLString,
        description: 'Nombre todo',
      },
      completed: {
        type: GraphQLBoolean,
        description: 'Es completado '
      }
    })
  });
  
  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'todom',
      fields: {
        todo: {
          type: new GraphQLList(todoType),
          args: {
            itemId: {
              name: 'itemId',
              type: GraphQLInt
            }
          },
          resolve: (root, {itemId}, source, fieldASTs) => {
            var projections = getProjection(fieldASTs);
            var foundItems = new Promise((resolve, reject) => {
              if(itemId) {
                ToDoModel.find({itemId}, projections,(err, todos) => {
                  err ? reject(err) : resolve(todos)
               })
              } else {
                ToDoModel.find({}, projections,(err, todos) => {
                  err ? reject(err) : resolve(todos)
               })
              }

            })
  
            return foundItems
          }
        }
      }
    })
    
  });

  export default schema;
  