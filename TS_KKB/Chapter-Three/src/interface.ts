interface Point {
  x: number;
  y: string;
}

let p1: Point = {
  x: 100,
  y: "cain",
};
// 由于在dist文件下生成了js文件，其中声明的变量名称重复了，故会报错，无视即可;
