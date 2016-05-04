const Harvey=require('../declare').Harvey;

require("../Types.js");

const assert = require('chai').assert;

describe("CheckType(blank)",function() {
    it("returns true on empty string",function(){
        assert.strictEqual(Harvey.checkType["blank"](""),true);
    });
    it("returns true with no arg",function(){
        assert.strictEqual(Harvey.checkType["blank"](),true);
    });
    it("returns true on undefined",function(){
        assert.strictEqual(Harvey.checkType["blank"](undefined),true);
    });
    it("returns true on null",function(){
        assert.strictEqual(Harvey.checkType["blank"](null),true);
    });
});


describe("CheckType(phoneNumber)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["phoneNumber"](""),false);
    });
    it("returns true for a mobile number",function(){
        assert.strictEqual(Harvey.checkType["phoneNumber"]("07714576205"),true);
    });
    it("returns true for a number with std code",function(){
        assert.strictEqual(Harvey.checkType["phoneNumber"]("+44(0)7714576205"),true);
    });
    it("returns false for an implausibly small number",function(){
        assert.strictEqual(Harvey.checkType["phoneNumber"]("1"),false);
    });
    it("returns false for a string",function(){
        assert.strictEqual(Harvey.checkType["phoneNumber"]("ffgjk"),false);
    });
    it("returns false for an array",function(){
        assert.strictEqual(Harvey.checkType["phoneNumber"](["ffgjk","y7ui"]),false);
    });
});

describe("CheckType(negative integer)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["negativeInteger"](""),false);
    });
    it("returns false on a string",function(){
        assert.strictEqual(Harvey.checkType["negativeInteger"]("rew"),false);
    });
    it("returns false on a positive integer",function(){
        assert.strictEqual(Harvey.checkType["negativeInteger"](10),false);
    });
    it("returns true on a negative integer",function(){
        assert.strictEqual(Harvey.checkType["negativeInteger"](-10),true);
    });
    it("returns false on a negative float",function(){
          assert.strictEqual(Harvey.checkType["negativeInteger"](-10.89),false);
    });
    it("returns false for an array",function(){
        assert.strictEqual(Harvey.checkType["negativeInteger"](["ffgjk","y7ui"]),false);
    });
});

describe("CheckType(positive integer)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["positiveInteger"](""),false);
    });
    it("returns false on a string",function(){
        assert.strictEqual(Harvey.checkType["positiveInteger"]("rew"),false);
    });
    it("returns false on a negative integer",function(){
        assert.strictEqual(Harvey.checkType["positiveInteger"]("-10"),false);
    });
    it("returns false on a positive float",function(){
        assert.strictEqual(Harvey.checkType["positiveInteger"]("10.43"),false);
    });
    it("returns true on a positive integer",function(){
        assert.strictEqual(Harvey.checkType["positiveInteger"]("10"),true);
    });
    it("returns false for an array",function(){
        assert.strictEqual(Harvey.checkType["positiveInteger"](["ffgjk","y7ui"]),false);
    });     
});

describe("CheckType(integer)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["integer"](""),false);
    });
    it("returns false on a string",function(){
        assert.strictEqual(Harvey.checkType["integer"]("rew"),false);
    });
    it("returns true on a negative integer",function(){
        assert.strictEqual(Harvey.checkType["integer"]("-10"),true);
    });
    it("returns false on a positive float",function(){
        assert.strictEqual(Harvey.checkType["integer"]("10.43"),false);
    });
    it("returns true on a positive integer",function(){
        assert.strictEqual(Harvey.checkType["integer"]("10"),true);
    });
});

describe("CheckType(count)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["count"](""),false);
    });
    it("returns false on a string",function(){
        assert.strictEqual(Harvey.checkType["count"]("rew"),false);
    });
    it("returns true on a negative integer",function(){
        assert.strictEqual(Harvey.checkType["count"]("-10"),true);
    });
    it("returns true on a positive float",function(){
        assert.strictEqual(Harvey.checkType["count"]("10.43"),true);
    });
    it("returns true on a positive integer",function(){
        assert.strictEqual(Harvey.checkType["integer"]("10"),true);
    });
});


