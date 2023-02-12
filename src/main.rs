use ssr_rs::Ssr;
use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut file = File::open("dist/bundle.js").expect("File not found");
    let mut source = String::new();
    file.read_to_string(&mut source).expect("Could not read file");

       let props = r##"{
        "params": [
            "hello",
            "ciao",
            "こんにちは" 
        ]
    }"##;

    let html = Ssr::render_to_string(&source, "entryPoint", Some(&props));
    println!("{}", html);
}
