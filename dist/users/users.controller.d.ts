import { creteUsersDTO } from './dto/users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUsers(res: any, createUserDTO: creteUsersDTO): Promise<any>;
    getUsers(res: any): Promise<any>;
}
