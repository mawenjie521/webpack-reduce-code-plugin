# 根据if中的注释去掉多余代码；

## plugin/index.js是webpack的plugin，仅支持js文件；
## plugin/loader.js 是webpack的loader，其他类型的资源转成js文件之后使用该loader对代码进行精简代码；

## 使用说明
```javascript
// package.json
{
    "build": "NODE_ENV_=pc webpack"
}
```
```javascript
// webpack.config.json
module.exports={
    plugins:[
        new removeExtraCode(),
        // new DefinePlugin({'process.env': stringifiedEnv})
    ]
}
```
```javascript
// index.js
if(/*process.env.NODE_ENV_==='web'*/i===5){
    i++;
}else{
    i=i+2
}
```