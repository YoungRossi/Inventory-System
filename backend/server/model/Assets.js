const mongoose = require('mongoose')

const computerDetailsSchema = new mongoose.Schema({
    formFactor: { type: String, trim: true },
    hostname: { type: String, trim: true },
    model: { type: String, required: true, trim: true },
    manufacturer: { type: String, required: true, trim: true },
    processor: { type: String, trim: true },
    memory: { type: String, trim: true },
    storage: { type: String, trim: true },
    operatingSystem: { type: String, trim: true },
    ipAddress: { type: String, trim: true },
    macAddress: { type: String, trim: true, uppercase: true }
}, { _id: false })


const printerDetailsSchema = new mongoose.Schema({
    model: { type: String, required: true, trim: true },
    manufacturer: { type: String, required: true, trim: true },
    tonerModel: { type: String, trim: true },
    functionality: { type: String, trim: true },
    printColour: { type: String },
    ipAddress: { type: String, trim: true },
    macAddress: { type: String, trim: true, uppercase: true }
}, { _id: false })

const assetSchema = new mongoose.Schema({
    assetTag: {
        type: String,
        unique: true,
        trim: true,
        uppercase: true
    },
    serialNo: {
        type: String,
        unique:true,
        trim: true,
        default: ''
    },
    type: {
        type: String,
        required: true,
        enum: ['Computer', 'Printer']
    },
    institution: {
        type: String,
        trim: true
    },
    computerName: {
        type: String,
        trim: true
    },
    department: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['Assigned', 'Awaiting-Assignment', 'Non-Functional', 'Under-Repair', 'Disposed']
    },
    arrivalDate: {
        type: Date,
        default: null
    },
    warrantyDate: {
        type: Date,
        default: null
    },
    assignedUser: {
        type: String,
        trim: true,
        default: ''
    },
    macAddress: {
        type: String,
        trim: true
    },
    ipAddress: {
        type: String,
        trim: true
    },
    computerDetails:{
        type: computerDetailsSchema,
        default: undefined
    },

    printerDetails: {
        type: printerDetailsSchema,
        default: undefined
    }

}, { timestamps: true })


assetSchema.pre('validate', function () {

    // Validate asset type and its corresponding details
    if (this.type === 'Computer') {

        if (!this.computerDetails) {
            this.invalidate(
                'computerDetails',
                'Computer details are required.'
            );
        }

        if (this.printerDetails) {
            this.invalidate(
                'printerDetails',
                'A computer cannot have printer details.'
            );
        }
    }

    if (this.type === 'Printer') {

        if (!this.printerDetails) {
            this.invalidate(
                'printerDetails',
                'Printer details are required.'
            );
        }

        if (this.computerDetails) {
            this.invalidate(
                'computerDetails',
                'A printer cannot have computer details.'
            );
        }
    }

    // Validate assignment information for BOTH asset types
    if (this.status === 'Assigned') {

        if (!this.institution || !this.institution.trim()) {
            this.invalidate(
                'institution',
                'Institution is required when an asset is assigned.'
            );
        }

        if (!this.department || !this.department.trim()) {
            this.invalidate(
                'department',
                'Department is required when an asset is assigned.'
            );
        }

        if (!this.assignedUser || !this.assignedUser.trim()) {
            this.invalidate(
                'assignedUser',
                'Assigned User is required when an asset is assigned.'
            );
        }
    }
});

const Asset = mongoose.model('Asset', assetSchema)

module.exports = Asset