let inputString:string[] = process.argv.slice(2);
let input:string[] = [];
import fs = require('fs');
if(inputString.length === 0){
    process.stdout.write('No word');
}else{
    for(let i = 0; i < inputString.length; i++){
        input[i] = inputString[i];
    }

    fs.readFile('openthesaurus.txt', 'utf8', function(err,data){
        if(err){
            console.log(err);
        }    
        let dataArray:string[]=data.split('\n');
        for(let i = 0; i < input.length; i++){
            if(!data.match(input[i])){
                process.stdout.write('No Synonyms found!'); 
            }
            else{
                process.stdout.write('Your word: ' + input[i] + '\n');

                for(let j = 0; j < dataArray.length; j++){
                    if(dataArray[j].match(input[i])){
                        process.stdout.write(dataArray[j] + '\n');
                    }
                }
            }
        }
    });
}


