import { IsEmail } from "class-validator";

export class UserParam {
    userId: string = ""
    firstName :string = "";
    lastName: string ="";
    email: string = "";
    password: string = "";
    telephone: string = "";

    isValid(){
        const arrValidator = [this.firstName, this.email, this.password];
        return !arrValidator.includes("");
    }
}