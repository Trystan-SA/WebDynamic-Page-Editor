import {sassPlugin} from 'esbuild-sass-plugin'
import esbuild from 'esbuild'

/** @type {import('esbuild').BuildOptions} */
let AngularBuildOptions = {
    entryPoints: ['src/main.ts'],
    bundle: true,
    outdir: 'dist',
    format: 'esm',
    platform: 'browser',
    assetNames: 'assets/[name]-[hash]',
    chunkNames: 'chunks/[name]-[hash]',
    splitting: true,
    loader: {
        '.png': 'file'
    },
    plugins: [
        sassPlugin(),
        {
            name: 'Rebuild',
            setup(build){ 
                build.onEnd(result => {
                    console.timeEnd("[BUILD] Client ✓ ");
                    ReloadClient();
                })
                build.onStart(()=>{
                    console.time("[BUILD] Client ✓ ")
                })
            }
        }
    ]
}

esbuild.context(AngularBuildOptions).then((ctx)=>{ ctx.watch() })

import {WebSocketServer} from 'ws'
let Socket;
StartHotReload();

function StartHotReload(){
    const WSS = new WebSocketServer({port: 3001})
    WSS?.on('connection', (socket) => { Socket = socket })
}

function ReloadClient(){ Socket?.send('123') }