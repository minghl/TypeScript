# 第一节课

## 1. 什么是TS

ts是js的‘类型’超集

## 2. 为什么要用TS

别把问题放在运行后，把问题放在开发时

TS：强类型语言

## 3. 环境搭建

https://www.xuexiluxian.cn/blog/detail/8b8e67922a714696820cd7cefc0526ab

1.1 安装

npm install -g typescript

1.2 编译

tsc helloworld.ts

1.3 监听编译

tsc -w helloworld.ts

2.1 运行命令

tsc --init

2.2 修改配置

noEmitOnError:true

# 第二节课

## 1. ts基本类型约束写法

字符串、数值、布尔、any、null、undefined

字符串：
let str: string = "你好呀";

数值：
let num: numebr = 123;

布尔：
let bool: boolean = true;

any：
let an: any = true;
*any：可以是任何类型
*注意是小写

arr：
数组每一个成员必须是xx类型
let arr: number[] = [1, 2, 3];
let arr:Array<number>= [1,2,3]
数组中可能存在多个类型
let arr:[string,number] = ['a',1]
let arr:(string | number)[] = ['a',1]

void：
无返回值
function fun():void{     }

对象：
let obj1:{
a:number;
b:number;
}

# 第三节课

## 1. 普通函数写法

```tsx
function fun(a:number,b:number): number{
    return a+b;
}
fun( 1, 2 )
```

### 二、可选参数：使用缺省?

```kotlin
function fun(a:number,b?:number){

}
fun(1,2)
表示参数2，可有可无
```

### 三、默认参数

```kotlin
function fun(a:number = 123){
    
}
```

### 四、变量或者常量对于函数的约束

```kotlin
const fun: (params1:number,params2:number) => number = (a:number,b:number):number =>{
    return 1
}
fun(1,2);
```

# 第四节课

## 01 interface接口

1.1 是什么：自定义一个约束结构
1.2 使用：

```tsx
interface Idata{
  a:number;
  b:string;
}

***1. 首字母要大写
***2. 结束是;结尾
let obj1:Idata={
  a:1,
  b:'你好'
}

```

2.1 axios二次封装和解耦

3.1 interface继承

```tsx
interface IObj1{
    userName:string;
    run():void;
}

interface IObj2 extends IObj1{
    age:number;
}

class Person implements IObj2 {
    userName: string;
    age: number;
    run(){

    }
}
```

# 第五节课

## 01 ts中的类

1.1 普通写法

```tsx
class Person{
	userName:string
	readonly userAge:number
	constructor( name:string,age:number ){
		this.userName = name;
		this.userAge = age;
	}
}
new Person('小鹿线',3)
```

1.2 修饰符

```tsx
public  公开的，在任何地方都可以访问
protected 受保护的，只能在当前类和当前类的子类内部使用
private 私有的，当前类的内部使用，子类不行
readonly 只读
```

1.3 抽象类

```tsx
3.1 不完成具体的功能
3.2 抽象类不能new
3.3 抽象类可以继承，如果要继承，就必须实现该类的抽象方法
abstract class {
	abstract connection():void;
}
```

```tsx
抽象类使用场景
abstract class Db{
	abstract connection():void;
	abstract auth():void;
}

class mySql extends Db{
	connection(){

	}
	auth(){
	
	}
}
new mySql();
```

## 02 implements

```tsx
类的约束
interface IObj1{
    userName:string;
    run():void;
}

class Person implements IObj1 {
    userName: string;
    run(){

    }
}
```

```tsx
联合约束
nest用的比较多
interface IObj1{
    userName:string;
    run():void;
}

interface IObj2{
    age:number;
}

class Person implements IObj1,IObj2 {
    userName: string;
    age: number;
    run(){

    }
}
```

```tsx
interface继承
interface IObj1{
    userName:string;
    run():void;
}

interface IObj2 extends IObj1{
    age:number;
}

class Person implements IObj2 {
    userName: string;
    age: number;
    run(){

    }
}
```

# 第六节课

## 01 泛型

泛型：是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```tsx
interface Array<T>{

}
//注意：这里写了一个T，这就解释了：不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
let arr1:Array<number> = [1,2,3];
let arr2:Array<string> = ['a','b','c'];

//这里的 Array<string> 就是使用了泛型
```

##  02 函数泛型

```tsx
function fun1<T>( option:T ): T{
    return option;
}
fun1<string>('123');
fun1<number>(123);

//这里T是一个标识符，代表一个类型，当然也可以写成任意的（M，U等等），但是一般都写T
```

