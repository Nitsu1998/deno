import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";


const app = new Application();
const router = new Router();

router.get("/", (ctx: Context): void => {
    let frase: String = ctx.request.url.searchParams.get('frase')
    frase = frase.split(' ').reverse().join(" ")

    ctx.response.body = `
    <!DOCTYPE html>
    <html>
    <head><title>Hello oak!</title><head>
        <body>
        <h1>Frase invertida: "${frase}"</h1>
        </body>
    </html>
    `;
});

app.use(router.routes());

app.listen({ port: 3000 });

console.log("Server listening on: http://127.0.0.1:3000");