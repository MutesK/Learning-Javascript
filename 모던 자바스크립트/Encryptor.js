function Encryptor()
{
    var obj = {};


    var N_ALPHABET = 26;
    var extraCharacters = [" ", ".", "?", "!", "%", "#", "'", "&", "$", "@", ":", "/" ];

    obj.chars = [];

    for(var c="a".charCodeAt(0); c<="z".charCodeAt(0);c++)
    {
        obj.chars.push(String.fromCharCode(c));
    }

    for(var c="A".charCodeAt(0); c<="Z".charCodeAt(0);c++)
    {
        obj.chars.push(String.fromCharCode(c));
    }

    for(var d=0; d<=9; d++)
    {
        obj.chars.push(d.toString());
    }

    for(var j=0; j<=extraCharacters.length; j++)
    {
        obj.chars.push(extraCharacters[j]);
    }

    obj.length = obj.chars.length;

    

    return obj;
}