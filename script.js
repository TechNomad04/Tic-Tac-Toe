let arr = [['','',''], ['','',''], ['','','']];

function createUser(name, marker){
    this.name = name;
    this.marker = marker;
    this.mark = function(x, y){
        arr[x][y] = this.marker;
    };
    this.win = function(){
        if(arr[0][0] === this.marker && arr[0][1] === this.marker && arr[0][2] === this.marker || arr[1][0] === this.marker && arr[1][1] === this.marker && arr[1][2] === this.marker || arr[2][0] === this.marker && arr[2][1] === this.marker && arr[2][2] === this.marker || arr[0][0] === this.marker && arr[1][0] === this.marker && arr[2][0] === this.marker || arr[0][1] === this.marker && arr[1][1] === this.marker && arr[2][1] === this.marker || arr[0][2] === this.marker && arr[1][2] === this.marker && arr[2][2] === this.marker || arr[0][0] === this.marker && arr[1][1] === this.marker && arr[2][2] === this.marker)
            return true;
        return false;
    };
}

function start(){
    let user1 = new createUser('Samiksha', 'X');
    let user2 = new createUser('Agarwal', 'O');
    play(user1, user2);
}

function draw(){
    let farr = arr.flat();
    if(farr.indexOf('') === -1)
        return true;
    return false;
}

function play(user1, user2){
    for(let i = 0; i < 3;i++){
        for(let j = 0; j < 3; j++){
            document.querySelector(`.b${i}${j}`).addEventListener('click', ()=>{
                console.log("H");
                if(arr[i][j] !== '')
                    play(user1, user2);
                else{
                    if(draw()){
                        console.log("Draw");
                        return;
                    }
                    else{
                        user1.mark(i, j);
                        if(user1.win()){
                            console.log(user1.name + " wins!");
                            return;
                        }
                        play(user2, user1);
                    }
                }
            })
        }
    }
}

start();