import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
interface IPropType {
    article: IArticle;
}
const BlogCardWithImage = ({ article }: IPropType) => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-36 p-4">
           <Link href={`/article/${article.attributes.slug}`}>
                <span className="text-2xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
                    {article.attributes.title}
                </span>
            </Link>
            
        </div>
    );
};

export default BlogCardWithImage;
