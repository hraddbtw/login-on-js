var jonh = ['john', 123456];
var jane = ['jane', 564321];
var alex = ['alex', 987654];

var users = [john, jane, alex];

for(var i = 0; i < users.length;){
    console.log(users[i])
}

function checkUser(user,baseUsers){
    for(var i = 0; i < baseUsers.lenght;i++){
        if(baseUsers[i][0]  == user[0] && baseUsers[i][1] == user[1]){
            return true
        }
    }
    return false
}

var User = prompt('Введите логин')
var UserPass = prompt('Введите пароль')

    