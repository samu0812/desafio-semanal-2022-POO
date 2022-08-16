function anagram($string_1, $string_2)
    {
        if (count_chars($string_1) == count_chars($string_2))
            return "True";
        else 
            return "False";       
    }
  
    console.log(anagram('roma', 'mora'));
    console.log(anagram('poco', 'loco'));