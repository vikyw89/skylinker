import 'dotenv/config';
import express from "express";
const app = express();
const PORT = process.env.PORT ?? 3001;
app.get('/', (req, res) => {
    res.send(res.json(`Server running on port ${PORT}`));
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
