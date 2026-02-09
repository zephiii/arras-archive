var _output = argument[0];
var len = array_length_1d(_output);

for (var n = 1; n < argument_count; n++)
{
    var _input = argument[n];
    
    for (var i = 0; i < len; i++)
        _output[i] = _output[i] * _input[i];
}

return _output;
