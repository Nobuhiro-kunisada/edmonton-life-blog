import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
   <div>
     {/* 修正後：{coverImage && ( ... )} で囲むのがコツです！ */}
{coverImage && (
      <div className="mb-5 overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* 画像を少し角丸にして、ホバーで影が強くなるようにしました */}
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
  )}
      <h3 className="text-2xl mb-3 leading-tight font-serif font-bold text-[#2C4A34]">
        {/* フォントをセリフ体に、色を濃い緑に変更 */}
        <Link href={`/posts/${slug}`} className="hover:text-[#4A7856] transition-colors">
          {title}
        </Link>
      </h3>
      <div className="text-sm mb-4 text-gray-600 font-sans">
        {/* 日付は少し小さくして、控えめに */}
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base leading-relaxed mb-4 text-gray-700">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
