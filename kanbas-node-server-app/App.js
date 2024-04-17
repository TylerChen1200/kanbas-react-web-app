    import Hello from "./Hello.js";
    import Lab5 from "./Lab5.js";
    import express from 'express';
    import cors from "cors";
    const app = express();
    
    app.use(cors());
    app.use(express.json());
    Lab5(app);
    Hello(app);

    
    app.get('/', (req, res) => res.send('Hello World!'));
    
    const port = 4000;
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });