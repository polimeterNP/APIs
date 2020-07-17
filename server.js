const express = require("express");
const mongoose = require("mongoose");
const http = require("http")
const xss = require('xss-clean');
const jwt = require("jsonwebtoken");
const { AuthenticationError, ApolloServer } = require('apollo-server-express');
//IMPORT SCHEMAS AND RESOLVERS
const schemas = require("./graphql/schemas");
const resolvers = require("./graphql/resolvers");
//ENVIRPNMENT VARIABLE
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });

const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
};

//Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
//to parse url encoded body
app.use(express.urlencoded({ extended: true }));
// Data sanitization against XSS
app.use(xss());
//IMPORT MODELS
const politicianModel = require("./models/politicianModel");

const fileUpload = require("./utils/upload");
const getUser = async (req) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            return await jwt.verify(token, process.env.JWT_SECRET);
        } catch (e) {
            throw new AuthenticationError("Your session expired. Sign in again.");
        }
    }
};

const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    playground: true,
    introspection: true,
    context: async ({ req }) => {
        if (req) {
            const me = await getUser(req);
            return {
                me,
                req,
                models: {
                    politicianModel
                },
                utils: {
                    fileUpload
                },
            };
        }
    }
});


server.applyMiddleware({
    app, cors: corsOptions, bodyParserConfig: {}
})

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(process.env.PORT || 3000, () => {
    let connectionString = "";
    //MLAB DATABASE
    if (process.env.NODE_ENV === "production") {
        connectionString = process.env.DATABASE;
    } else {
        //LOCAL DATABASE
        connectionString = process.env.DATABASE_LOCAL;
    }
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
        .then((con) => {
            console.log("DB connection sucessful");
        })
        .catch((err) => {
            console.log(err);
        });
});