describe("CheckType(float)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["float"](""),false);
    });
    it("returns false on string",function(){
        assert.strictEqual(Harvey.checkType["float"]("dfs"),false);
    });
    it("returns true on float as string",function(){
        assert.strictEqual(Harvey.checkType["float"]("10.2"),true);
    });
    it("returns true on integer as string",function(){
        assert.strictEqual(Harvey.checkType["float"]("10"),true);
    });
    it("returns true on 0 as string",function(){
        assert.strictEqual(Harvey.checkType["float"]("0"),true);
    });
    it("returns true on 0",function(){
        assert.strictEqual(Harvey.checkType["float"](0),true);
    });
    it("returns true on a negative number",function(){
        assert.strictEqual(Harvey.checkType["float"](-20),true);
    });
    it("returns true on a number 0.9090999909",function(){
        assert.strictEqual(Harvey.checkType["float"](0.90909999001),true);
    });
    it("returns true on a number 3213212310.9090999909",function(){
        assert.strictEqual(Harvey.checkType["float"](3213212310.90909999001),true);
    });
});

describe("CheckType(decimal)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["decimal"](""),false);
    });
    it("returns false on sqrt(-1)",function(){
        assert.strictEqual(Harvey.checkType["decimal"](Math.sqrt(-1)),false);
    });
});

describe("CheckType(integerArray)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["integerArray"](""),false);
    });
    it("returns false on a string",function(){
        assert.strictEqual(Harvey.checkType["integerArray"]("werrw"),false);
    });
    it("returns false on a string array",function(){
           assert.strictEqual(Harvey.checkType["integerArray"](["werrw","ew","we"]),false);
    });
    it("returns true on an integer array",function(){
        assert.strictEqual(Harvey.checkType["integerArray"]([1,2,3,4,5]),true);
    });
    it("returns false on an  array containing any floats",function(){
        assert.strictEqual(Harvey.checkType["integerArray"]([1.3,2.4,3,4,5]),false);
    });
    it("returns false on an integer array with a missing value",function(){
        assert.strictEqual(Harvey.checkType["integerArray"]([1,2,"",4,5]),false);
    });
});

describe("CheckType(text)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["text"](""),false);
    });
    it("returns true on an array of numbers",function(){
        assert.strictEqual(Harvey.checkType["text"]([1,2,3,4]),true);
    });
});

describe("CheckType(floatArray)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["floatArray"](""),false);
    });
    it("returns false on an array of strings",function(){
        assert.strictEqual(Harvey.checkType["floatArray"](["one","two","three"]),false);
    });
    it("returns true on an array of integers as strings",function(){
        assert.strictEqual(Harvey.checkType["floatArray"](["1","-3","2"]),true);
    });
    it("returns true on an array of floats as strings",function(){
        assert.strictEqual(Harvey.checkType["floatArray"](["100.4","-3213212310","2.9080"]),true);
    });
    it("returns true on an array of integers",function(){
        assert.strictEqual(Harvey.checkType["floatArray"]([1,-3,"2"]),true);
    });
    it("returns true on an array of floats",function(){
        assert.strictEqual(Harvey.checkType["floatArray"]([100.4,-3213212310,2.9080]),true);
    });
     it("returns false if an element of the array is undefined",function(){
         assert.strictEqual(Harvey.checkType["floatArray"](["1","-3","2",undefined]),false);
    });
    
});

describe("CheckType(alphabetic)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["alphabetic"](""),false);
    });
    it("returns false on an alphanumeric string",function(){
        assert.strictEqual(Harvey.checkType["alphabetic"]("wer45"),false);
    });
    it("returns false on an array of alphabetic strings",function(){
        assert.strictEqual(Harvey.checkType["alphabetic"](["wer","fjk"]),false);
    });
    it("returns true on an  alphabetic string",function(){
        assert.strictEqual(Harvey.checkType["alphabetic"]("werTYdas"),true);
    });
    it("returns false with punctuation !",function(){
        assert.strictEqual(Harvey.checkType["alphabetic"]("werTYdas!"),false);
    });
    it("returns false with punctuation -",function(){
        assert.strictEqual(Harvey.checkType["alphabetic"]("werTYdas-"),false);
    });
    
});
describe("CheckType(string)",function() {
    it("returns true on empty string",function(){
        assert.strictEqual(Harvey.checkType["string"](""),true);
    });
    it("returns true on integer string",function(){
        assert.strictEqual(Harvey.checkType["string"]("10"),true);
    });
    it("returns false on integer ",function(){
        assert.strictEqual(Harvey.checkType["string"](10),false);
    });
});

