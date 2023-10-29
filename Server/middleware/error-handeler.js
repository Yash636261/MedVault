
const errorHandlerMiddleware = async (err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({msg: 'somthing went wrong,plese try again.'})
}

module.exports= errorHandlerMiddleware