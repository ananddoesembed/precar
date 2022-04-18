import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private repo;
    constructor(repo: Repository<User>);
    login(email: string, password: string): Promise<User>;
}
