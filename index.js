module.exports = {
  
  before: config => {
    
  },
  
  beforeEach: config => {
      
  }
  {
    "myPlugin": {
        "mySetting": "myValue"
    }
};
// myPlugin
module.exports = {
  
  before: config => {
    console.log(config.myPlugin.mySetting); // myValue
  }
  
};
};

module.exports = {
  
  before: config => {
    delete config.babel; 
  }
  
};
module.exports = {
   
  before: config => {
    global.time = func => {
      console.time('Execution time');
      func();
      console.timeEnd('Execution time');
    };
    global.time.repeat = (times, func) => {
      ...
    };
  }; 
};
time(() => {
  // code to measure the execution time for 
});

time.repeat(10, () => {
  time.realod(60seconds)
});