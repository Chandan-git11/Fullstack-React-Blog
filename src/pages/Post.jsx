// // // import React, { useEffect, useState } from "react";
// // // import { Link, useNavigate, useParams } from "react-router-dom";
// // // import appwriteService from "../appwrite/config";
// // // import { Button, Container } from "../components";
// // // import parse from "html-react-parser";
// // // import { useSelector } from "react-redux";

// // // export default function Post() {
// // //     const [post, setPost] = useState(null);
// // //     const { slug } = useParams();
// // //     const navigate = useNavigate();

// // //     const userData = useSelector((state) => state.auth.userData);

// // //     const isAuthor = post && userData ? post.userId === userData.$id : false;

// // //     useEffect(() => {
// // //         if (slug) {
// // //             appwriteService.getPost(slug).then((post) => {
// // //                 if (post) setPost(post);
// // //                 else navigate("/");
// // //             });
// // //         } else navigate("/");
// // //     }, [slug, navigate]);

// // //     const deletePost = () => {
// // //         appwriteService.deletePost(post.$id).then((status) => {
// // //             if (status) {
// // //                 appwriteService.deleteFile(post.featuredImage);
// // //                 navigate("/");
// // //             }
// // //         });
// // //     };

// // //     return post ? (
// // //         <div className="py-8">
// // //             <Container>
// // //                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
// // //                     <img
// // //                         src={appwriteService.getFilePreview(post.featuredImage)}
// // //                         alt={post.title}
// // //                         className="rounded-xl"
// // //                     />

// // //                     {isAuthor && (
// // //                         <div className="absolute right-6 top-6">
// // //                             <Link to={`/edit-post/${post.$id}`}>
// // //                                 <Button bgColor="bg-green-500" className="mr-3">
// // //                                     Edit
// // //                                 </Button>
// // //                             </Link>
// // //                             <Button bgColor="bg-red-500" onClick={deletePost}>
// // //                                 Delete
// // //                             </Button>
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //                 <div className="w-full mb-6">
// // //                     <h1 className="text-2xl font-bold">{post.title}</h1>
// // //                 </div>
// // //                 <div className="browser-css">
// // //                     {parse(post.content)}
// // //                     </div>
// // //             </Container>
// // //         </div>
// // //     ) : null;
// // // }
// // import React, { useEffect, useState } from "react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import appwriteService from "../appwrite/config";
// // import { Button, Container } from "../components";
// // import parse from "html-react-parser";
// // import { useSelector } from "react-redux";

// // export default function Post() {
// //     const [post, setPost] = useState(null);
// //     const { slug } = useParams();
// //     const navigate = useNavigate();

// //     const userData = useSelector((state) => state.auth.userData);

// //     const isAuthor = post && userData ? post.userId === userData.$id : false;

// //     useEffect(() => {
// //         if (slug) {
// //             appwriteService.getPost(slug).then((post) => {
// //                 if (post) setPost(post);
// //                 else navigate("/");
// //             });
// //         } else navigate("/");
// //     }, [slug, navigate]);

// //     const deletePost = () => {
// //         appwriteService.deletePost(post.$id).then((status) => {
// //             if (status) {
// //                 appwriteService.deleteFile(post.featureImage);
// //                 navigate("/");
// //             }
// //         });
// //     };

// //     return post ? (
// //         <div className="py-8">
// //             <Container>
// //                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
// //                     <img
// //                         src={appwriteService.getFilePreview(post.featureImage)}
// //                         alt={post.title}
// //                         className="rounded-xl"
// //                     />

// //                     {isAuthor && (
// //                         <div className="absolute right-6 top-6">
// //                             <Link to={`/edit-post/${post.$id}`}>
// //                                 <Button bgColor="bg-green-500" className="mr-3">
// //                                     Edit
// //                                 </Button>
// //                             </Link>
// //                             <Button bgColor="bg-red-500" onClick={deletePost}>
// //                                 Delete
// //                             </Button>
// //                         </div>
// //                     )}
// //                 </div>
// //                 <div className="w-full mb-6">
// //                     <h1 className="text-2xl font-bold">{post.title}</h1>
// //                 </div>
// //                 <div className="browser-css">
// //                     {parse(post.content)}
// //                 </div>
// //             </Container>
// //         </div>
// //     ) : null;
// // }
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../appwrite/config";
// import { Button, Container } from "../components";
// import parse from "html-react-parser";
// import { useSelector } from "react-redux";

// export default function Post() {
//     const [post, setPost] = useState(null);
//     const { slug } = useParams();
//     const navigate = useNavigate();

//     const userData = useSelector((state) => state.auth.userData);
//     const isAuthor = post && userData ? post.userId === userData.$id : false;

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) setPost(post);
//                 else navigate("/");
//             });
//         } else navigate("/");
//     }, [slug, navigate]);

//     const deletePost = () => {
//         appwriteService.deletePost(post.$id).then((status) => {
//             if (status) {
//                 appwriteService.deleteFile(post.featureImage);   // using featureImage
//                 navigate("/");
//             }
//         });
//     };

//     return post ? (
//         <div className="py-8">
//             <Container>
//                 <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">

//                     {/* Prevent crash if no image */}
//                     {post.featureImage && (
//                         <img
//                             src={appwriteService.getFilePreview(post.featureImage)}  // using featureImage
//                             alt={post.title}
//                             className="rounded-xl"
//                         />
//                     )}

//                     {isAuthor && (
//                         <div className="absolute right-6 top-6">
//                             <Link to={`/edit-post/${post.$id}`}>
//                                 <Button bgColor="bg-green-500" className="mr-3">
//                                     Edit
//                                 </Button>
//                             </Link>
//                             <Button bgColor="bg-red-500" onClick={deletePost}>
//                                 Delete
//                             </Button>
//                         </div>
//                     )}
//                 </div>

//                 <div className="w-full mb-6">
//                     <h1 className="text-2xl font-bold">{post.title}</h1>
//                 </div>

//                 <div className="browser-css">
//                     {parse(post.content)}
//                 </div>
//             </Container>
//         </div>
//     ) : null;
// }
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import service from '../appwrite/config';

function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((postData) => {
                if (postData) {
                    setPost(postData);
                } else {
                    navigate('/');
                }
                setLoading(false);
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            const isDeleted = await service.deletePost(slug);
            if (isDeleted) {
                if (post.featureImage) {
                    await service.deleteFile(post.featureImage);
                }
                navigate('/all-posts');
            }
        }
    };

    const handleEdit = () => {
        navigate(`/edit-post/${slug}`);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl font-semibold text-red-600">Post not found</div>
            </div>
        );
    }

    // Get the image URL from file ID
    const imageUrl = post.featureImage 
        ? service.getFilePreview(post.featureImage).href 
        : null;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {imageUrl && (
                    <div className="w-full">
                        <img 
                            src={imageUrl} 
                            alt={post.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}
                
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6 pb-4 border-b-2 border-gray-200">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {post.title}
                        </h1>
                        <div className="flex gap-3">
                            <button 
                                onClick={handleEdit}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-200 font-medium"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition duration-200 font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none mb-6">
                        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                            {post.content}
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                        <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                            Status: <span className="capitalize">{post.status}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;