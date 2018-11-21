"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputString = process.argv.slice(2);
var input = [];
var fs = require("fs");
if (inputString.length === 0) {
    process.stdout.write('No word');
}
else {
    for (var i = 0; i < inputString.length; i++) {
        input[i] = inputString[i];
    }
    fs.readFile('openthesaurus.txt', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        var dataArray = data.split('\n');
        for (var i = 0; i < input.length; i++) {
            if (!data.match(input[i])) {
                process.stdout.write('No Synonyms found!');
            }
            else {
                process.stdout.write('Your word: ' + input[i] + '\n');
                for (var j = 0; j < dataArray.length; j++) {
                    if (dataArray[j].match(input[i])) {
                        process.stdout.write(dataArray[j] + '\n');
                    }
                }
            }
        }
    });
}
