/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var m = parseInt(readline());
var land = [];
var max_casualties,total_casualties;
for (var i = 0; i < m; i++) {
    var battleground = readline();
    land.push(battleground.split(''));
}

// Convert from text to number
for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
        if (land[i][j] == "x")
            land[i][j] = 1;
        else if (land[i][j] == ".")
            land[i][j] = 0;
    }   
}

if (n >= m) {
  max_casualties = 0;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < m; j++) {
      max_casualties += land[i][j];
    }
  }
}
else {
  max_casualties = -1;
  for (var i = 0; i < m - n + 1; i++) {
    for (var j = 0; j < m - n + 1; j++) {
      total_casualties = 0;
      for (var k = i; k < k + n; k++) {
        for (var l = j; l < l + n; l++) {
          total_casualties += land[k][l];
        }
      }
      if(max_casualties < total_casualties) {
        max_casualties = total_casualties;
      }
    }
  }
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(max_casualties);