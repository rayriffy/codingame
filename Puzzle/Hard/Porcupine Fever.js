/*
 * https://www.codingame.com/training/hard/porcupine-fever
 */

var N = parseInt(readline());
var Y = parseInt(readline());
let alive_in_year;
var cage=[];
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var S = parseInt(inputs[0]);
    var H = parseInt(inputs[1]);
    var A = parseInt(inputs[2]);
    cage.push(new Array(S, H, A));
}
for (var i = 0; i < Y; i++) {
    if(alive_in_year === 0) {
        break;
    }
    
    alive_in_year=0;
    
    for (var j = 0; j < N; j++) {

        cage[j][4] = cage[j][0]; // cache
        
        // Sick
        if (cage[j][1]-(cage[j][4]*2) < 0) {
            cage[j][0] += cage[j][1];
            cage[j][1] = 0;
        }
        else {
            cage[j][0] += cage[j][4]*2;
            cage[j][1] -= cage[j][4]*2;
        }
        
        // And then die
        cage[j][0] -= cage[j][4];
        
        // Calculate alive
        cage[j][2] = cage[j][0] + cage[j][1];
    }

    for (var j = 0; j < N; j++) {
        alive_in_year += cage[j][2];
    }
    print(alive_in_year);
}