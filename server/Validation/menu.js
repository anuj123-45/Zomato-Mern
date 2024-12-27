import joi from 'joi';

export const validateMenuAndImageId = (id) => {
    const Schema = joi.object({
       _id: joi.string().required(),
    })
    return Schema.validateAsync(id);
}
