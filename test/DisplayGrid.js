"use strict";

const       assert = require('chai').assert;
const        jsdom = require('jsdom');
const   browserify = require('browserify');
const browserifyFn = require('browserify-string');
const         path = require('path');
const           fs = require('fs');
const Harvey=require('../declare').Harvey;


global.document=require("jsdom").jsdom(undefined,
                                           {virtualConsole: jsdom.createVirtualConsole().sendTo(console)});
global.window=document.defaultView;
global.navigator=global.window.navigator;
global.jQuery = require('jquery');


describe("DisplayGrid-(start without rows)",function(){
    var $= global.jQuery; 
    var t;
    require("../DisplayGrid.js"); 
    it("creates a grid display object",function(){
        $("body").append("<div id='test'></div>");
        assert($("#test").length>0);
        t=Harvey.display.grid({id:"test_grid",DOM:"test",cols:[{name: "name",type:"string"}]});
        assert.isObject(t);
    });
    it("creates a jquery container",function(){
        assert.notStrictEqual($("#test_grid"),0); 
    });
    it("cannot add column if it does not have a unique name",function(){
        var fn=function(){
            t.addCol({name: "name",type:"string"});     
        };
        assert.throws(fn,"Columns must have unique names");
    });
    it("creates a div with id",function(){
        assert.notStrictEqual($("#test_grid"),0);
    });
    it("can add a column ",function(){
        t.addCol({name: "index",type:"integer"});     
        assert.strictEqual(t.getColIndex("index"),1);
    });
    it("can add a row",function(){
        t.addRow({name:"Bill",index:10});
    });
    it("creates a grid",function(){
        assert.notStrictEqual(t.getGrid(),null);
        assert.notStrictEqual(t.getGrid(),undefined);
    });
    it("creates a row array",function(){
       // var n=t.getGrid();
        assert.notStrictEqual(t.getGrid().rows.length,0);
    });
    it("can add another row",function(){
        t.addRow({name:"Homer",index:6});
        var fn=function(){
            var b=t.getRow({name:"Homer",index:6},null,{val:-1});
        };
        assert.throws(fn,"grid is not sorted" );
    });
     it("can add more columns ",function(){
        t.addCol({name: "job",type:"string"});     
        assert.strictEqual(t.getColIndex("job"),2);
    });
    it("can add yet another row",function(){
        t.addRow({name:"Sam",job:"Manager"});
    });
    it("has a show method which adds the root element to the DOM",function(){
        assert.strictEqual($("#test_grid").length,0);
        t.show();
        assert.notStrictEqual($("#test_grid").length,0);
    });
    it("dumps the contents of the grid as a JSON object",function(){
        var b=t.getJSON();
        assert.isObject(b);
        //console.log("JSON %j",b);
    });
    it("updates a row only if unique key",function(){
        var fn=function(){
            t.updateRow({name:"Sam",index:12});
        };
        assert.throws(fn,"No method available to find this cell");
    });
    it("has a delete method",function(){
        t.delete();
        assert.strictEqual($("#test_grid").length,0);
        var b=t.getChildren();
        assert.lengthOf(b,0);
    });
});



describe("DisplayGrid-(start with data)",function(){
    var $= global.jQuery; 
    var t;
    require("../DisplayGrid.js");
    
    var data=require("./data/data.js");
    it("creates a grid display object",function(){
        $("body").append("<div id='Content'></div>");
        assert($("#test").length>0);
        t=Harvey.display.grid(data);
        assert.isObject(t);
    });
    it("creates a jquery container",function(){
        assert.notStrictEqual($("#test_grid"),0); 
    });
    it("can add a row",function(){
        var b=t.getGrid("1").rows.length;
        b++;
        var n=t.addRow({stock:"FG63",subclass: 1,bid:10,maturity:20200521});
        var c=t.getGrid("1").rows.length;
        console.log("b is " + b +  " and c " + c);
        //var b=t.getRow({stock:"FG63",subclass: 1,bid:10});
        assert.strictEqual(b,c);
       // console.log("JSON %j",n);
    });
    it("can add another row",function(){
        var n=t.addRow({stock:"XXX",subclass: 1,bid:109,maturity:20160830});
        var b=t.getRow({stock:"XXX",subclass: 1,bid:109,maturity:20160830});
        assert.notStrictEqual(b,null);
    });
    it("has a show method which adds the root element to the DOM",function(){
        assert.strictEqual($("#Blotter").length,0);
        t.show();
        assert.notStrictEqual($("#Blotter").length,0);
    });
    it("has added a row to the dom",function(){
        var b=$("#1").find("tr:first").find("td:first");
        assert.notStrictEqual(b.length,0);
        var c=b.html();
        console.log("td is " + c);
    });
    it("can add a column",function(){
        var b=t.getCol().length;
        b++;
        t.addCol({name:"other",type:"string",editable:false});
        var c=t.getCol().length;
        assert.strictEqual(b,c);
        var b=$("#1").find("tr:first").find("td:last");
        var c=b.html();
        console.log("td is " + c);
    });
    it("updates an existing row",function(){
        //  t.updateRow({stock:"XXX",subclass:1,maturity:20160830,other:"something"});
        t.updateRow({stock:"ABT",subclass:1,maturity:20350921,other:"something"});
        var b=t.getRow({stock:"ABT",subclass:1,maturity:20350921});
        assert.notStrictEqual(b,null);
        assert.strictEqual(b["other"].getValue(),"something");
    });
    it("deletes a row",function(){
        t.deleteRow({stock:"FG63",subclass: 1,bid:10,maturity:20200521});
        
    });
    it("deletes a column",function(){
        t.deleteCol("bid");
        
    });
    
});