const path =require('fs')
const path = require( 'path');


const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports =class Cart {
	static addProduct (id){
		//Fetch the previouse cart
		fs.readFile(p,(err,fileContent)=>{
			let cart = {products:[], totalPrice:0}
			if(!err){
				cart =JSON.parse(fileContent)
			}

			//Analyse the cart => Find existing product
			const existingProduct = cart.products.find(prod => p)



		})

		//Add new product / increase quantity
	}
}