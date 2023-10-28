import conf from "../conf/conf";
import { Client,Account,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    Client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // Post related serrvice

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            {
                title,content,featuredImage,status,userId
            })
        } catch (error) {
            console.log("Appwrite: configjs : createPost " , error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }

                )
        } catch (error) {
            console.log("Appwrite: configjs : updatePost " , error)
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            return true
        } catch (error) {
            console.log("Appwrite: configjs : deletePost " , error)
            return false 
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
        } catch (error) {
            console.log("Appwrite: configjs : getPost " , error)
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
        } catch (error) {
            console.log("Appwrite: configjs : getPosts " , error)
        }
    }


    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
        } catch (error) {
            console.log("Appwrite: configjs : upload File " , error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
            return true
        } catch (error) {
            console.log("Appwrite: configjs : delete File " , error)
            return false
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
        } catch (error) {
            console.log("Appwrite: configjs : get file preview " , error)
        }
    }
}


const service = new Service()
export default service