describe("CheckType(password)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["password"](""),false);
    });
    it("returns false on null",function(){
        assert.strictEqual(Harvey.checkType["password"](null),false);
    });
    it("returns false on undefined",function(){
        assert.strictEqual(Harvey.checkType["password"](undefined),false);
    });
    it("returns true on string",function(){
        assert.strictEqual(Harvey.checkType["password"]("hjhkjkjh"),true);
    });
});

describe("CheckType(alphaNum)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["alphaNum"](""),false);
    });
    it("returns true on ag46fds",function(){
        assert.strictEqual(Harvey.checkType["alphaNum"]("ag46fd"),true);
    });
    it("returns true on integer",function(){
        assert.strictEqual(Harvey.checkType["alphaNum"](10),true);
    });
    it("returns false on float",function(){
        assert.strictEqual(Harvey.checkType["alphaNum"](10.5),false);
    });
});

describe("CheckType(token)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["token"](""),false);
    });
    it("returns true on integer",function(){
        assert.strictEqual(Harvey.checkType["token"](10),true);
    });
    it("returns true on float",function(){
        assert.strictEqual(Harvey.checkType["token"](10.34),true);
    });
    it("returns true on FG19_19.2",function(){
        assert.strictEqual(Harvey.checkType["token"]("FG19_19.2"),true);
    });
    it("returns true on 28-19",function(){
        assert.strictEqual(Harvey.checkType["token"]("28-19"),true);
    });
    it("returns true on #28-19",function(){
        assert.strictEqual(Harvey.checkType["token"]("#28-19"),true);
    });
    it("returns false on null",function(){
        assert.strictEqual(Harvey.checkType["token"](null),true);
    });
});

describe("CheckType(email)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["email"](""),false);
    });
    it("returns true on ff@junk.com",function(){
        assert.strictEqual(Harvey.checkType["email"]("ff@junk.com"),true);
    });
    it("returns false on ff@junk",function(){
        assert.strictEqual(Harvey.checkType["email"]("ff@junk"),false);
    });
    
});

describe("CheckType(currency)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["currency"](""),false);
    });
    it("returns true for GBP450.50",function(){
        assert.strictEqual(Harvey.checkType["currency"]("GBP450.50"),true);
    });
    it("returns true for GBP56,450.50",function(){
        assert.strictEqual(Harvey.checkType["currency"]("GBP56,450.50"),true);
    });
    it("returns true for GBP 56,450.50",function(){
        assert.strictEqual(Harvey.checkType["currency"]("GBP 56,450.50"),true);
    });
    it("returns true for GBP 56,450",function(){
        assert.strictEqual(Harvey.checkType["currency"]("GBP 56,450"),true);
    });
    it("returns false for  56,450 USD",function(){
        assert.strictEqual(Harvey.checkType["currency"]("56,450 USD"),false);
    }); 
});

describe("CheckType(date)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["date"](""),false);
    });
    it("returns true on 20170612",function(){
        assert.strictEqual(Harvey.checkType["date"]("20170612"),true);
    });
    it("returns false on 20170632",function(){
        assert.strictEqual(Harvey.checkType["date"]("20170632"),false);
    });
});

describe("CheckType(time)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["time"](""),false);
    });
    it("returns true on 12:00",function(){
        assert.strictEqual(Harvey.checkType["time"]("12:00"),true);
    });
    it("returns true on 23:12",function(){
        assert.strictEqual(Harvey.checkType["time"]("23:12"),true);
    });
    it("returns true on 10:10PM",function(){
        assert.strictEqual(Harvey.checkType["time"]("10:10PM"),true);
    });
    it("returns false on 10",function(){
        assert.strictEqual(Harvey.checkType["time"](10),false);
    });
    it("returns false on AM",function(){
        assert.strictEqual(Harvey.checkType["time"]("AM"),false);
    });
    it("returns false on 10 as string",function(){
        assert.strictEqual(Harvey.checkType["time"]("10"),false);
    }); 
});

describe("CheckType(image)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["image"](""),false);
    });
});

