export type UserT = {
    id: number;
    name: String;
    password: String;
    email: String;
    token?: null | String;
}

const users = [
    { id: 1, name: "Americo Salazar", password: "123", email: "t_h_efratellis@hotmail.com", token: "" },
    { id: 2, name: "Alexandra Moreira", password: "123", email: "disensadelgadobasurto@yahoo.com", token: "" },
    { id: 3, name: "Ruslana Matias", password: "123", email: "josedelgado1987@gmail.com", token: "" },
];

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

const ms = getRandom(0, 1000)

const waitUser = (user: UserT | undefined, ms: number, error: String) => {
    return new Promise( (resolve: Function, reject: Function) => {
        setTimeout(() => {
            if (user) resolve({ user })
            reject(error)
        }, ms)
    })
}

function findByEmail(email: string) : Promise<UserT> | Promise<unknown> {
    const user: UserT | undefined = users.find(user => user.email === email) 
    return waitUser(user, ms, "User not found")
}

function findByToken(token: string) : Promise<UserT> | Promise<unknown>  {
    const user = users.find(user => user.token === token)
    return waitUser(user, ms, "User not found")
}

function updatePassword(data: { id: number, newPassword: string }) : Promise<UserT> | Promise<unknown>  {
    const user = users.find((user, i) => {
        if (user.id == data.id) {
            user.password = data.newPassword
            user.token = ""
            return user
        }
    });
    console.log({user})
    return waitUser(user, ms, "User could not be updated")
}

function updateToken(data: { id: number, token: string }) : Promise<UserT> | Promise<unknown> {
    const user = users.find((user, i) => {
        if (user.id == data.id) {
            user.token = data.token
            return user
        }
    });
    
    return waitUser(user, ms, "User could not be updated")
}

const User = {
    findByEmail,
    findByToken,
    updatePassword,
    updateToken
}

export default User
