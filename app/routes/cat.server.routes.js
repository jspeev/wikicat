'use strict';

var wiki = require('wikijs');

module.exports = function(app) {
	
	app.get('/cat/breeds', function(req,res){
		
		//GET ARRAY OF SEARCHABLE CAT BREEDS FROM WIKI, MAX 100
	   wiki.search('cat breed',100, function(err,results){
	    	var aryCats = results.splice(3,results.length);
	    	res.json(aryCats);
    	});
    	
	});
	
	app.get('/cat/search/:cat_name', function(req,res){
		
		/*
		* GET CAT JSON OBJ BASED ON SUPPLIED NAME OF CAT BREED
		* - CAT BREED NAME
		* - RANDOM IMAGE FROM CAT WIKI PAGE
		*/
		
		var stCatName = req.params.cat_name;
		
		wiki.page(stCatName, function(err, page){
			
			page.summary(function(err, summary){
				
			   // CAT PAGE SUMMARY
			   var stCatSummary = summary;
			   
			   page.images(function(err, images){
			   	
		    		//SELECT RANDOM IMAGE FROM CAT PAGE
		    		var img = images[Math.round(Math.random()*(images.length-1))];
		    		
					var jsCat = {
						name:stCatName,
						imgURL:img,
						summary:stCatSummary
					};
					
					res.json(jsCat);
						
				});
				
			});			
			
		});
		
	});
	
};