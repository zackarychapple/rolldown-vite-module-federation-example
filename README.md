## Changes from canonical example
1) Added Zephyr plugin for rolldown `zephyr-rolldown-plugin` at workspace level
2) Added plugin to use catalog level in both host and remote 
3) Added usage to the plugin to vite config
4) Adjusted package.json names to be "compatible" with Zephyr
5) Adjusted root package.json name
6) Added version numbers to all 3 package.jsons

## Issues
1) the original package.json had names with `@rolldown-vite-module-federation-example/remote` however this does not work with Zephyr
2) The example requires mf standard manifests to be published as well, this currently throws an error. However the manifest is being published by the remote, 
it seems the URL is not being replaced: 

```js
Uncaught Error: [ Federation Runtime ]: [ Federation Runtime ]: [ Federation Runtime ]: Failed to get manifest. #RUNTIME-003
args: {"manifestUrl":"http://localhost:5176/mf-manifest.json","moduleName":"rolldown-vite"}
https://module-federation.io/guide/troubleshooting/runtime/RUNTIME-003
  Original Error Message:
  TypeError: Failed to fetch
at error (mf_init-host-DLi7EjKA.js:942:8)
at getManifest (mf_init-host-DLi7EjKA.js:2471:7)
at async asyncLoadProcess (mf_init-host-DLi7EjKA.js:2482:26)
at async SnapshotHandler.loadRemoteSnapshotInfo (mf_init-host-DLi7EjKA.js:2425:28)
at async Array.afterResolve (mf_init-host-DLi7EjKA.js:1791:48)
at async RemoteHandler.getRemoteModuleAndOptions (mf_init-host-DLi7EjKA.js:2923:22)
at async initRemoteModule (mf_init-host-DLi7EjKA.js:2649:34)
at async Promise.all (/index 0)
at async mf_init-host-DLi7EjKA.js:3283:1
```
4) Added more to the .gitignore to make it more "standard"
