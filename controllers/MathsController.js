import Controller from "./Controller.js";
import * as mathUtilities from "../mathUtilities.js";

export default class MathsController extends Controller {
  constructor(HttpContext) {
    super(HttpContext);
  }

  get(id) {
    let response = {};
    let x = this.HttpContext.path.params.x !== undefined ? parseInt(this.HttpContext.path.params.x) : undefined;
    let y = this.HttpContext.path.params.y !== undefined ? parseInt(this.HttpContext.path.params.y) : undefined;
    let n = this.HttpContext.path.params.n !== undefined ? parseInt(this.HttpContext.path.params.n) : undefined;
    let op = this.HttpContext.path.params.op;
    
    if (!op) {
      response.error = "Operation 'op' is missing";
      return this.HttpContext.response.JSON(response, 422);
    }
    
    if ((op === "+" || op === "-" || op === "*" || op === "/" || op === "%") && (x === undefined || y === undefined)) {
      response.error = "Parameters 'x' and 'y' are required for the operation";
      return this.HttpContext.response.JSON(response, 422);
    }

    if ((op === "!" || op === "p" || op === "np") && n === undefined) {
      response.error = "Parameter 'n' is required for this operation";
      return this.HttpContext.response.JSON(response, 422);
    }

    if (op === "/" && y === 0) {
      response.error = "'y' parameter cannot be zero for division";
      return this.HttpContext.response.JSON(response, 422);
    }
    

    if ((op === "+" || op === "-" || op === "*" || op === "/" || op === "%") && (isNaN(x) || isNaN(y))) {
      response.error = `'${isNaN(x) ? "x" : "y"}' parameter is not a number`;
      return this.HttpContext.response.JSON(response, 422);
    }

    if ((op === "!" || op === "p" || op === "np") && isNaN(n)) {
      response.error = "'n' parameter is not a number";
      return this.HttpContext.response.JSON(response, 422);
    }
    
    response.op = op;
    switch (op) {
      case "+":
        response.x = x;
        response.y = y;
        response.value = x + y;
        break;
      case "-":
        response.x = x;
        response.y = y;
        response.value = x - y;
        break;
      case "*":
        response.x = x;
        response.y = y;
        response.value = x * y;
        break;
      case "/":
        response.x = x;
        response.y = y;
        response.value = x / y;
        break;
      case "%":
        response.x = x;
        response.y = y;
        response.value = x % y;
        break;
      case "!":
        response.n = n;
        response.value = mathUtilities.factorial(n);
        break;
      case "p":
        response.n = n;
        response.value = mathUtilities.isPrime(n);
        break;
      case "np":
        response.n = n;
        response.value = mathUtilities.findPrime(n);
        break;
      default:
        response.error = "Unknown operation";
        return this.HttpContext.response.JSON(response, 422);
    }

    this.HttpContext.response.JSON(response);
  }

  post(data) {
    this.HttpContext.response.JSON({ error: "POST is not allowed for this endpoint" }, 405);
  }

  put(data) {
    this.HttpContext.response.JSON({ error: "PUT is not allowed for this endpoint" }, 405);
  }

  remove(id) {
    this.HttpContext.response.JSON({ error: "DELETE is not allowed for this endpoint" }, 405);
  }
}
