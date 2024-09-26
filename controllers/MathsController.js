import Controller from "./Controller.js";
import * as mathUtilities from "../mathUtilities.js";

export default class MathsController extends Controller {
  constructor(HttpContext) {
    super(HttpContext);
  }
  get(id) {
    let x = parseInt(this.HttpContext.path.params.x);
    let y = parseInt(this.HttpContext.path.params.y);
    let n = parseInt(this.HttpContext.path.params.n);
    var response = {};
    
    response.op = this.HttpContext.path.params.op;
    switch (this.HttpContext.path.params.op) {
      case " ":
        response.x = x;
        response.y = y;
        if (!isNaN(x) && !isNaN(y)) {
          response.value = x + y;
        } else if (!isNaN(x)) {
          response.error = "x is not a number";
        } else if (!isNaN(y)) {
          response.error = "y is not a number";
        }
        break;
      case "-":
        response.x = x;
        response.y = y;
        if (!isNaN(x) && !isNaN(y)) {
          response.value = x - y;
        } else if (!isNaN(x)) {
          response.error = "x is not a number";
        } else if (!isNaN(y)) {
          response.error = "y is not a number";
        }
        break;
      case "*":
        response.x = x;
        response.y = y;
        if (!isNaN(x) && !isNaN(y)) {
          response.value = x * y;
        } else if (!isNaN(x)) {
          response.error = "x is not a number";
        } else if (!isNaN(y)) {
          response.error = "y is not a number";
        }
        break;
      case "/":
        response.x = x;
        response.y = y;
        if (!isNaN(x) && !isNaN(y)) {
          response.value = x / y;
        } else if (!isNaN(x)) {
          response.error = "x is not a number";
        } else if (!isNaN(y)) {
          response.error = "y is not a number";
        }
        break;
      case "%":
        response.x = x;
        response.y = y;
        if (!isNaN(x) && !isNaN(y)) {
          response.value = x % y;
        } else if (!isNaN(x)) {
          response.error = "x is not a number";
        } else if (!isNaN(y)) {
          response.error = "y is not a number";
        }
        break;
      case "!":
        response.n = n;
        if (!isNaN(n)) {
          response.value = mathUtilities.factorial(n);
        } else {
          response.error = "n is not a number";
        }
        break;
      case "p":
        response.n = n;
        if (!isNaN(n)) {
          response.value = mathUtilities.isPrime(n);
        } else {
          response.error = "n is not a number";
        }
        break;
      case "np":
        response.n = n;
        if (!isNaN(n)) {
          response.value = mathUtilities.findPrime(n);
        } else {
          response.error = "n is not a number";
        }
        break;
        default:
            response.error = "Unknown operation";
        break;
    }
    this.HttpContext.response.JSON(response);
  }
  post(data) {
    this.HttpContext.response.JSON("Unvalid Operation");
  }
  put(data) {
    this.HttpContext.response.JSON("Unvalid Operation");
  }
  remove(id) {
    this.HttpContext.response.JSON("Unvalid Operation");
  }
}
