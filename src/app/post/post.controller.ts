import Post from "./post.model";
import * as mongodb from 'mongodb';


export class PostController{

    addPost = async (req,res) => {
    console.log('Defined  * * * *   * * *   ')
        console.log(req.body)
        const post = new Post(req.body);
     

        console.log(post)
        await post.save().then((response)=>{
            return res.status(200).send(response)

        }).catch((error)=>{
            console.log(error)
            return res.status(500).send(error)

        });



    }


    getPosts = async (req,res) => {
        try{

            const post = await Post.find();
            res.status(200).send(post)

        }
        catch(error){
            res.status(400).send(error.message)

        }
        
    }

    getPost = async(req,res) => {
        try{
            const id = req.params?.id
            const query = { _id: new mongodb.ObjectId(id) };
            const post = await Post.findOne(query)
            if (post){
                res.status(200).send(post)
            }else{
                res.status(404).send(`Could not find Post with ID ${id}`)
            }
        }
        catch(error){
            res.status(400).send(`Could not find Post with ID ${req.params.id}`)


        }

    }

    



}