const Waiter = require('../model/waiterModel');

exports.postOrders = async(req,res,next)=>{

    try{
    const Price = req.body.Price
    const Dish = req.body.Dish
    const Table = req.body.Table
    console.log(Price,Dish,Table)

    const data = await Waiter.create({ Price:Price, Dish:Dish, Table:Table })

    res.status(201).json({newUserDetails:data})
    }catch(error){
    res.status(500).json({
       error:error
    })
  }
}

exports.getOrders = async(req, res, next)=>{

    try{
   const data = await Waiter.findAll()

   res.status(201).json({retrievedData:data})
    }catch(error){
        res.status(500).json({
            error:error
        })
    }
}

exports.deleteOrders = async(req, res, next)=>{
    const orderId = req.params.orderId
    console.log(orderId)

    try{
        const data = await Waiter.destroy({
            where: { id: orderId } 
        });

    res.status(201).json({deletedData:data})
    }catch(error){
        res.status(500).json({
            error:error
        })
    }
}