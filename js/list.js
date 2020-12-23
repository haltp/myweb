document.write("<ul><li>apple</li><li>banana</li></ul>");
let dan = 4;
document.write('<table border="1" style="width: 50%;">')
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        document.write('<tr class="odd" align="center">');
        document.write('<td>' + dan + ' * ' + i + '</td>');
        document.write('<td> = </td>');
        document.write('<td>' + dan * i + '</td>');
        document.write('</tr>');
    } else {
        document.write('<tr class="even" align="center">');
        document.write('<td>' + dan + ' * ' + i + '</td>');
        document.write('<td> = </td>');
        document.write('<td>' + dan * i + '</td>');
        document.write('</tr>');
    }
}
document.write('</table>');