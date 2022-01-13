import { resolve } from "path";
import { UserRepository } from "../../data/contracts";
import { User } from "../../domain/entities";

const bcrypt = require('bcrypt')
var fs = require('fs')

const salt = 10

export class UserFromFileRepository implements UserRepository {
    async create(userModel: User): Promise<User> {
        const hashedUser: User = {...userModel, password: await this.hashUserPassword(userModel.password, salt)}
        fs.readFile('./src/infra/dataSources/users.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            var table = JSON.parse(data); //now it an object
            table.push({...hashedUser}); //add some data
            const json = JSON.stringify(table); //convert it back to json
            console.log(json)
            fs.writeFile('./src/infra/dataSources/users.json', json, 'utf8', ()=>null); // write it back 
        }});


        console.log(`dentro do repository ${ hashedUser }`)
        return hashedUser
    }

    async filter(email:string): Promise<User[]> { 
        return new Promise((resolve, reject) => {
            fs.readFile('./src/infra/dataSources/users.json', 'utf8', function readFileCallback(err, data){
                var userArray: User[]
                if (err){
                    reject(err);
                } else {
                userArray = JSON.parse(data); 
                if (email) userArray = userArray.filter(user => user.email === email)       
                resolve(userArray) 
            }})    
        })   
    }

    async hashUserPassword(plainTextPassword: string, salt: Number): Promise<string>  {
        const hashedUserPassword = await bcrypt.hash(plainTextPassword, salt).then((hash)=>{
            return hash
        })
        return hashedUserPassword
    }

    async matchUserPasswords(plainTextPassword: string, hashedUserPassword: string): Promise<boolean> {
        const passwordMatch = await bcrypt.compare(plainTextPassword, hashedUserPassword).then((result)=>{
            return result
        })
        return passwordMatch
    }
}
