const wasm = import("./{{crate_name}}");

wasm.then((h) => h.hello("world")).catch(console.error);
