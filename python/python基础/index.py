# 转义字符
print('I\'m ok')
# r'' 表示内部字符串默认不转义
print(r'\\\t\\')
# '''...''' 表示多行内容
print('one\ntwo')
print('''
one
two
''')
print(r'''
...one\n
...two
 ''')

# %运算符用来格式化字符串，在字符串内部，%s表示用字符串替换，%d,表示用整数替换

# list和tuple 【tʌpəl】

#  classmates = [1,2,3,34]

# 和js一致可以根据索引list的值，索引值可以为负，js不能，
# 增 [].append()
# 插入 inster [].insert(位置，内容)
# 删 pop [].pop(index) 无参数删除最后一位，参数是删除指定位置

# tuple 一旦初始化就不能修改，定义的时候tuple的元素必须确定下来

#   classmate = ('Michael', 'Bob', 'Tracy')

# 定义一个的时候容易和小括号产生歧义，

#  t = (1,)

# ==== 条件判断
# num = input('please entry your age:')
# age = int(num)
# if age > 20:
#     print('you are old')
# else:
#     print('you are so young')

# 循环 range(5)生成从0开始的序列，break提前结束循环，continue跳出这次循环
names = ['a', 'b', 'c']

for x in names:
    print('hello', x)
sum = 0
n = 99
while n>0:
    sum = sum + 1
    n = n -2
print(sum)

# dict全称dictionary,在其他语言中成为map，以key-value的形式储存数据，和js中json对象类似
# set 与es6中的set数据结构基本一致