const { Schema } = require('mongoose');

const reactionSchema =  new Schema(
    {
        reactionId: {
            type: Schema.ObjectId,
            auto: true,
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }

    }
)

module.exports = reactionSchema;