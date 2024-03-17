import { client } from "@/lib/client";
import Link from "next/link";

const Blog = async () => {

    const post = await client.getEntries({ content_type: "post" });

    return (
        <div className="container">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
                {post.items.map((item: any, i: number) => {
                    return (
                        <>
                            <li key={i} className="rounded-md overflow-hidden shadow-md">
                                <Link
                                    href={`/blog/${item.fields.slug}`}
                                    aria-label={item.fields.title}
                                >
                                    <div className="mb-2">
                                        <img
                                            width={item.fields.coverImage.fields.file.details.image.width}
                                            height={item.fields.coverImage.fields.file.details.image.height}
                                            src={item.fields.coverImage.fields.file.url}
                                            alt={`Cover Image for ${item.fields.title}`}
                                        />
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-xl mb-1 text-white">{item.fields.title}</h3>

                                        <div className="text-sm mb-4 text-gray-400">
                                            {item.fields.date}
                                        </div>

                                        <p className="text-base mb-4 text-white">{item.fields.excerpt}</p>

                                        <div className="flex items-center">
                                            <div className="relative w-10 h-10 mr-4">
                                                <img
                                                    src={item.fields.author.fields.picture.fields.file.url}
                                                    className="rounded-full m-0"
                                                    alt={item.fields.author.fields.name}
                                                />
                                            </div>
                                            <div className="font-semibold">{item.fields.author.fields.name}</div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
};

export default Blog;