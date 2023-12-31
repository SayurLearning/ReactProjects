const express = require('express');
const app = express();
const cors=require('cors');
const pool=require("./db")

//Middleware
app.use(cors());
app.use(express.json());

//Display todo
app.get("/main", async (req,res)=>{
    try{
        const qry = await pool.query("SELECT * from main_data;");
        // const qry = await pool.query("SELECT resource_data.id,location,component,main_data.component_type,method,link FROM main_data JOIN resource_data on main_data.rid=resource_data.id;");
        res.json(qry.rows);
    }
    catch(err){
        console.log(err.message);
    }
})
app.get("/resource", async (req,res)=>{
    try{
        const qry = await pool.query("SELECT * from resource_data;");
        res.json(qry.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

app.get("/:loc/:com?/:comty?", async(req,res)=>{
    try {
        const { loc,com,comty }= req.params;
        const qry = await pool.query(`SELECT method,link FROM main_data JOIN resource_data ON main_data.rid = resource_data.id WHERE main_data.location LIKE '${loc}%' or main_data.location LIKE '${com}%' or main_data.location LIKE '${comty}%' or main_data.component LIKE '${com}%' or main_data.component LIKE '${loc}%' or main_data.component LIKE '${comty}%' or main_data.component_type LIKE '${comty}%' or main_data.component_type LIKE '${com}%' or main_data.component_type LIKE '${loc}%';`);
        res.json(qry.rows);
    } catch (error) {
        console.log(err.message);
    }
})

app.put("/update_main/:id", async(req,res)=>{ //update
    try {
        
        const { id } = req.params;
        const { location,component,component_type,rid } = req.body;
        const qry = await pool.query("update main_data set location=$1,component=$2,component_type=$3,rid=$4 where id=$5",[location,component,component_type,rid,id]);
        res.json("main_data was updated!");
    } catch (error) {
        console.log(error);
    }
})

app.put("/update_resource/:id", async(req,res)=>{ //update
    try {
        
        const { id } = req.params;
        const { component_type,method,link } = req.body;
        const qry = await pool.query("update resource_data set component_type=$1,method=$2,link=$3 where id=$4",[component_type,method,link,id]);
        res.json("resource_data was updated!");
    } catch (error) {
        console.log(error);
    }
})

app.delete("/delete_resource/:id", async(req,res)=>{
    try {
        
        const { id } = req.params;
        const qry = await pool.query("delete from resource_data where id=$1",[id]);
        res.json("delete successful");

    } catch (error) {
        console.log(error);
    }
})

app.delete("/delete_main/:id", async(req,res)=>{
    try {
        
        const { id } = req.params;
        const qry = await pool.query("delete from main_data where id=$1",[id]);
        res.json("delete successful");

    } catch (error) {
        console.log(error);
    }
})

// app.get("/methods/:id/:val", async(req,res)=>{
//     try {
//         const { id,val }= req.params;
        
//         const qry = await pool.query(`SELECT * FROM main_data WHERE ${id}='${val}'`);
//         res.json(qry.rows);
 
//     } catch (error) {
//         console.log(err.message);
//     }
// })

app.post("/methodsmain", async(req,res)=>{ //insert
    try {
        const { location,component,componentType } = req.body;
        // const location=req.body.location;
        // const component=req.body.component;
        // const componenttype=req.body.component_type;
        
        // const qry1= await pool.query(`select id,method from resource_data where component_type=$1`,[componentType]);
        const qry = await pool.query(`INSERT INTO main_data(location,component,component_type,rid) values($1,$2,$3,(select id from resource_data where component_type='${componentType}'))`,
        [location,component,componentType]);
        // console.log(qry1.body);
        res.json(qry);

    } catch (error) {
        console.log(error);
    }
})
app.post("/methodsresource", async(req,res)=>{ //insert
    try {
        const { componentType,method,link } = req.body;//error faced in component_type because of name mismatch#rectified
        const qry = await pool.query(`INSERT INTO resource_data(component_type,method,link) values($1,$2,$3)`,[componentType,method,link]);
        res.json(qry);

    } catch (error) {
        console.log(error);
    }
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})