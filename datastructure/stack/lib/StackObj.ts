 // 存储结构  JSONObject
 //  O(n)  O(1)
 // 必须实现一下属性和方法
 interface StackObj {
    [propName: number] : any; //JSON中属性名是变量，用[]  ??? [propName: number] 这是类型为number的key, any意味这赋予的value值可以是任意类型。
 }

 export default class ObjStack {
     // 定义栈并规定其类型
     private items: StackObj;// 先声明再用  items  是JSON 
     private count: number; //array .length-1  count用于计数

     constructor() {
         this.items = {}; //JSON object
         this.count = 0;
     }

     push(item: any) {
         this.items[this.count] = item;
         this.count++;
     }

     pop() {
         if(this.isEmpty()){
             return undefined
         }
         this.count--;
         const result = this.items[this.count];
         delete this.items[this.count];
         return result
     }
     peak() {
         if (this.isEmpty()) {
             return undefined;
         }
         return this.items[this.count - 1];
     }
     isEmpty() {
         return this.count == 0;
     }
     clear() {
         this.items = {}
         this.count = 0
     }
     size() :number {
         return this.count;
     }
     toString() {
         if (this.isEmpty()) {
             return ""
         }
         let objString = `${this.items[0]}`
         for (let i = 0; i < this.count; i++) {
             objString = `${objString}, ${this.items[i]}`
         }
         return objString
     }

 }