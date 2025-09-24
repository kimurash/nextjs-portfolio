"use client";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { usePrevNextButtons } from "../_hooks/usePrevNextButtons";
import type { ProductImage } from "../types";
import ProductCarouselNextButton from "./ProductCarouselNextButton";
import ProductCarouselPrevButton from "./ProductCarouselPrevButton";

interface Props {
	productId: string;
	images: ProductImage[];
}

const ProductCarousel = ({ productId, images }: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "center", // FIXME: スライドが2枚以下の時に中央寄せにならない
	});

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		// FIXME: justify-center を書いても上下中央寄せにならない
		<div className="flex flex-col">
			<div className="overflow-hidden" ref={emblaRef}>
				<div
					className={
						// biome-ignore format: preference
						clsx(
              "flex",
              images.length < 2 && "justify-center",
            )
					}
				>
					{images.map((image, index) => (
						<div
							key={
								// biome-ignore lint/suspicious/noArrayIndexKey: negligence
								`${productId}-slide-${index}`
							}
							className="flex-[0_0_80%] min-w-0 mx-[10px]"
						>
							<Image
								src={image.src}
								alt={image.src}
								width={image.width}
								height={image.height}
								className="h-auto w-full max-h-[40vh] rounded-lg object-cover border"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="mt-4">
				<div className="flex items-center justify-center gap-4">
					<ProductCarouselPrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<ProductCarouselNextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductCarousel;
