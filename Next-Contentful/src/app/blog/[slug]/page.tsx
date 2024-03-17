import { previewClient } from "@/lib/client";
import React from "react";

const Slug = async ({ params }: { params: { slug: string } }) => {

    const myClient = previewClient;

    const { slug } = params;

    const response = await myClient.getEntries({
        content_type: "post",
        "fields.slug": slug
    });

    console.log(response.items[0].fields);

    return (
        <div className="flex flex-col items-center mx-auto max-w-6xl">
            <h1 className="text-3xl py-4">
                {response.items[0].fields.title}
            </h1>

            <div className="flex items-center py-3">
                <div className="relative w-10 h-10 mr-4">
                    <img
                        src={response.items[0].fields.author.fields.picture.fields.file.url}
                        className="rounded-full m-0"
                        alt={response.items[0].fields.author.fields.name}
                    />
                </div>
                <div className="font-semibold">{response.items[0].fields.author.fields.name}</div>
            </div>
        </div>
    )
};

export default Slug;