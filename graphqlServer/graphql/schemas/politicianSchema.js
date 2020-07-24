const { gql } = require("apollo-server");

module.exports = gql`
input InputName{
    FirstName: String
    MiddleName: String
    LastName: String
}
type Name{
    FirstName: String!
    MiddleName: String
    LastName: String!
}
type ElectoralHistory{
    year: Date
    party: String
    constituency: String
    votesWinner: Int
    votesRunnerUp: Int
    candidate: String
}
type ConstituentAssemblyElection{
    year: Date
    party: String
    constituency: String
    votesWinner: Int
    votesRunnerUp: Int
    candidate: String
}
type VerifiedMediaLink{
    date: Date
    postThumbnali:String
    postTitle:String
    postDescription:String
    postLink:String
}
type Timeline{
    dateFrom: Date
    dateTo: Date
    eventTitle:String
    eventDetails:String
    eventCategory:String
}
type Assests{
    disclosureFiledDate: Date
    land: Int
    building: Int
    otherFixedAssests: Int
    cashAndBankBalance: Int
    otherCurrentAssests: Int
}
type PublicLawSuits{
    date: Date
    caseTitle: String
    caseDetails: String
    link: String
}
type OtherDetails{
    healthIssue: String
}
type User{
    id:ID
    photoURL: String
    name: Name!
    gender: String!
    DOB: Date!
    maritalStatus: Boolean!
    spouseName: String
    noOfChildren: Int!
    address: String!
    education: String!
    affiliation: String!
    designation: String
    appointmentDate: Date
    electoralHistory: [ElectoralHistory]
    constituentAssemblyElection: [ConstituentAssemblyElection]
    verifiedMediaLink: [VerifiedMediaLink]
    timeline: [Timeline]
    assests:[Assests]
    publicLawSuits:[PublicLawSuits]
    otherDetails:[OtherDetails]
    createdAt:Date
}
extend type Query{
    getAllUser: [User]
    getUserByID(id: ID!): User!
}
extend type Mutation {
    createUser(
        profileImage: Upload!,
        name: InputName!,
        gender: String!,
        DOB: Date!,
        maritalStatus: Boolean!,
        spouseName: String,
        noOfChildren: Int!,
        address: String!,
        education: String,
        affiliation: String,
        designation: String,
        appointmentDate: Date,
        presentDays: Int,
        absentDays: Int
    ): User!
    addElectoralHistory(id: ID!,
        year: Date,
        party: String,
        constituency: String,
        votesWinner: Int,
        votesRunnerUp: Int,
        candidate: String): Boolean
    addConstituentAssemblyElection(id: ID!,
        year: Date,
        party: String,
        constituency: String,
        votesWinner: Int,
        votesRunnerUp: Int,
        candidate: String): Boolean
    addVerifiedMediaLink(id: ID!,
        date: Date,
        postThumbnali: String,
        postTitle: String,
        postDescription: String,
        postLink: String
    ): Boolean
    addTimeline(id: ID!,
        dateFrom: Date,
        dateTo: Date,
        eventTitle: String!,
        eventDetails: String,
        eventCategory: String): Boolean
    addAssests(id: ID!,
        disclosureFiledDate: Date!,
        land: Int,
        building: Int,
        otherFixedAssests: Int,
        cashAndBankBalance: Int,
        otherCurrentAssests: Int,
    ): Boolean
    addPublicLawSuits(id: ID!,
        date: Date!,
        caseTitle: String!,
        caseDetails: String!,
        link: String
    ): Boolean
    addOtherDetails(id: ID!,
        healthIssue: String!): Boolean
}
`;

