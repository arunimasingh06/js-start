// immediately invoked function expressions (IIFE)
(function chai(){       //nammed iife
    console.log("db connected");
    
})();
//avoids global scope pollution

(  (name) => {
    console.log(`db conn ${name}`);
    
})('chhoti')

//two iife are written with a semicolon