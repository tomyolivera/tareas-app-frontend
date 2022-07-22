export default interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    token: string;
    token_expiration_date: Date;
    created_at: Date;
    updated_at: Date;
}