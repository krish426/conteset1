var express= require ('express');
var router = express.Router();
var mongojs = require('mongojs');  
var db =mongojs('mongodb://admin:dtc123@http://54.164.100.220:27017/contest’);


//get all contests 
router.get('/contests', function(req, res, next){
    db.contests.find(function(err,contests){
        if(err){
            res.send(err);
        }
        res.json(contests)
    })
})

//search contests
router.get('/contest/:id', function(req, res, next){
    db.contests.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,contest){
        if(err){
            res.send(err);
        }
        res.json(contest)
    })
})


//save contest 
router.post('/addcontest',function(req,res,next){
    var contest=req.body;
    if(!contest.name){
        res.status(400);
        res.json({"error":"true","msg":"Please Fill Required Data"})
    }else{
        db.contests.save(contest, function(err,contest){
            if(err){
                res.send(err)
            }
            res.json(contest)
        })
    }
})

//remove contest
router.get('/removecontest/:id', function(req, res, next){
    db.contests.remove({_id:mongojs.ObjectId(req.params.id)},function(err,contest){
        if(err){
            res.send(err);
        }
        res.json(contest)
    })
})

//update contest
router.put('/updatecontest/:id', function(req, res, next){
    var contest = req.body;

    if(!contest){
        res.status(400);
        res.json({"error":"true","msg":"No Data To Update"})
    }
    db.contests.update({_id:mongojs.ObjectId(req.params.id)},contest,{},function(err,contest){
        if(err){
            res.send(err);
        }
        res.json(contest)
    })
})

module.exports = router; 
