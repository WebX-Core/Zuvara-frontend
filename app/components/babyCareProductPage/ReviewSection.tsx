import React from "react";
import { Product } from "@/type/babyCareProductType";
import { Star } from "lucide-react";

interface ReviewSectionProps {
  product: Product;
}
const ReviewSection = ({ product }: ReviewSectionProps) => {
  return (
    <div className="py-4 lg:py-8 space-y-4 lg:space-y-8">
      <div className="flex flex-col gap-2">
        <h2
          style={{
            color: product.background || "#000000",
          }}
          className="text-lg lg:text-3xl font-semibold text-center text-zinc-900"
        >
          The Zuvara Community
        </h2>
        <p className="text-zinc-600 lg:text-lg leading-relaxed max-w-5xl mx-auto">
          Real stories from parents like you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {(product.reviewsData && product.reviewsData.length > 0
          ? product.reviewsData
          : []
        ).map((review) => (
          <div
            key={review.id}
            className="p-4 lg:p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col h-full hover:shadow-xl hover:shadow-zinc-100 transition-all"
          >
            <div className="flex items-center gap-4 mb-4 lg:mb-8">
              <div className="size-12 lg:size-14 bg-white rounded-xl shadow-sm flex items-center justify-center font-black lg:text-xl text-zinc-900 border border-zinc-100">
                {review.userInitial}
              </div>
              <div>
                <h4 className="font-black text-zinc-900">{review.userName}</h4>
                <div className="flex text-zinc-900 gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      fill={i < review.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-zinc-600 font-medium lg:text-lg leading-relaxed italic">
              "{review.comment}"
            </p>
          </div>
        ))}
        {(!product.reviewsData || product.reviewsData.length === 0) && (
          <div className="col-span-full py-12 text-center bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
            <p className="text-zinc-400 font-bold">
              No reviews yet for this product.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
