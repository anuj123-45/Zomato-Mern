import joi from 'joi';

export const validateImage = (image) => {
    const Schema = joi.object({
        fieldname: joi.string(), // Field name of the file input
        originalname: joi.string().required(), // File name
        encoding: joi.string(), // Encoding type
        mimetype: joi.string()
            .valid("image/jpeg", "image/png", "image/jpg")
            .required(),
        buffer: joi.any().required(), // File buffer
        size: joi.number(), // File size in bytes
    })
    return Schema.validateAsync(image);
}

