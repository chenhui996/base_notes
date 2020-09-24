### 正则表达式

- 字符串的一种匹配模式
  - 非要用正则吗？不一定
  - 但是能更快捷
- 构造函数创建需要多家一个\进行转译;

# 能干啥

- 查找;
- 替换;
- 验证;
- 分割;

# match()

- 检索返回一个字符串匹配正则表达式的的结果

```js
let arr = str.match(/\d+/g);
```

## 正则表达式中的特殊字符

# `\`

- 在非特殊字符之前的反斜杠表示：
  - 下一个字符是特殊字符，不能按照字面理解;
  - 表示一个字符边界;
- 在特殊字符之前的反斜杠表示：
  - 下一个字符不是特殊字符，应该按照字面理解;
  - 转义（Escaping）;

# `^`

- 匹配输入的开始;
- 如果多行标志被设置为 true，那么也匹配换行符后紧跟的位置;

# `$`

- 匹配输入的结束;
- 如果多行标志被设置为 true，那么也匹配换行符前的位置;

# `*`

- 匹配前一个表达式 0 次或多次。等价于 {0,};
  - 记住:前'一个'表达式,一个占位符;

# `+`

- 匹配前面一个表达式 1 次或者多次。等价于 {1,}。

# `?`

- 匹配前面一个表达式 0 次或者 1 次。等价于 {0,1};

# `.`

- （小数点）默认匹配'除换行符之外'的任何单个字符;

# `(x)`

- 匹配 'x' 并且记住匹配项;
- 其中括号被称为捕获括号;

# `(x)`与捕获括号解析：

- 模式 /(foo) (bar) \1 \2/ 中：
  - (foo) 和 (bar) 匹配并记住字符串:"foo bar foo bar" 中前两个单词;
  - 模式中的 \1 和 \2 表示:
    - '第一个'和'第二个'被'捕获括号'匹配的子字符串:
    - 即 foo 和 bar，匹配了原字符串中的后两个单词;
  - 注意 \1、\2、...、\n 是用在正则表达式的匹配环节，详情可以参阅后文的 \n 条目;
  - 在正则表达式的替换环节，则要使用像 $1、$2、...、\$n 这样的语法:
    - 'bar foo'.replace(/(...) (...)/, '$2 $1');
    - \$& 表示整个用于匹配的原字符串;

# `(?:x)`

- 匹配 'x' 但是不记住匹配项;
- 这种括号叫作非捕获括号:
  - 使得你能够定义与正则表达式运算符一起使用的子表达式;
  - 看看这个例子:
    - /(?:foo){1,2}/;
  - 如果表达式是 /foo{1,2}/;
  - {1,2} 将只应用于 'foo' 的最后一个字符 'o';
  - 如果使用非捕获括号，则 {1,2} 会应用于整个 'foo' 单词;
- 也就是需要整个匹配，但是不需要捕获的时候，可以用;

# `x(?=y)`

- 匹配'x'仅仅当'x'后面跟着'y';
  - 这种叫做先行断言。
  - 例:/a(?=b)/
    - 我们只能匹配'a'后面跟着'b'的'a';

# `(?<=y)x`

- 匹配'x',仅当'x'前面是'y'的'x';
  - 这种叫做后行断言;

# `x(?!y)`

- 仅仅当'x'后面不跟着'y'时匹配'x';
  - 这被称为正向否定查找。

# `(?<!y)x`

- 仅仅当'x'前面不是'y'时匹配'x';
  - 这被称为反向否定查找。

# `x|y`

- 匹配‘x’或者‘y’;

# `{n}`

- n 是一个正整数，匹配了前面一个字符刚好出现了 n 次;

# `{n,}`

- n 是一个正整数，匹配前一个字符至少出现了 n 次;

# `{n,m}`

- n 和 m 都是整数。匹配前面的字符至少 n 次，最多 m 次。如果 n 或者 m 的值是 0， 这个值被忽略;

# `[xyz]`

- 一个字符集合。匹配方括号中的'任意字符'，包括转义序列;
- 你可以使用破折号（-）来指定一个字符范围;
- 对于点（.）和星号（\*）这样的特殊符号在一个'字符集'中没有特殊的意义;
  - 他们不必进行转义，不过转义也是起作用的;

# `[^xyz]`

- 一个反向字符集;
  - 也就是说， 它匹配任何没有包含在方括号中的字符;

# `[\b]`

- 匹配一个退格(U+0008)。（不要和\b 混淆了。）;

# `\b`

- 匹配一个词的边界:
  - 一个词的边界就是'一个词'不被另外一个“字”字符'跟随'的位置;
  - 或者前面跟其他“字”字符的位置;
  - 例如在字母和空格之间;
- 注意，匹配中不包括匹配的字边界,匹配一个词的边界的匹配长度是 0;

# `\B`

- 匹配非单词边界：
  - 例子："/oo\B/"匹配"boom"中的 "oo";

# `\cX`

- 当 X 是处于 A 到 Z 之间的字符的时候，匹配字符串中的一个控制符;
  - 例如，/\cM/ 匹配字符串中的 control-M (U+000D);
  - (没 get 到使用场景);

# `\d`

- 匹配一个数字。等价于[0-9];

# `\D`

- 匹配一个非数字字符。等价于[^0-9];

# `\f`

- 匹配一个换页符 (U+000C);

# `\n`

- 匹配一个换行符 (U+000A);

# `\r`

- 匹配一个回车符 (U+000D);

# `\s`

- 匹配一个空白字符，包括空格、制表符、换页符和换行符;

# `\S`

- 匹配一个非空白字符;
  - 等价于 [^ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff];

# `\t`

- 匹配一个水平制表符 (U+0009);

# `\v`

- 匹配一个垂直制表符 (U+000B);

# `\w`

- 匹配一个单字字符（字母、数字或者下划线）;
  - 等价于 [A-Za-z0-9_];

# `\W`

- 匹配一个非单字字符;
  - 等价于 [^a-za-z0-9_];

# `\n`

- 在正则表达式中，它返回'最后的第 n 个'子捕获匹配的子字符串(捕获的数目以左括号计数);
  - 比如 /apple(,)\sorange\1/ 匹配"apple, orange, cherry, peach."中的'apple, orange,' 。