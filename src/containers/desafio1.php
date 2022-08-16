<?php   
    function anagram($string_1, $string_2)
    {
        if (count_chars($string_1) == count_chars($string_2))
            return "True";
        else 
            return "False";       
    }
  
    print(anagram('roma', 'mora'));
    print(anagram('poco', 'loco'));
?>