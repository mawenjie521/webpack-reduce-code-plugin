const {parse} = require('@babel/parser');
const {default: traverse} = require('@babel/traverse');
const {default: generate} = require('@babel/generator');

module.exports = function(source){
    console.log('this is rrr', process.env.NODE_ENV_)
    const originAST = parse(source, {
        sourceType: 'module'
      });
      console.log(originAST);
      traverse(originAST, {
        IfStatement(path){
          const {node}=path;
          if(node.test){
            // const i = 6;
            // console.log(node);
            const comments = node.test.leadingComments;
            console.log(node);
            if(comments && comments.length>0){
                console.log('this is comments', eval(comments[0].value))
              if(eval(comments[0].value)){
                delete node.alternate;
              }else{
                if(node.alternate){
                  node.consequent = node.alternate;
                  delete node.alternate;
                  delete node.test.operator;
                  delete node.test.left;
                  delete node.test.right;
                  node.test.type = 'BooleanLiteral'
                  node.test.value = true;
                  console.log(node.test);
                }else{
                  node.consequent.body = [];
                }
              }
            }
            // console.log(node);
          }
        }
      });
      const targetCode = generate(originAST, {}, source);
      console.log(targetCode.code);
      return targetCode.code;
}