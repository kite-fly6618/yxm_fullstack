export default class Stack {
    // 属性 java C# -> js
    // items 按照一定的方法去操作
    private items: any[];  // 存储结构
    constructor() {
        // 初始化
        this.items = [];
    }
    push(item:any) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    // 返回栈顶元素
    peak() {
       return this.items[this.items.length-1] 
    }
    isEmpty() {
        return this.items.length == 0
    }
    clear() {
        this.items = []
    }
    size() : number {
        return this.items.length
    }
    tostring() {
        return this.items.toString() 
    }
    
}