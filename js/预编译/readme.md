# 预编译 发生在函数执行之前 四步曲
1. 创建AO (activation object)
2. 找形参和变量声明，将形参和变量声明作为AO对象的属性名，值为undefined
3. 将实参和形参统一
4. 在函数体里找 函数声明 (function a() {}) 将函数名作为AO对象的属性名，值为函数体（function() {}）,函数表达式（var b = function() {}） 


# 预编译也发生在全局 三步曲
1. 创建一个GO（global objection） 对象
2. 找变量声明，将变量声明作为GO对象的属性名，值为undefined
3. 在全局里找函数声明，将函数名作为GO对象的属性名，值为函数体（function() {}）

# 执行
