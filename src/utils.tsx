import { SlideImage } from "yet-another-react-lightbox/*";

export interface AssetCollection {
  items: ({
    url: string | null;
    width?: number | null;
    height?: number | null;
    title?: string | null;
  } | null)[];
}

export function slidesFromCollection(
  collection: AssetCollection | undefined | null,
  options?: {
    params?: string;
    imageFit?: SlideImage["imageFit"];
  }
): SlideImage[] {
  const items =
    collection?.items?.filter(
      (
        slide
      ): slide is {
        url: string;
        width?: number;
        height?: number;
        title?: string;
      } => Boolean(slide && slide.url)
    ) ?? [];
  return items.map<SlideImage>((slide) => ({
    src: `${slide.url}${options?.params ?? ""}`,
    width: slide.width ?? undefined,
    height: slide.height ?? undefined,
    alt: slide.title,
    imageFit: options?.imageFit,
  }));
}