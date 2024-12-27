import joi from 'joi';

export const validateReviewData = (reviewObj) => {
    const Schema = joi.object({
        food: joi.string().required(), // MongoDB ObjectId for food (string type)
        restaurant: joi.string().required(), // MongoDB ObjectId for restaurant (string type)
        user: joi.string().required(), // MongoDB ObjectId for user (string type)
        rating: joi.number().min(1).max(5).required(), // Rating between 1 and 5
        reviewText: joi.string().required(), // Required review text
        isRestaurant: joi.boolean().required(), // Boolean indicating if it's related to a restaurant
        isFood: joi.boolean().required(), // Boolean indicating if it's related to food
        photos: joi.array().items(joi.string().required()) //
    })
    return Schema.validateAsync(reviewObj);
}

export const validateId = (id) => {
    const Schema = joi.object({
     _id: joi.string().required(),
    })
    return Schema.validateAsync(id);
}