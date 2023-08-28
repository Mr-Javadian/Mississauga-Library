function MyJavaScript(dropdown)
{
    var option_value = dropdown.options[dropdown.selectedIndex].value;
    var option_text = dropdown.options[dropdown.selectedIndex].text;
    if (option_value == "Persian") {
        
        window.open("indexfa.html","_self");
    }
    if (option_value == "English") {
        
        window.open("index.html","_self");                            }
    
}