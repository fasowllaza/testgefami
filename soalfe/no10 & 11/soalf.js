// no 10 & 11
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const validateHeaders = (req, res, next) => {
    const userId = req.headers['user-id'];
    const scope = req.headers['scope'];

    if (userId !== 'ifabula' || scope !== 'user') {
        return res.status(401).json({ responseCode: 401, responseMessage: "UNAUTHORIZED" });
    }

    next();
};


app.get("/", validateHeaders, (req, res) => {
	res.status(200).json({ msg: "GEFAMI" });
});

app.post("/", validateHeaders, (req, res) => {
    res.status(200).json({msd: req.body})
})


app.listen(port, () => {
	console.log(`Listening Port ${ port }`);
});
