var should = require('should-http'),
	request = require('supertest'); 


describe('student',function(){
	var url = "http://localhost:5000";

	describe("find()",function(){
	
		it('should retrieve all student records', function(done){

			request(url)
			.get('/students')
			.end(function(err,res){

				if(err) throw err;	
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();

			});	

		});

	});

	describe("findOne()",function(){
	
		it('should retrieve a specific student record', function(done){

			request(url)
			.get('/students/6')
			.end(function(err,res){

				if(err) throw err;
				res.should.have.status(200);
				//res.body.should.be.an.instanceOf(Array);
				done();

			});

		});

	});

	describe("insert()",function(){
		
		var studrec = [
			{
			'studno': '1231-5124',
			'name': 'safasfsa'
			}
		];

		studrec.forEach(function(stud){
			it('should insert', function(done){

				request(url)
				.post('/students')
				.send(studrec)
				.end(function(err,res){

					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					res.body.should.have.properties('studno','name');
					//res.body.should
					//asdsadsadsadsadsadsada
					done();

				});
			
			});	

		});

	});

});