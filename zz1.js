document.write('Задание 1. Объявите переменную и запишите в нее свое имя как литерал строки');
let $name=`Rustam `;
document.writeln('<br/>Моё имя: ' + $name);
document.writeln('<br/>'+'Задание 2. Объявите константы и запишите в нее месяц и год своего рождения как литерал числа.');
let $dr=`28.03.2000`;
document.writeln('<br/>Мой год рождения: ' + $dr);
document.writeln('<br/>Создайте функцию, которая печатает приветствие и имеет три  аргумента: name, month, year.');
let $privet=`Здраствуй, `;
let $month=`,родившийся 28 марта `;
let $god=`2000 года`;
document.writeln('<br/>'+$privet+$name+ $month+$god);
document.writeln('<br/>Задание 4 Реализуйте функцию range(start: number, end: number):array которая отдает массив чисел из диапазона [-15, 15] включая крайние числа.');
let $range=new array(30);

 for( let $i=0;$i<$range.length;$i++)
 {
     $range[$i]=$i;
     document.writeln('<br/>'+$i)
 }
 document.writeln('<br/>Задание 5 Реализуйте функцию rangeOdd(start: number, end: number): array которая отдает массив четных чисел из диапазона [-15, 15] включая крайние числа.');
 let $rangeOdd=[];
 for( let $i=0;$i<$range.length;$i++)
 {
     $range[$i]=$i;
     if($range[i]%2===0)
     {
     document.writeln('<br/>'+$i)
     }
 }
 document.writeln('<br/>Задание 7Реализуйте функцию average с сигнатурой average(a: number, b: number): number вычисляющую среднее арифметическое своих аргументов.');
 
