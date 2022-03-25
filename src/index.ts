import express, {NextFunction, Request, Response} from 'express';

const port = 3000;
const app = express();

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send({});
});

app.use('*', (req: Request, res: Response, next: NextFunction) => {

});

// app.use();

app.listen(port, () => console.log(`Started listening to port ${port}`));
