"use strict";
// importing libraries and dependencies
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Handles the shape of the staff from th
 */
var Signup = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function Signup(firstname, lastname, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    return Signup;
}());
exports.Signup = Signup;
var Login = /** @class */ (function () {
    function Login(email, password) {
        this.email = email;
        this.password = password;
    }
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=staffViewModel.js.map