```tsx
多个标识符
function fun2<T,M>( a:T,b:M ) :T {
    return a;
}
fun2<string,number>('1',2);
```

## 03 接口泛型

```tsx
需求：函数的参数返回值必须有length属性
function fun3<T extends string>( arg:T ):number {
    return arg.length;
}
fun3<string>('str');

//T extends string 表示泛型T必须是string的子类
```

```tsx
但是如果需求是：普通字符串或者数组成员也是字符串的，就需要这样写了（联合声明）
function fun5<T extends string | string[]>( arg:T ){

}
fun5<string>('123');
fun5<string[]>(['a','b',]);
```

```tsx
// 结合interface接口去使用
interface Idata{
    length:number;
}
function fun4<T extends Idata>( arg:T ){

}
fun4<string[]>(['a','b','c']);
fun4<string>('123');
```

```tsx
泛型接口
interface Ires<T>{ 
    data:T;
    name:string;
    age:number;
}

let apple:Ires<string> = {
    data:'123',
    name:"张三",
    age:18
}
```

## 04 泛型class

```tsx
class Person<T>{
    userName:T
    constructor( name:T ){
        this.userName = name;
    }
}
let person = new Person<string>('张三');
```

# 第七节课

## 01 项目中泛型，读源码

```tsx
interface ImostNew{
    pageNum:number;
    pageSize:number;
}

interface IRese<T>{
    data: T;
    status: number;
    statusText: string;
    headers: {};
    config: {};
    request?: any;
}

interface Idata{
    data:{},
    meta:{
        code:string;
        msg: string;
        success: boolean;
        timestamp: string;
        version:string;
    }
}

export function mostNew( data:ImostNew ): Promise<IRes<Idata>>{
    return request({
        url:'/api/course/mostNew',
        method:'post',
        data
    })
}
```

## 02 types

```
全局文件夹，定义全局的type
.d.ts
```

# 第八节课

## 01 什么是装饰器

装饰器：就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

- 常见的装饰器有：类装饰器（无法传参）、属性装饰器、方法装饰器、参数装饰器 
- 装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）
- 装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一

如果要使用装饰器，必须在tsconfig.json进行配置

nestjs用很多

```json
"experimentalDecorators": true,
```

## 02 类装饰器

```tsx
function fun( target:any ){
    target.prototype.userName = '张三';
}

@fun // fun(Person)
class Person{
}
let p1 = new Person();
//@ts-ignore
console.log( p1.userName );
```

## 03 装饰器工厂

```tsx
function fun1(  options:any  ){
    return ( target:any )=>{
        target.userName = options.name;
        target.prototype.age = options.age;
    }
}
@fun1({
    name:'李四',
    age:18
})
class Obj1{ 

}
let obj1 = new Obj1();
//@ts-ignore
console.log( Obj1.userName, obj1.name , obj1.age );
// 利用闭包，传递参数
```

## 04 装饰器组合

```tsx
function demo1( target:any ){
    console.log('demo1')
}
function demo2(  ){
    console.log('demo2')
    return ( target:any )=>{
        console.log('demo2里面')
    }
}
function demo3( ){
    console.log('demo3')
    return ( target:any )=>{
        console.log('demo3里面')
    }
}
function demo4( target:any ){
    console.log('demo4')
}

@demo1
@demo2()
@demo3()
@demo4
class Person{

}

/*结果是：
装饰器工厂：
demo2
demo3

类装饰器：
demo4
demo3里面 --> 里面是类装饰器
demo2里面
demo1
*/
```

结合起来一起使用的时候, 会先 **从上至下** 的执行所有的装饰器工厂, 拿到所有真正的装饰器, 然后再 **从下至上** 的执行所有的装饰器：

## 05 属性装饰器

```tsx
function fun3( arg:any ){
    return ( target:any , attr:any )=>{
      // target 类本身，attr 属性名， arg 属性值
        target[attr] = arg;
    }
}

class Obj3{
    @fun3('张三')
    //@ts-ignore
    userName:string
}   
let obj3 = new Obj3();
console.log( obj3.userName );
```

## 06 方法装饰器

```tsx
function test( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
  // target 类本身， propertyKey 方法名， 
    console.log( target );
    console.log( propertyKey );
    console.log( descriptor );
}


class Person {
    @test
    sayName() {
        console.log( 'say name...' )
       return 'say name...';
    }
}

let p = new Person();
p.sayName()
```

