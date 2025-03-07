let arr = [['','',''], ['','',''], ['','','']];

function createUser(name, marker){
    this.name = name;
    this.marker = marker;
    this.mark = function(x, y){
        arr[x][y] = this.marker;
    };
}

function start(){
    let user1 = new createUser('Samiksha', 'X');
    let user2 = new createUser('Agarwal', 'O');
    play(user1, user2);
}

function play(user1, user2){
    let x = prompt("Enter x: ");
    let y = prompt("Enter y: ");
    if(arr[x][y] !== '')
        return play(user1, user2);
    user1.mark(x,y);
    console.log(arr);
    play(user2, user1);
}
start();