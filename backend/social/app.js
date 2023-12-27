const express = require('express');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
const databaseConfig = require('./db/database');
const { userRouter } = require('./api/routers/user-profile.router');
const { tenantRouter } = require('./api/routers/tenant-profile.router');

const app = express();
databaseConfig.initializeDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`/user-profile`, userRouter);
app.use(`/tenant-profile`, tenantRouter);

app.use('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});

app.listen(process.env.PORT || 4000, async () => {

	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});