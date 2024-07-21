(async function () {
    const { Worker, isMainThread, parentPort } = require("worker_threads");
    const fasttalk = require("../lib/fasttalk.js");
    function loadWASM() {
        const Module = require("../wasm.js");
        return new Promise((resolve) => {
            let e = setInterval(function () {
                if (Module.ready) {
                    clearInterval(e);
                    resolve(Module);
                }
            }, 5);
        });
    }
    const WASMModule = await loadWASM();
    let queue = [];
    function tick() {
        let job = queue.shift();
        if (job) {
            try {
                parentPort.postMessage({
                    id: job.id,
                    packet: (job.method || "encode") === "encode" ? WASMModule.shuffle(fasttalk.encode(job.packet)) : fasttalk.decode(WASMModule.shuffle(job.packet))
                });
            } catch(error) {
                parentPort.postMessage({
                    id: job.id,
                    packet: new Uint8Array([0, 0])
                });
            }
        }
        setTimeout(tick);
    }
    tick();
    parentPort.on("message", function (job) {
        queue.push(job);
    });
})();