describe("CheckType(boolean)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["boolean"](""),false);
    });
    it("returns true with value false",function(){
        assert.strictEqual(Harvey.checkType["boolean"](false),true);
    });
    it("returns true with string value false",function(){
        assert.strictEqual(Harvey.checkType["boolean"]("false"),true);
    });
    it("returns true with value 0",function(){
        assert.strictEqual(Harvey.checkType["boolean"](0),true);
    });
});

         
describe("CheckType(array)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["array"](""),false);
    });
    it("returns false on integer",function(){
        assert.strictEqual(Harvey.checkType["array"](10),false);
    });
    it("returns false on string",function(){
        assert.strictEqual(Harvey.checkType["array"]("dog"),false); 
    });
    it("returns false on empty array",function(){
        assert.strictEqual(Harvey.checkType["array"]([]),false); 
    });
    it("returns true on  array",function(){
        assert.strictEqual(Harvey.checkType["array"](["a"]),true); 
    });
});

describe("CheckType(object)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["object"](""),false);
    });
    it("returns false when value is a function",function(){
        assert.strictEqual(Harvey.checkType["object"](function(){}),false);
    });
    it("returns false when value is null",function(){
        assert.strictEqual(Harvey.checkType["object"](null),false);
    });
    it("returns false when value is undefined",function(){
        assert.strictEqual(Harvey.checkType["object"](undefined),false);
    });
});

describe("CheckType(function)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["function"](""),false);
    });
    it("returns false on null",function(){
        assert.strictEqual(Harvey.checkType["function"](null),false);
    });
    it("returns false on {}",function(){
        assert.strictEqual(Harvey.checkType["function"]({}),false);
    });
    it("returns true when value is a function",function(){
        assert.strictEqual(Harvey.checkType["function"](function(){}),true);
    });
});

describe("CheckType(imageArray)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["imageArray"](""),false);
    });
});

describe("CheckType(objectArray)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["objectArray"](""),false);
    });
    it("returns false on an integer array",function(){
        assert.strictEqual(Harvey.checkType["objectArray"]([0,1,2]),false);
    });
    it("returns true on an object array",function(){
        var t=[{"a":1},{"b":2}];
        assert.strictEqual(Harvey.checkType["objectArray"](t),true);
    });
    it("returns false if array contains one element that is not  an object ",function(){
        var t=[{"a":1},{"b":2},"pig"];
        assert.strictEqual(Harvey.checkType["objectArray"](t),false);
    });
});

describe("CheckType(stringArray)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["stringArray"](""),false);
    });
    it("returns false on an integer array",function(){
        assert.strictEqual(Harvey.checkType["stringArray"]([0,1,2]),false);
    });
    it("returns true on a array of integer strings",function(){
        assert.strictEqual(Harvey.checkType["stringArray"](["9","8","7"]),true);
    });
});

describe("CheckType(floatArray)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["floatArray"](""),false);
    });
    it("returns true on an integer array",function(){
        assert.strictEqual(Harvey.checkType["floatArray"]([0,1,2]),true);
    });
    it("returns false if array contains a string",function(){
        assert.strictEqual(Harvey.checkType["integerArray"]([0,1,2,"dog"]),false);
    });   
});

describe("CheckType(integerArray)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["integerArray"](""),false);
    });
    it("returns false for [true,false,true]",function(){
        assert.strictEqual(Harvey.checkType["integerArray"]([true,false,true]),false);
    });
    it("returns true on an integer array",function(){
        assert.strictEqual(Harvey.checkType["integerArray"]([0,1,2]),true);
    });
    it("returns false if array contains a float",function(){
        assert.strictEqual(Harvey.checkType["integerArray"]([0,1,2,10.5]),false);
    });       
});

describe("CheckType(booleanArray)",function() {
    it("returns false on empty string",function(){
        assert.strictEqual(Harvey.checkType["booleanArray"](""),false);
    });
    it("returns true for [true,false,true]",function(){
        assert.strictEqual(Harvey.checkType["booleanArray"]([true,false,true]),true);
    });
    it("returns false on a string",function(){
        assert.strictEqual(Harvey.checkType["booleanArray"]("true"),false);
    });
    it("returns false for [true,false,blue,true]",function(){
         assert.strictEqual(Harvey.checkType["booleanArray"]("[true,false,blue,true]"),false);
     });
    it("returns true for [0,false,1,true,0]",function(){
        assert.strictEqual(Harvey.checkType["booleanArray"]([0,true,false,1,true]),true);
    });
    it("returns false on an integer array",function(){
        assert.strictEqual(Harvey.checkType["booleanArray"]([0,1,2]),false);
    });
});