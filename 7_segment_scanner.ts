<?php
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

$line1 = stream_get_line(STDIN, 900 + 1, "\n");
$line2 = stream_get_line(STDIN, 900 + 1, "\n");
$line3 = stream_get_line(STDIN, 900 + 1, "\n");
// Tableau contenant les chiffres en ascii de 0 à 9
$ascii = [
        [" _ ", "| |", "|_|"],
        ["   ", "  |", "  |"],
        [" _ ", " _|", "|_ "],
        [" _ ", " _|", " _|"],
        ["   ", "|_|", "  |"],
        [" _ ", "|_ ", " _|"],
        [" _ ", "|_ ", "|_|"],
        [" _ ", "  |", "  |"],
        [" _ ", "|_|", "|_|"],
        [" _ ", "|_|", " _|"],
];

for($x = 0; $x < strlen($line1); $x += 3){
    $tab1 = str_split($line1);
    $tab2 = str_split($line2);
    $tab3 = str_split($line3);

    $chiffre = [
            $tab1[$x] . $tab1[$x+1] . $tab1[$x+2], 
            $tab2[$x] . $tab2[$x+1] . $tab2[$x+2], 
            $tab3[$x] . $tab3[$x+1] . $tab3[$x+2], 
        ];
    
    echo array_search($chiffre, $ascii);
}

?>