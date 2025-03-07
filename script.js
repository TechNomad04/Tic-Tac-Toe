let arr = [['','',''], ['','',''], ['','','']];

function createUser(name, marker){
    this.name = name;
    this.marker = marker;
    this.mark = function(x, y){
        arr[x][y] = this.marker;
    };
}

function start(){
    let user1 = createUser('Samiksha', 'X');
    let user2 = createUser('Agarwal', 'O');
}