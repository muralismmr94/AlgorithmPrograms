var utility=require('../Utility/utility')
const readline=require('readline-sync')

    var d = + process.argv[2];
    var m = + process.argv[3];
    var y = + process.argv[4];
    var num = utility.dayOfWeek(d, m, y);
    var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
    if (num <= res.length) {
        console.log("The day is  :" + res[num]);
    }
    else {
        console.log(" Invalid day ");
    }

