const mongoose = require("mongoose");
const ElectoralHistory = new mongoose.Schema({
    year: Date,
    party:String,
    constituency:String,
    votesWinner:Number,
    votesRunnerUp:Number,
    candidate:String,
});
const ConstituentAssemblyElection = new mongoose.Schema({
    year: Date,
    party:String,
    constituency:String,
    votesWinner:Number,
    votesRunnerUp:Number,
    candidate:String,
});
const VerifiedMediaLink = new mongoose.Schema({
    date: Date,
    postThumbnali:String,
    postTitle:String,
    postDescription:String,
    postLink:String
});
const Timeline = new mongoose.Schema({
    dateFrom: Date,
    dateTo: Date,
    eventTitle:String,
    eventDetails:String,
    eventCategory:String
});
const Assests = new mongoose.Schema({
    disclosureFiledDate: Date,
    land: Number,
    building: Number,
    otherFixedAssests: Number,
    cashAndBankBalance: Number,
    otherCurrentAssests: Number,
});
const PublicLawSuits = new mongoose.Schema({
    date: Date,
    caseTitle: String,
    caseDetails: String,
    link: String
});
const OtherDetails = new mongoose.Schema({
    healthIssue: String
});
const politicianSchema = new mongoose.Schema({
    photoURL:String,
    name: {
        FirstName: String,
        MiddleName:String,
        LastName:String
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    DOB:Date,
    maritalStatus: Boolean,
    spouseName: String,
    noOfChildren:Number,
    address:String,
    education: String,
    affiliation:String,
    designation:String,
    appointmentDate:Date,
    presentDays:Number,
    absentDays:Number,
    electoralHistory:[ElectoralHistory],
    constituentAssemblyElection:[ConstituentAssemblyElection],
    verifiedMediaLink:[VerifiedMediaLink],
    timeline:[Timeline],
    // TwitterFeed:[TwitterFeed],
    assests:[Assests],
    publicLawSuits:[PublicLawSuits],
    otherDetails:[OtherDetails],
    createdAt: Date,
    verifiedAt: Date
});

module.exports = mongoose.model("politician", politicianSchema);
