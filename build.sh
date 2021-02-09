#!/bin/bash
cargo build --target wasm32-unknown-unknown
wasm-bindgen target/wasm32-unknown-unknown/debug/{{crate_name}}.wasm --out-dir .