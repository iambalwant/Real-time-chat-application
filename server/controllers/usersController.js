const User = require("../model/userModel");
const brcypt = require("bcrypt")


module.exports.register = async (req, res, next) => {
 try{
        //to see the current register data
    console.log(req.body);
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if(usernameCheck)
    return res.json({msg:"User already used", status: false});
    const emailCheck = await User.findOne({ email })
    if(emailCheck)
    return res.json({msg:"User already used", status: false});
    const hashedPassword = await brcypt.hash(password, 10);
    const user = await User.create({
        email,
        username,
        password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
 } catch(ex) {
    next(ex);
 }
};

//login

module.exports.login = async (req, res, next) => {
 try{
        //to see the current register data
    console.log(req.body);
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(!user)
    return res.json({msg:"Incorrect username and password", status: false});
    const isPasswordValid = await brcypt.hash(password, user.password);
    if(!isPasswordValid)
    return res.json({msg:"Incorrect username and password", status: false});
      delete user.password;
    return res.json({ status: true, user });
 } catch(ex) {
    next(ex);
 }
};

//avatar

module.exports.setAvatar = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const avatarImage = req.body.image.toString();
        console.log(`setting avatar image ${avatarImage} for user ${userId}`)
        const userData = await User.findByIdAndUpdate(userId, {
        isAvatarImageSet: true,
        avatarImage: avatarImage,
    });
    return res.json({
        isSet:true,
        image:avatarImage,});
    }catch(ex){
        next(ex);
    }
}

//chat

module.exports.getAllUsers = async (req, res, next) => {

    console.log('Finding users for id', req.params.id)

    try{
         const users = await User.find({_id:{$ne: req.params.id } })
         return res.json(users)
    }catch(ex){
        next(ex);
    }

}

module.exports.logOut = (req, res, next) => {
    try {
      if (!req.params.id) return res.json({ msg: "User id is required " });
      onlineUsers.delete(req.params.id);
      return res.status(200).send();
    } catch (ex) {
      next(ex);
    }
  };
  