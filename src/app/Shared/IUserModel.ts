export class UserModel {
    constructor(
        public userName: string,
        public email: string,
        public password: string,
        public confpassword:string,
        public knowFrom: string
    ) {

    }

}