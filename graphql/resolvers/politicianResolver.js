const { AuthenticationError, UserInputError } = require("apollo-server");

module.exports = {
    Query: {
        getAllUser: async (
            parent,
            { args },
            { models: { politicianModel } },
            info
        ) => {
            return await politicianModel.find({}).sort({ createdAt: -1 }).exec();
        },
        getUserByID: async (
            parent,
            { id },
            { models: { politicianModel } },
            info
        ) => {
            return await politicianModel.findById({ _id: id }).exec();
        }
    },
    Mutation: {
        createUser: async (
            parent,
            { profileImage, name, gender, DOB, maritalStatus, spouseName, noOfChildren, address, education,
                affiliation, designation, appointmentDate, presentDays, absentDays },
            { models: { politicianModel }, utils: { fileUpload } },
            info
        ) => {
            //FILE VALIDATION FOR PROFILE IMAGE  
            const check = await profileImage;s
            if (
                !(
                    check.mimetype === 'image/png' ||
                    check.mimetype === 'image/jpeg' ||
                    check.mimetype === 'image/jpg'
                )
            ) {
                throw new UserInputError("Only images are allowed!", {
                    invalidArgs: "file"
                });
            }
            const profileURL = await fileUpload.upload(profileImage, 'profile');
            //CREATE NEW USER
            return await politicianModel.create({
                photoURL: profileURL.path,
                name,
                gender,
                DOB,
                maritalStatus,
                spouseName,
                noOfChildren,
                address,
                education,
                affiliation,
                designation,
                appointmentDate,
                presentDays,
                absentDays,
                createdAt: Date.now()
            });

        },
        addElectoralHistory: async (
            parent,
            { id, year, party, constituency, votesWinner, votesRunnerUp, candidate },
            { models: { politicianModel } },
            info
        ) => {
            const temp = await politicianModel.findOne({ _id: id }).exec();
            if (!temp) {
                throw new Error("No user found with this id!")
            }
            let query = { _id: id };
            const ElectoralHistory = {
                year: year,
                party: party,
                constituency: constituency,
                votesWinner: votesWinner,
                votesRunnerUp: votesRunnerUp,
                candidate: candidate
            }
            let update = { $push: { electoralHistory: ElectoralHistory } };
            let props = {
                upsert: true,
                new: true,
                runValidators: true,
                setDefaultsOnInsert: true
            }
            try {
                await politicianModel.findOneAndUpdate(query, update, props);
                return true
            } catch (err) {
                throw new Error("Error in updating data!")
            }
        },
        addConstituentAssemblyElection: async (
            parent,
            { id, year, party, constituency, votesWinner, votesRunnerUp, candidate },
            { models: { politicianModel } },
            info
        ) => {
            const temp = await politicianModel.findOne({ _id: id }).exec();
            if (!temp) {
                throw new Error("No user found with this id!")
            }
            let query = { _id: id };
            const ConstituentAssemblyElection = {
                year: year,
                party: party,
                constituency: constituency,
                votesWinner: votesWinner,
                votesRunnerUp: votesRunnerUp,
                candidate: candidate
            }
            let update = { $push: { constituentAssemblyElection: ConstituentAssemblyElection } };
            let props = {
                upsert: true,
                new: true,
                runValidators: true,
                setDefaultsOnInsert: true
            }
            try {
                await politicianModel.findOneAndUpdate(query, update, props);
                return true
            } catch (err) {
                throw new Error("Error in updating data!")
            }
        },
        addVerifiedMediaLink: async (
            parent,
            {
                id,
                date,
                postThumbnali,
                postTitle,
                postDescription,
                postLink },
            { models: { politicianModel } },
            info
        ) => {
            const temp = await politicianModel.findOne({ _id: id }).exec();
            if (!temp) {
                throw new Error("No user found with this id!")
            }
            let query = { _id: id };
            const VerifiedMediaLink = {
                date: date,
                postThumbnali: postThumbnali,
                postTitle: postTitle,
                postDescription: postDescription,
                postLink: postLink
            }
            let update = { $push: { verifiedMediaLink: VerifiedMediaLink } };
            let props = {
                upsert: true,
                new: true,
                runValidators: true,
                setDefaultsOnInsert: true
            }
            try {
                await politicianModel.findOneAndUpdate(query, update, props);
                return true
            } catch (err) {
                throw new Error("Error in updating data!")
            }
        },
        addTimeline: async (
            parent,
            {
                id,
                dateFrom,
                dateTo,
                eventTitle,
                eventDetails,
                eventCategory },
            { models: { politicianModel } },
            info
        ) => {
            const temp = await politicianModel.findOne({ _id: id }).exec();
            if (!temp) {
                throw new Error("No user found with this id!")
            }
            let query = { _id: id };
            const Timeline = {
                dateFrom: dateFrom,
                dateTo: dateTo,
                eventTitle: eventTitle,
                eventDetails: eventDetails,
                eventCategory: eventCategory
            }
            let update = { $push: { timeline: Timeline } };
            let props = {
                upsert: true,
                new: true,
                runValidators: true,
                setDefaultsOnInsert: true
            }
            try {
                await politicianModel.findOneAndUpdate(query, update, props);
                return true
            } catch (err) {
                throw new Error("Error in updating data!")
            }
        },
        addAssests: async (
            parent,
            {
                id,
                disclosureFiledDate,
                land,
                building,
                otherFixedAssests,
                cashAndBankBalance,
                otherCurrentAssests
            },
            { models: { politicianModel } },
            info
        ) => {
            const temp = await politicianModel.findOne({ _id: id }).exec();
            if (!temp) {
                throw new Error("No user found with this id!")
            }
            let query = { _id: id };
            const Assests = {
                disclosureFiledDate: disclosureFiledDate,
                land: land,
                building: building,
                otherFixedAssests: otherFixedAssests,
                cashAndBankBalance: cashAndBankBalance,
                otherCurrentAssests: otherCurrentAssests
            }
            let update = { $push: { assests: Assests } };
            let props = {
                upsert: true,
                new: true,
                runValidators: true,
                setDefaultsOnInsert: true
            }
            try {
                await politicianModel.findOneAndUpdate(query, update, props);
                return true
            } catch (err) {
                throw new Error("Error in updating data!")
            }
        },
        addPublicLawSuits: async (
            parent,
            {
                id,
                date,
                caseTitle,
                caseDetails,
                link
            },
            { models: { politicianModel } },
            info
        ) => {
            const temp = await politicianModel.findOne({ _id: id }).exec();
            if (!temp) {
                throw new Error("No user found with this id!")
            }
            let query = { _id: id };
            const PublicLawSuits = {
                date: date,
                caseTitle: caseTitle,
                caseDetails: caseDetails,
                link: link
            }
            let update = { $push: { publicLawSuits: PublicLawSuits } };
            let props = {
                upsert: true,
                new: true,
                runValidators: true,
                setDefaultsOnInsert: true
            }
            try {
                await politicianModel.findOneAndUpdate(query, update, props);
                return true
            } catch (err) {
                throw new Error("Error in updating data!")
            }
        },
        addOtherDetails: async (
            parent,
            {
                id,
                healthIssue
            },
            { models: { politicianModel } },
            info
        ) => {
            const temp = await politicianModel.findOne({ _id: id }).exec();
            if (!temp) {
                throw new Error("No user found with this id!")
            }
            let query = { _id: id };
            const OtherDetails = {
                healthIssue: healthIssue
            }
            let update = { $push: { otherDetails: OtherDetails } };
            let props = {
                upsert: true,
                new: true,
                runValidators: true,
                setDefaultsOnInsert: true
            }
            try {
                await politicianModel.findOneAndUpdate(query, update, props);
                return true
            } catch (err) {
                throw new Error("Error in updating data!")
            }
        }
    }
}
