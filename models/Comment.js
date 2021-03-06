const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const { init } = require('./User');

// TODO: YOUR CODE HERE
class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        // timestamps: false,
        freezeTableName: true,
        // underscored: true,
        // modelName: 'User'
    }
)

module.exports = Comment;
