let input = document.getElementById('display');
// console.log(input);
function one()
{
    input.value += 1;
}
function two()
{
    input.value += 2;
}
function three()
{
    input.value += 3;
}
function four()
{
    input.value += 4;
}
function five()
{
    input.value += 5;
}
function six()
{
    input.value += 6;
}
function sev()
{
    input.value += 7;
}
function eight()
{
    input.value += 8;
}
function nine()
{
    input.value += 9;
}
function zero()
{
    input.value += 0;
}
function add()
{
    input.value += '+';
}
function sub()
{
    input.value += '-';
}
function mul()
{
    input.value += '*';
}
function div()
{
    input.value += '/';
} function ans()
{
    cal = eval(input.value);
    input.value = cal;
} function clr()
{
    input.value = '';
}