const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(!token){
    res.status(401).json("I can haz token?")
  }else{
    jwt.verify(token,"shhhh", (err,decoded)=>{
      if(err){
        res.status(401).json("The token is bad ): " + err.message)
      }else{
        req.decodedToken = decoded
        next()
      }
    })
  }
};
