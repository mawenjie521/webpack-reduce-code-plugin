var t = require('@babel/types');
var {parse} = require('@babel/parser');
var {default: traverse} = require('@babel/traverse');
var {default: generate} = require('@babel/generator');

function HelloWorldPlugin(options) {
    // 使用 options 设置插件实例……
    console.log('this is helloWorldPlugin')
  }
  
  HelloWorldPlugin.prototype.apply = function(compiler) {
    // console.log('this is pro', process.env.NODE_ENV)
    compiler.hooks.make.tap('HelloWorldPlugin', (complication) => {
      complication.hooks.succeedModule.tap('HelloWorldPlugin', (module)=>{
        // console.log(module);
        const originCode = module._source._value;
        const originAST = parse(originCode, {
          sourceType: 'module'
        });
        // console.log(originAST);
        traverse(originAST, {
          IfStatement(path){
            const {node}=path;
            if(node.test){
              // const i = 6;
              console.log(node);
              const comments = node.test.leadingComments;
              console.log(node);
              if(comments && comments.length>0){
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
        const targetCode = generate(originAST, {}, originCode);
        module._source._value = targetCode.code;
      })
    });
  };
  
  module.exports = HelloWorldPlugin;