function loadWASM() {
    const Module = require("./wasm.js");
    return new Promise((resolve) => {
        let e = setInterval(function() {
            if (Module.ready) {
                clearInterval(e);
                resolve(Module);
            }
        }, 5);
    });
}

loadWASM().then(Module => {
    const res = Array.from(Module.shuffle([1, 2, 3]));
    console.log(res, Module.shuffle(res));
});