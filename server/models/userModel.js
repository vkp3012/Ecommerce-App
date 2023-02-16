const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//Declare the schema of the User Model

var userSchema = new mongoose.Schema(
    {
        firstname : {
            type : String,
            require : true,
        },

        lastname : {
            type : String,
            require : true,
        },
        email : {
            type : String,
            require : true,
            unique : true,
        },
        mobile : {
            type : String,
            require : true,
            unique : true,
        },
        password : {
            type : String,
            require : true,
        },
        role : {
            type : String ,
            default : user,
        },
        isBlocked : {
            type : Boolean,
            default: false,
        },
        cart : {
            type : Array,
            default : [],
        },
        address : {
            type : String,
        },
        wishlist : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product",
        }],
        refreshToken : {
            type : String,
        },
        passwordChangedAt : Data,
        passwordResetToken : String,
        passwordResetExpires : Date,
    },
    {
        timestamps : true,
    }
);

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.method.isPasswordMatched = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
};

userSchema.method.createPasswordResetToken = async function() {
    const resettoken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
        .createHash("vivek256")
        .update(resettoken)
        .digest("hex");

    this.passwordResetExpires = Date.now() + 30 *60 *1000;
    return resettoken;
}

//Export the model
module.exports = mongoose.model("User",userSchema);