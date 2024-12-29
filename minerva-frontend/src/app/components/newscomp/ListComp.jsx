import React from 'react';
import ReactMarkdown from 'react-markdown';
import App from '../image-carousel/swiper';
import remarkGfm from "remark-gfm";

const ListComp = ({ item }) => {
  const backend_url = process.env.NEXT_PUBLIC_API_URL;

  const swiperImages = item.image
    ? item.image.map((img) => ({
        img: `${backend_url}${img.url}`,
        tag: img.alternativeText || item.Title,
      }))
    : [];

  return (
    <div className="mb-8 p-6 bg-background text-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-mont font-semibold">{item.Title}</h2>
      </div>

      {item.description && (
        <div className="prose prose-sm max-w-none mt-4 font-mont text-foreground">
          <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ children }) => (
              <table className="min-w-full table-auto border-collapse mt-4 mb-6">
                {children}
              </table>
            ),
            th: ({ children }) => (
              <th className="px-4 py-2 text-left border-b font-bold text-gray-700 bg-gray-100">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2 border-b text-gray-600">
                {children}
              </td>
            ),
            tr: ({ children }) => (
              <tr className="hover:bg-gray-50">
                {children}
              </tr>
            ),
          }}
        >
          {item.description}
        </ReactMarkdown>
      </div>
      )}

      {item.image && item.image.length > 0 && (
        <div className="mt-4">
          <App images={swiperImages} flag={true} view={1} width="w-full" />
        </div>
      )}

      {item.pdf && item.pdf.length > 0 && (
        <div className="mt-4">
          {item.pdf.map((pdf) => (
            <a
              key={pdf.id}
              href={`${backend_url}${pdf.url}`}
              className="inline-flex items-center font-mont text-accent hover:underline"
            >
              View PDF ({pdf.name})
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListComp;
