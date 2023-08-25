const Store = require('../model/storeModel')

exports.postAddStoreDetails = async(req,res,next)=>{
    try{

    
    const ItemName =  req.body.ItemName;
    const Description =  req.body.Description;
    const Price =  req.body.Price;
    const Quantity = req.body.Quantity

    //console.log(name,email)


    const data = await Store.create({ItemName:ItemName , Description: Description,Price:Price, Quantity:Quantity });
    res.status(201).json({newUserDetail:data});
    }catch(error){
        res.status(500).json({
            error:error
        })
    }
}

exports.getStoredProduct = async(req,res,next)=>{
    try{
        const data = await Store.findAll()
      //  console.log(data)
        res.status(201).json({retrievedData:data})

    }catch(error){
        res.status(500).json({
            error:error
        })
    }
}



exports.updateProductInDB = async (req, res, next) => {
    try {
        const productId = req.params.ProductId; 
        console.log('productID:' ,productId)
        
        const updatedProduct = {
            ItemName: req.body.ItemName,
            Description: req.body.Description,
            Price: req.body.Price,
            Quantity: req.body.Quantity
        };
        
        // Update the product in the database
        const [numRowsUpdated, updatedProducts] = await Store.update(updatedProduct, {
            where: { id: productId }
        });
        
        if (numRowsUpdated === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        res.status(200).json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
