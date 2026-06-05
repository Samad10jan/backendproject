import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        // verify JWT from cookies
        // accessToken in cookies (access due to cookie parser middleware)  and get get token from header as well if not in cookies
        const token = req.cookies.accessToken || req.header("Authorization")?.split(" ")[1];

        if (!token) {
            throw new ApiError(401, "Unauthorized: No token provided");

        }

        // accessToken have many things in it we signed like _id,email,username,fullName 
        // so we can just decode( jwt.verify() gives decoded data) it and get user _id 

        const accessSecret = process.env.ACCESS_TOKEN_SECRET
        if (!accessSecret) {
            throw new ApiError(500, "Access token secret is not configured")
        }

        const decodedToken = jwt.verify(token, accessSecret) as { _id: string }

        const user = await User.findById(decodedToken._id)
            .select("-password -refreshToken")

        if (!user) {

            throw new ApiError(401, "Invalid Access Token")
        }

        req.user = user;
        next() // tells: now my work is done go to next function given
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        throw new ApiError(401, message || "Invalid Access Token")
        // can be due to jwt.verify (because it also thorw error when token is expired or wrong secret key)
    }


});