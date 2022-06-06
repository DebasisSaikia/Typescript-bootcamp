interface User{
    name:string;
    id:string;
    email?:string;
}

type UserOptionals=Partial<User>
const merge=(user:User,overrides:UserOptionals):User=>{
    return  {...user,...overrides}
}

console.log(merge({name:'Debasis',id:'4',email:'devasdsd'},{email:'niki'}));


type RequiredType=Required<User> //required utility type

type PickType=Pick<User,"email"|"name">
