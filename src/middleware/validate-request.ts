import { body, validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { RequestValidationError } from "../errors/request-validation-error";

// Type alias for Validator Middleware
type ValidatorMiddleware = ValidationChain | RequestHandler;

const validateRequest: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  next();
};

export const validateSignup: ValidatorMiddleware[] = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 characters"),
  validateRequest,
];

export const validateSignIn: ValidatorMiddleware[] = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password").trim().notEmpty().withMessage("You must supply a password"),
  validateRequest,
];
