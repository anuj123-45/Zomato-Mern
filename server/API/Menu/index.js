// Libraries
import passport from "passport";
import express from "express";

// Database Model
import {MenuModel} from '../../database/allmodels';

const Router = express.Router();

/*
Route    /r
Des      get all food based on particular restaurant
Access   Public
Params   None  
Method   Get
*/