const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt-node");
const jwt = require("../services/jwt")
const Trans = require("../models/trans");
const { exists } = require("../models/trans");


function signTrans(req, res){
    const trans =new User();
    const { name, lastname, email,money, dui, message,cuenta} = req.body;
    trans.name=name;
    trans.lastname=lastname;
    trans.dui = dui;
    trans.money = money;
    trans.email =email.toLowerCase();
    trans.message= message
    trans.cuent = cuenta;
    trans.active =  true;
   
    trans.save((err, transStored) =>{
        if(err){
            res.status(500).send({message: "La transaccion ya existe"});
        }else{
            if(!transStored){
                res.status(404).send({message: "Error al crear al usuario"});
            }else{
                res.status(200).send({trans: transStored});
            }
        }
    });
}

function getTrans(req, res){
    Trans.find().then(Transf =>{
        if(!Transf){
            res.status(404).send({message: "No se ha encontrado ningun usuario"});
        } else{
            res.status(200).send({Transf});
        }
    })
}

function getTransActive(req, res){
    const query = req.query;
    Trans.find({active: query.active}).then(Transf =>{
        if(!Transf){
            res.status(404).send({message: "No se ha encontrado ningun usuario"});
        } else{
            res.status(200).send({Transf});
        }
    })
}


module.exports={
    signTrans,
    getTrans,
    getTransActive,
}; 