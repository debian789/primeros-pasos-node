import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ToDo from './src/data/TodoModel'
import schema from './src/graphql/Schema'
import express_graphql from 'express-graphql'
import uudv1 from 'uuid/v1'
const app = express();

import {graphql} from 'graphql'
import graphqlHTTP from 'express-graphql';

// Aceptar datos de body 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//// Conexión con mongo 
mongoose.connect('mongodb://localhost:27017/local')
var db = mongoose.connection;
db.on('error', ()=> {console.log( 'Fallo la conexion con mongoDB')})
db.once('open', () => {
	console.log( 'Conectado con mongo')
})
/// fin conexión


// Inicializa el puerto de escucha
app.listen(3000,()=> {console.log("Express corriendo en el puerto 3000")})


/// Muestra la pagina por defecto
app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/index.html')
})


// Establece la url de ingreso a graphql
app.use('/graphql', express_graphql (req => ({
	schema,
	graphiql:true
})))




app.post('/quotes',(req,res)=>{
	var todoItem = new ToDo({
		itemId: uudv1(),
		item:req.body.item,
		completed: false
	})

	todoItem.save((err,result)=> {
		if (err) {console.log("Error al crear " + err)}
		console.log("TodoItem guardado"+todoItem.item)

		res.redirect('/')
	})
})