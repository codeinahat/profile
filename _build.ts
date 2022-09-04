import { build, emptyDir } from 'https://deno.land/x/dnt/mod.ts';


await emptyDir('./npm');


await build({
    entryPoints: ["./src"],
    outDir: "./npm",
    shims: {
        deno: "dev"
    },
    package: {
        name: "@codeinahat/profile",
        version: Deno.args[0],
        description: "A profile SDK fro application development",
        license: "SEE LICENSE IN LICENSE"
    }
})


Deno.copyFileSync("README.md", "npm/README.md");
Deno.copyFileSync("LICENSE", "npm/LICENSE");