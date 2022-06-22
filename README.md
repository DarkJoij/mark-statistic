# Description
**mark-statistic** is a package made for students to count their results on some exams.
You can count your results for Russian Main State Exam, Russian United State Exam and other else exams.

# Installition
```bash
$ npm i mark-statistic
```

# Manual
#### Representing results:
Main class representing your result for some exam is `Subject`. It takes 5 parameters: 4 requered and 1 optional: 
```ts
constructor(
    name: string, 
    result: number, 
    max: number, 
    grades: number[], 
    countable: boolean = false
)
```
* `name: string` - The name of subject were passing.
* `result: number` - The number of points you earned on this exam.
* `max: number` - Max number of points can be earned on this exam.
* `grades: number[]` - Array of points that equal some value in marks. Marks goes in order: `[x, y, z]`: 
```ts
[
    /* Points lower than 3 */ 
    3, 
    /* Points between 3 and 4 */ 
    4, 
    /* Points between 4 and 5 */ 
    5 
    /* Points higher than 5 */ 
]
```
For example in Math Russian Main State Exam `grades` param will be `[8, 15, 22]`. You can add only 3 grade.
* `countable: boolean = false` - This mark means that this exam will be counted with other exam with similar mark in hundred point system.

#### Creating table:
To create table you need to call function `createTable(subjects: Subject[])`. 

It takes 1 param: `subjects: Subject[]`, an array with initialized classes `Subject`.
```js
const { Subject, createTable } = require('mark-statistic');

// Create result for Russian Main State Exam:
const maths = new Subject('Maths', 26, 32, [8, 15, 22], true);
const russianLanguage = new Subject('Russian language', 30, 32, [15, 23, 29], true);

const myResults = [maths, russianLanguage];
console.log(createTable(myResults));
```
**Output will be:**
```bash
+-------------------------------------------------+
|            Your final exam statistic            |
+------------------+---------+---------+----------+
|      Subject     | Integer | D. mark | Percents |
+------------------+---------+---------+----------+
| Russian language | 30 / 32 |  5 / 5  |   94 %   |
+------------------+---------+---------+----------+
|       Maths      | 26 / 32 |  5 / 5  |   81 %   |
+------------------+---------+---------+----------+
|                Total result: 175B               |
+-------------------------------------------------+
```

If you will enter negative numbers to `constructor` in class `Subject` error will thown, similar if you will pass empty array to function `createTable`.

# Example 
### Russian Main State Exam
```js
const { Subject, createTable } = require('mark-statistic');

const mySubjects = [
    new Subject('Maths', 24, 32, [8, 15, 22], true),
    new Subject('Physics', 29, 43, [12, 23, 35]),
    new Subject('Russian language', 30, 32, [15, 23, 29], true),
    new Subject('Informatic', 18, 19, [5, 10, 16], true)
];

console.log(createTable(mySubjects));
```
```bash
+-------------------------------------------------+
|            Your final exam statistic            |
+------------------+---------+---------+----------+
|      Subject     | Integer | D. mark | Percents |
+------------------+---------+---------+----------+
| Russian language | 30 / 32 |  5 / 5  |   94 %   |
+------------------+---------+---------+----------+
|    Informatic    | 18 / 19 |  5 / 5  |   95 %   |
+------------------+---------+---------+----------+
|      Physics     | 29 / 43 |  4 / 5  |   67 %   |
+------------------+---------+---------+----------+
|       Maths      | 24 / 32 |  5 / 5  |   75 %   |
+------------------+---------+---------+----------+
|                Total result: 264B               |
+-------------------------------------------------+
```

# Feedback
Open [issues](https://github.com/DarkJoij/mark-statistic/issues) and [pull requests](https://github.com/DarkJoij/mark-statistic/pulls) if it's mandatory. Thanks for reading and downloading.