import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo:Repository<User>){
    }
    login(email:string,password:string){
        const user  = this.repo.create({email,password})
        return this.repo.save(user)
    }
    findOne(id:number){
        return this.repo.findOne({where:{id}})
    }
    find(email:string){
        return this.repo.find({where:{email}})
    }
    async update(id:number,attr:Partial<User>){
        const user = await this.findOne(id)
        if(!user){
            throw new Error('user not found');
        }
        Object.assign(user,attr)
        return this.repo.save(user)
        
    }
    async remove(id:number){
        const user = await this.findOne(id)
        if(!user){
            throw new Error('user not found');
        }
        return this.repo.remove(user)
    }
}
