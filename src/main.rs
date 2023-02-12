
use actix_web::{get, http::StatusCode, HttpResponse, web, App, HttpServer};
use actix_files as fs;
use ssr_rs::Ssr;
use std::fs::read_to_string;


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(index)
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}

#[get("/")]
async fn index() -> HttpResponse {
   
    let source = read_to_string("./dist/bundle.js").unwrap();



let props = r##"{
    "params": [
        "hello",
        "ciao",
        "こんにちは"
    ]
}"##;

let html = Ssr::render_to_string(&source, "entryPoint", Some(&props));

HttpResponse::build(StatusCode::OK)
    .content_type("text/html; charset=utf-8")
    .body(html)

}