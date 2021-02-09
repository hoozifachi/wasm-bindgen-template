# wasm-bindgen-template

A cargo generate template for generating a simple wasm-bindgen template.
It is based on the code in [Programming WebAssembly with Rust](https://www.pragprog.com/titles/khrust/programming-webassembly-with-rust/)

### How to use it?

1. Install [cargo-generate](https://github.com/ashleygwilliams/cargo-generate):

```bash
cargo install cargo-generate
```

2. Generate the wasm-bindgen project

```bash
cargo generate --git https://github.com/hoozifachi/wasm-bindgen-template --name yourprojectname
```

3. Install Javascript dependencies

```bash
npm install
```

4. Build the Rust and wasm-bindgen

```bash
./build.sh
```

5. Run the webpack build

```bash
npm run build
```

6. Run webpack-dev-server

```bash
npm run serve
```
