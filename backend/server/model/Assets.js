const mongoose = require('mongoose')

const assetSchema = new mongoose.Schema({
    assetTag: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true
    },
    serialNumber: {
        type: String,
        trim: true,
        default: ''
    },
    manufacturer: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['computer', 'printer']
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['in-service', 'in-repair', 'in-storage', 'retired', 'disposed'],
        default: 'in-service'
    },
    condition: {
        type: String,
        enum: ['new', 'good', 'fair', 'damaged'],
        default: 'good'
    },
    purchaseDate: {
        type: Date,
        default: null
    },
    warrantyExpiry: {
        type: Date,
        default: null
    },
    assignedUser: {
        type: String,
        trim: true,
        default: ''
    },

    // Computer-specific fields
    computerDetails: {
        formFactor:{ type:String, trim: true},
        hostname: { type: String, trim: true },
        processor: { type: String, trim: true },
        ram: { type: String, trim: true },
        storage: { type: String, trim: true },
        operatingSystem: { type: String, trim: true },
        ipAddress: { type: String, trim: true },
        macAddress: { type: String, trim: true, uppercase: true }
    },

    // Printer-specific fields
    printerDetails: {
        
        printColour: {
            type: String,
            enum: ['colour', 'black/white']
        },
        ipAddress: { type: String, trim: true },
        macAddress: { type: String, trim: true, uppercase: true },
       
    }

}, { timestamps: true });


assetSchema.pre('validate', function () {
    if (this.type === 'computer') {
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

    if (this.type === 'printer') {
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
});

module.exports = mongoose.model('Asset', assetSchema)