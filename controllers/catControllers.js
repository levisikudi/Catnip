const Cat = require( "../models/catModel" );
const User = require( "../models/userModel" );

const createCat = async (req, res) =>{
    console.log(req.body);
    console.log(req.session);
    const { name, othername, gender, breed, hypoallergenic, hobbies, dob, picture} = req.body

    const cat = await Cat.create({
        name, 
        othername, 
        gender, 
        breed, 
        hypoallergenic, 
        hobbies, 
        dob, 
        picture,
    })
 try {
    let userId = req.session.passport.user._id
    let response = await User.findByIdAndUpdate(userId,{cat})
 } catch (error) {
    console.error(error)
 }
    


    res.json("hitting the route")
}

const getAllCats = async (req, res)=>{
    try {
    const cat = await User.find({}).populate('cat').select('name')
    res.json(cat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

const getSingleCat = async (req, res)=>{
   console.log('hitting route');
   console.log(req.params);
   let cat = await Cat.findOne({name:req.params.name})

   console.log(cat)
   
   let user = await User.findOne({cat:cat._id})
   console.log(user)

   res.send({cat, user})

}

const updateCat = async (req, res) =>{
   console.log("hitting route");
    let catId = {_id:`${req.params.catId}`}
    let myData = req.body
    let response = await Cat.findByIdAndUpdate(catId, myData, {new:true})
console.log(response);   res.json({catId, body:response})
}

module.exports = { createCat, getAllCats, getSingleCat, updateCat }