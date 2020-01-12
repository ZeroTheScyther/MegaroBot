var lineReader = require('line-reader'),
    Promise = require('bluebird'),
    fs = require('fs'),
    path = require('path');

const { Parser } = require('json2csv');

const fields = ['name', 'count'];
var newArr = [];
var k = 0;

var eachLine = Promise.promisify(lineReader.eachLine);

eachLine(dataFile, function(line, last) {
    if(k > 1) {
        let start = line.indexOf(' ');
        let end = line.substr(start + 1, line.length).indexOf(' ');
        let substr = line.substr(start, start + end);
        let obj = substr.split('x');
        if(obj.length > 1) {
            var count = parseInt(obj.pop().trim());
            var name = obj.join('x').trim();
        } else {
            var count = 1;
            var name = obj[0].trim();
        }

        let o = {
            name,
            count,
        }

        newArr.push(o);
    }
    k ++;
}).then(function() {
    const json2csvParser = new Parser({fields});
    const csv = json2csvParser.parse(newArr);
    fs.writeFile("date.csv", csv, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});
