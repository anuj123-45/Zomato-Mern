import joi from 'joi';

export const validateRestaurantCity = (resObj) => {
    const Schema = joi.object({
       city: joi.string().required(),
    })
    return Schema.validateAsync(resObj);
}

export const validateRestaurantSearchString = (searchString) => {
    const Schema = joi.object({
      searchString: joi.string().required(),
    })
    return Schema.validateAsync(searchString);
}