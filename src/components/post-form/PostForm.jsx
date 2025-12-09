import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from '..';
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
    const { register, handleSubmit, control, setValue, getValues, watch } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector(state => state.auth.userData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const submit = async (data) => {
        setError("");
        setLoading(true);

        try {
            if (post) {
                // Updating existing post
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    appwriteService.deleteFile(post.featureImage);
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featureImage: file ? file.$id : undefined,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                // Creating new post
                if (!data.image || !data.image[0]) {
                    setError("Please select a featured image");
                    setLoading(false);
                    return;
                }

                const file = await appwriteService.uploadFile(data.image[0]);

                if (file) {
                    const fileId = file.$id;
                    data.featureImage = fileId;
                    const dbPost = await appwriteService.createPost({
                        ...data,
                        userId: userData.$id,
                    });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                } else {
                    setError("Failed to upload image");
                }
            }
        } catch (error) {
            console.error("Error submitting post:", error);
            setError(error.message || "Failed to submit post. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), {
                    shouldValidate: true,
                });
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featureImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                
                {error && (
                    <div className="mb-4 text-red-600 text-sm">
                        {error}
                    </div>
                )}
                
                <Button 
                    type="submit" 
                    className={`w-full ${post ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : (post ? "Update" : "Submit")}
                </Button>
            </div>
        </form>
    );
}

export default PostForm;