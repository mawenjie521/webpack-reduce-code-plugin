const fs = require('fs');
const path = require('path');
const {parse} = require('@babel/parser');

const content = fs.readFileSync(path.join(__dirname, './test.js')).toString();
const i = 11133, qwewq=1111;
// console.log(parse(content).program.body[0].body.body[0]);
// console.log(parse(content).program.body[0].body.body[0].consequent.body[0].expression);
// console.log(parse(content).program.body[0].body.body[0].alternate.body[0].expression);
// console.log(eval(parse(content).program.body[0].body.body[0].test.leadingComments[0].value));
console.log(parse(content).program.body[0].body.body[0]);


// var t = require('@babel/types');
// var {parse} = require('@babel/parser');
// var {default: traverse} = require('@babel/traverse');
// var {default: generate} = require('@babel/generator');

// var orginCode = `findEleById("jyy")`;   // 原始代码
// // 生成原始AST
// var originAST = parse(orginCode, {
//     sourceType: "module"
// });
// // 对AST进行遍历并操作
// traverse(originAST,{
//     Identifier(path){
//         var {node} = path;
//         // 找到findEleById，将其替换成为目标节点
//         if(node && node.name === "findEleById"){
//             var newNode = t.memberExpression(t.identifier("document"), t.identifier("getElementById")); // 创建目标节点
//             path.replaceWith(newNode);  // 替换原始节点
//             path.stop();
//         }
//     }
// });
// const targetCode = generate(originAST, { /* options */ }, orginCode);   // 将转换后的AST生成目标代码
// console.log(targetCode);    // { code: 'document.getElementById("jyy");',map: null,rawMappings: undefined }
