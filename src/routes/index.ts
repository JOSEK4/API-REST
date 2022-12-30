import { Router } from 'express';
import { readdirSync } from 'fs';

const PAHT_ROUTER = __dirname;

const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
};

readdirSync(PAHT_ROUTER).filter((fileName) => { 
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduloRouter) => {
            console.log("se esta cargando la ruta:", cleanName);
            router.use(`/${cleanName}`, moduloRouter.router)
        });
       
    }
    
});

export { router };