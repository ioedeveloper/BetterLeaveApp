// importing libraries and dependencies

/**
 * Handles the shape of the staff from th
 */
class Signup {
    // tslint:disable-next-line:max-line-length
    constructor(public firstname: string, public lastname: string, public email:string, public password:string) {

    }
}

class Login {
    constructor(public email: string, public password: string) {
    }
}

export {Signup, Login};