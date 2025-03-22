/// <reference types="vite/client" />

// src/index.ts
import express from 'express';
import { HelloService } from './hello/hello.service';
import { InMemoryHelloRepository } from './hello/hello.repository';
import { HelloController } from './hello/hello.controller';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample REST endpoint
const helloRepository = new InMemoryHelloRepository();
const helloService = new HelloService(helloRepository);
const helloController = new HelloController(helloService, app);

if (import.meta.env.PROD) {
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
}

export { app };
