import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localfilePath: string | undefined | null, folder?: string): Promise<any | null> => {
    try {
        if (!localfilePath) return null

        const response = await cloudinary.uploader.upload(localfilePath, {
            resource_type: 'auto',
            folder,
        });

        console.log("File is uploaded", response.secure_url);

        if (localfilePath && fs.existsSync(localfilePath)) {
            fs.unlinkSync(localfilePath);
        }

        return response;
    } catch (error) {
        if (localfilePath && fs.existsSync(localfilePath)) {
            fs.unlinkSync(localfilePath);
        }

        console.error("Error while uploading on cloudinary", error);
        return null;
    }
}

export { uploadOnCloudinary };