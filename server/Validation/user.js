import joi from 'joi';

export const validateUserId = (userId) => {
    const Schema = joi.object({
       _id: joi.string().required(),
    })
    return Schema.validateAsync(userId);
}

export const validateUserData = (userData) => {
    const Schema = joi.object({
        fullName: joi.string().required().min(5),
        email: joi.string().email().required(),
        password: joi.string().min(5),
        address: joi
            .array()
            .items(joi.object({ details: joi.string(), for: joi.string() })),
        phoneNumber: joi.number(),

    })
    return Schema.validateAsync(userData);
}