# apoco
## spa javascript web framework
(SPA - Single Page Application. )
[Definition of a SPA](https://en.wikipedia.org/wiki/Single-page_application)

[Online manual](https://snorkelferret.github.io)

Apoco is a data-driven enterprise level SPA library/Frontend real time framework, with automatic two way synchronisation between browser and server content.
The components can be used together or individually. Apoco is arranged hierarchically.

##### Windows

    Windows contain

##### Panels

    Panels contain

##### displays

    displays contain

##### fields or nodes

    which contain

##### types

You don't have to use the hierarchy, any of the components can be used independently, e.g you can use the display templates without using the Panel, or fields without using displays, but you can't use displays without specifying the appropriate field(s) 

All Apoco components which provide user input have methods to get set and reset the values.
Thereby the integrity of the data can be guaranteed, since the journalled value can only be set
by a call to setValue.


Apoco panels are generally defined in a UI_defs.js file.,
for example,

```javascript

UI.Panels={
    MyPanel:{ components:[{ display: 'tabs',
                            DOM: 'Main',
                            id: 'Tabs',
                            tabs:[{name: 'someName',label: 'Some Name'},
                                  {name:'another', label:'Another'}
                                  ]
                            },
                            {display:'fieldset',
                            DOM:'right',
                            id:'fieldsetDisplay',
                            components:[{node:'heading',size:'h4',text:'Test'},
                                        {field:'select',name:'select_test',options:['one','two','three']}
                                        ]
                            }
                            // add another display template here
                          ]
            },
  AnotherPanel:{ components:[ {display:"form",
                               DOM:"Main",
                               id:"MyForm",
                               onSubmit:function(submit_event,that){ // do something},
                               components:[{name:"email",type:"email"},
                                           {name:"name",type:"string"},
                                           {submit:true,name:"submit",value:"Submit"}
                                           
                                        ]
                               }
                               // add other display components
                         ]

              }
 // add another panel here
};

```
Although Apoco is primarily a desktop window replacement, (because of realtime updating
and dynamic elements), however,there are some "shop front" Website's using apoco

[Perluceo](http://www.perluceo.com)


[Online manual](https://snorkelferret.github.io)
