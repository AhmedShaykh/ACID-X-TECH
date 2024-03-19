import { previewClient } from "@/lib/client";
import { formatDate } from "@/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Slug = async ({ params }: { params: { slug: string } }) => {

    const myClient = previewClient;

    const { slug } = params;

    const response = await myClient.getEntries({
        content_type: "post",
        "fields.slug": slug
    });

    const date: any = response.items[0].fields.date;

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

                <div className="font-semibold">
                    {response.items[0].fields.author.fields.name}
                </div>
            </div>

            <div className="mb-2">
                <img
                    width={response.items[0].fields.coverImage.fields.file.details.image.width}
                    height={response.items[0].fields.coverImage.fields.file.details.image.height}
                    src={response.items[0].fields.coverImage.fields.file.url}
                    alt={`Cover Image for ${response.items[0].fields.title}`}
                />
            </div>

            <h3 className="text-xl py-4">
                {response.items[0].fields.excerpt}
            </h3>

            <p className="text-lg leading-8 font-semibold mt-4 mb-6 md:text-[1.4rem] md:py-4 py-2">
                {documentToReactComponents(response.items[0].fields.content)}
            </p>

            <div className="text-lg mb-4 text-gray-400">
                {formatDate(date)}
            </div>
        </div>
    )
};

export default Slug;