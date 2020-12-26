import React,{useState} from 'react';
import axios from 'axios'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
import {Wrapper} from './AddPostElements'
// import styled from 'styled-components';

/*
    CREATE POST IMPLEMENTED WITH
    FILE UPLOAD TO LOCAL MACHINE
*/

function AddPost() {
    const history = useHistory()
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    // const [authorname, setAuthorName] = useState("");
    const [fileName, setFileName] = useState("");


    // const onChange = e=>{
    //     setFileName(e.target.files[0]);
    // }

    const changeOnClick = e =>{
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("body", article);
        // formData.append("authorname", authorname);
        formData.append("articleImage", fileName);

        axios.post("/posts/addPost", formData,{
            headers:{
                 "content-type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
        })
            .then(res=>res)
                .then(data=>{
                    
                    if(data.error){
                        M.toast({html:data.error, classes:"#c62828 red darken-3"})
                    }else{
                        //save the loggedin user's token and details to client's locaStorage
                        localStorage.clear();
                        localStorage.setItem("jwt", data.token)
                        localStorage.setItem("user", JSON.stringify(data.user))
                        

                        M.toast({html:"created post successfully", classes:"#2e7d32 green darken-3"})
                        history.push('/home')
                    }
            })
            .catch(err=>{
                console.log(err);
            })
    }
   
    return (
        <Wrapper>
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <input type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}/> 
                <input type="text"
                        placeholder="body"
                        value={article}
                        onChange={(e)=>setArticle(e.target.value)}/>
                
                <div className="file-field input-field">
                            <div className="btn ">
                                <span>Upload Image</span>
                                <input type="file" 
                                        filename="articleImage" 
                                        onChange={(e)=>setFileName(e.target.files[0])}/>
                            </div> 
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text"/>
                            </div>
                </div>
                <button className="btn waves-effect waves-light #4caf50 green darken-1">
                            SUBMIT POST
                    </button>
            </form>
        </Wrapper>
    )
}

export default AddPost;

//main container styles
// const AddArticleContainer = styled.div`
//     margin: 3rem auto;
//     padding: 4rem;
//     width: 31.25rem;

//     h1{
//         font-weight:900;
//         color: green;
//     }

//     .form-element{
//         display:flex;
//         flex-direction: column;
//         width: 100%;
//         margin-top: 1rem
//     }
//     .imageUpload{
//         width:50%;
//         margin-top:1rem;
//     }
//     .btn{
//         margin-top:1rem;
//         background: green;
//         border:none;
//         color: white;
//         width:100%;
//         &:hover{
//             background: lightgreen ;
//         }
//     }
// `
// ;

