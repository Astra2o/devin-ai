import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const userSchema =new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name at least 3 characters length'],

        },
        lastname:{
            type:String,

        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:[6,'email must be 6 char long'],
        maxLength:[50,'email must be 6 char long']
    },
    password:{
        type:String,
        select:false

    }
})


userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}


userSchema.methods.comparePassword = async function (password) {
    console.log(password);
    console.log(this.password);
    
    
    return await bcrypt.compare(password, this.password);
}




const userModel = mongoose.model('user', userSchema)


export default userModel;