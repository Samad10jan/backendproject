import mongoose, { Schema } from "mongoose";
import jwt, { type Secret } from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String,

        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"

            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    { timestamps: true })

// Mongoose Hooks : "Pre" Middleware    
userSchema.pre("save", async function (next) {

    // checking if "password" isModified or not
    if (!this.isModified("password")) return

    this.password = await bcrypt.hash(this.password, 10)
    // next()
})

// creating method
// can be accessed using : user.isPasswordCorrect()
// other mongooese methods : https:is accessed by User.findOne({})


interface IUserMethods {
    isPasswordCorrect(password: string): Promise<boolean>
    generateAccessToken(): string
    generateRefreshToken(): string
}

userSchema.methods.isPasswordCorrect = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function (): string {
    const accessSecret = process.env.ACCESS_TOKEN_SECRET as Secret | undefined
    if (!accessSecret) {
        throw new Error("Access token secret is not configured")
    }

    const expiresIn = (process.env.ACCESS_TOKEN_EXPIRY ?? "1h") as string

    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName
        },
        accessSecret as any,
        { expiresIn } as any,
    )
}

userSchema.methods.generateRefreshToken = function (): string {
    const refreshSecret = process.env.REFRESH_TOKEN_SECRET as Secret | undefined
    if (!refreshSecret) {
        throw new Error("Refresh token secret is not configured")
    }

    const expiresIn = (process.env.REFRESH_TOKEN_EXPIRY ?? "7d") as string

    return jwt.sign(
        {
            _id: this._id,
        },
        refreshSecret as any,
        { expiresIn } as any,
    )
}

const User = mongoose.model("User", userSchema)

export default User;

