const re = /function\s*/;

function getFunctionName(code) {
    let bracePosition = code.indexOf('(');
    return code.substring(0, bracePosition);
}

function constractConsoleCall(functionName) {
    return `\n console.log("${functionName}");`;
}

function insertStringAtPosition(source, insert, position) {
    return [source.slice(0, position), insert, source.slice(position)].join('');
}

module.exports = function(source) {
    let functionBlocks = source.split(re);
    for(let i = 1; i < functionBlocks.length; i++) {
        if (functionBlocks[i].charAt(0) !== '(') {
            let functionName = getFunctionName(functionBlocks[i]);
            let curlyBracketPosition = functionBlocks[i].indexOf(' {');
            functionBlocks[i] = insertStringAtPosition(functionBlocks[i], constractConsoleCall(functionName), curlyBracketPosition + 2);
        }
    }

    source = functionBlocks.join('function ');

    return source;
  };