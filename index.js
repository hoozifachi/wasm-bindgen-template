const wasm = import("./{{crate_name}}");

wasm.then((h) => h.hello("{{project-name}}")).catch(console.error);
