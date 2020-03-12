import User from './schemas/userSchema';
import { UserParam } from '../parameters/userParam';
import bcrypt from 'bcrypt';
import Mongoose from 'mongoose';

export class UserRepository {

    private saltRound: number = 10;

    public async Save(userParam: UserParam): Promise<any> {
        if (userParam.isValid()) {
            userParam.password = await bcrypt.hash(userParam.password, this.saltRound);
            const user = new User({ ...userParam });
            await user.save();
            return user._id.toHexString();
        } else {
            throw Error("Please fill required fields");
        }
    }

    public async isValidUser(email: string, password: string): Promise<any> {
        const user: any = await User.findOne({ email: email });
        if (user != null) {
            const isValidUser = await bcrypt.compare(password, user.password);
            if (isValidUser) {

                const token = user.generateAuthToken()
                return {
                    token,
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }
            } else {
                throw Error("Wrong password.");
            }
        }else{
            throw Error("User not registered");
        }
    }

}