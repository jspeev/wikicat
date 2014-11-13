'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * Cat Schema
 */
var CatSchema = new Schema({
	num:{
		type: Number,
		trim:true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Numeric identifier required']
		},
	name: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Name of cat breed required']
	},
	imgURL: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Image URL of cat breed required']
	},
	summary: {
		type: String,
		default: '',
		validate: [validateLocalStrategyProperty, 'Cat breed summary required']
	}
});

mongoose.model('Cat', CatSchema);