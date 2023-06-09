/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentType: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars["String"]>;
  fileName: Maybe<Scalars["String"]>;
  height: Maybe<Scalars["Int"]>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars["Int"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]>;
  url: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars["String"]>;
  transform: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars["String"]>;
  contentType_contains: InputMaybe<Scalars["String"]>;
  contentType_exists: InputMaybe<Scalars["Boolean"]>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentType_not: InputMaybe<Scalars["String"]>;
  contentType_not_contains: InputMaybe<Scalars["String"]>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars["String"]>;
  description_contains: InputMaybe<Scalars["String"]>;
  description_exists: InputMaybe<Scalars["Boolean"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not: InputMaybe<Scalars["String"]>;
  description_not_contains: InputMaybe<Scalars["String"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName: InputMaybe<Scalars["String"]>;
  fileName_contains: InputMaybe<Scalars["String"]>;
  fileName_exists: InputMaybe<Scalars["Boolean"]>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName_not: InputMaybe<Scalars["String"]>;
  fileName_not_contains: InputMaybe<Scalars["String"]>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  height: InputMaybe<Scalars["Int"]>;
  height_exists: InputMaybe<Scalars["Boolean"]>;
  height_gt: InputMaybe<Scalars["Int"]>;
  height_gte: InputMaybe<Scalars["Int"]>;
  height_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  height_lt: InputMaybe<Scalars["Int"]>;
  height_lte: InputMaybe<Scalars["Int"]>;
  height_not: InputMaybe<Scalars["Int"]>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size: InputMaybe<Scalars["Int"]>;
  size_exists: InputMaybe<Scalars["Boolean"]>;
  size_gt: InputMaybe<Scalars["Int"]>;
  size_gte: InputMaybe<Scalars["Int"]>;
  size_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size_lt: InputMaybe<Scalars["Int"]>;
  size_lte: InputMaybe<Scalars["Int"]>;
  size_not: InputMaybe<Scalars["Int"]>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url: InputMaybe<Scalars["String"]>;
  url_contains: InputMaybe<Scalars["String"]>;
  url_exists: InputMaybe<Scalars["Boolean"]>;
  url_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url_not: InputMaybe<Scalars["String"]>;
  url_not_contains: InputMaybe<Scalars["String"]>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  width: InputMaybe<Scalars["Int"]>;
  width_exists: InputMaybe<Scalars["Boolean"]>;
  width_gt: InputMaybe<Scalars["Int"]>;
  width_gte: InputMaybe<Scalars["Int"]>;
  width_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  width_lt: InputMaybe<Scalars["Int"]>;
  width_lte: InputMaybe<Scalars["Int"]>;
  width_not: InputMaybe<Scalars["Int"]>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  workshopPhotoGroupCollection: Maybe<WorkshopPhotoGroupCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsWorkshopPhotoGroupCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars["Boolean"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** Una galería como la de la página Workshop. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/gallery) */
export type Gallery = Entry & {
  __typename?: "Gallery";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<GalleryLinkingCollections>;
  photoSlidersCollection: Maybe<GalleryPhotoSlidersCollection>;
  sys: Sys;
  title: Maybe<Scalars["String"]>;
};

/** Una galería como la de la página Workshop. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/gallery) */
export type GalleryLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Una galería como la de la página Workshop. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/gallery) */
export type GalleryPhotoSlidersCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Una galería como la de la página Workshop. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/gallery) */
export type GalleryTitleArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

export type GalleryCollection = {
  __typename?: "GalleryCollection";
  items: Array<Maybe<Gallery>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type GalleryFilter = {
  AND: InputMaybe<Array<InputMaybe<GalleryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<GalleryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  photoSliders: InputMaybe<CfWorkshopPhotoGroupNestedFilter>;
  photoSlidersCollection_exists: InputMaybe<Scalars["Boolean"]>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type GalleryLinkingCollections = {
  __typename?: "GalleryLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type GalleryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum GalleryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type GalleryPhotoSlidersCollection = {
  __typename?: "GalleryPhotoSlidersCollection";
  items: Array<Maybe<WorkshopPhotoGroup>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars["HexColor"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars["Int"]>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars["Dimension"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars["Quality"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars["Dimension"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type Project = Entry & {
  __typename?: "Project";
  contentfulMetadata: ContentfulMetadata;
  costumeDesigner: Maybe<Scalars["String"]>;
  director: Maybe<Scalars["String"]>;
  distribution: Maybe<Scalars["String"]>;
  job: Maybe<Scalars["String"]>;
  linkedFrom: Maybe<ProjectLinkingCollections>;
  photoSlider: Maybe<WorkshopPhotoGroup>;
  production: Maybe<Scalars["String"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]>;
  year: Maybe<Scalars["Int"]>;
  youTubeTrailerLink: Maybe<Scalars["String"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectCostumeDesignerArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectDirectorArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectDistributionArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectJobArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectPhotoSliderArgs = {
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectProductionArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectTitleArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectYearArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Un proyecto que aparecerá en la página Projects. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/project) */
export type ProjectYouTubeTrailerLinkArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

export type ProjectCollection = {
  __typename?: "ProjectCollection";
  items: Array<Maybe<Project>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ProjectFilter = {
  AND: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  costumeDesigner: InputMaybe<Scalars["String"]>;
  costumeDesigner_contains: InputMaybe<Scalars["String"]>;
  costumeDesigner_exists: InputMaybe<Scalars["Boolean"]>;
  costumeDesigner_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  costumeDesigner_not: InputMaybe<Scalars["String"]>;
  costumeDesigner_not_contains: InputMaybe<Scalars["String"]>;
  costumeDesigner_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  director: InputMaybe<Scalars["String"]>;
  director_contains: InputMaybe<Scalars["String"]>;
  director_exists: InputMaybe<Scalars["Boolean"]>;
  director_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  director_not: InputMaybe<Scalars["String"]>;
  director_not_contains: InputMaybe<Scalars["String"]>;
  director_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  distribution: InputMaybe<Scalars["String"]>;
  distribution_contains: InputMaybe<Scalars["String"]>;
  distribution_exists: InputMaybe<Scalars["Boolean"]>;
  distribution_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  distribution_not: InputMaybe<Scalars["String"]>;
  distribution_not_contains: InputMaybe<Scalars["String"]>;
  distribution_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  job: InputMaybe<Scalars["String"]>;
  job_contains: InputMaybe<Scalars["String"]>;
  job_exists: InputMaybe<Scalars["Boolean"]>;
  job_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  job_not: InputMaybe<Scalars["String"]>;
  job_not_contains: InputMaybe<Scalars["String"]>;
  job_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  photoSlider: InputMaybe<CfWorkshopPhotoGroupNestedFilter>;
  photoSlider_exists: InputMaybe<Scalars["Boolean"]>;
  production: InputMaybe<Scalars["String"]>;
  production_contains: InputMaybe<Scalars["String"]>;
  production_exists: InputMaybe<Scalars["Boolean"]>;
  production_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  production_not: InputMaybe<Scalars["String"]>;
  production_not_contains: InputMaybe<Scalars["String"]>;
  production_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  year: InputMaybe<Scalars["Int"]>;
  year_exists: InputMaybe<Scalars["Boolean"]>;
  year_gt: InputMaybe<Scalars["Int"]>;
  year_gte: InputMaybe<Scalars["Int"]>;
  year_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  year_lt: InputMaybe<Scalars["Int"]>;
  year_lte: InputMaybe<Scalars["Int"]>;
  year_not: InputMaybe<Scalars["Int"]>;
  year_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  youTubeTrailerLink: InputMaybe<Scalars["String"]>;
  youTubeTrailerLink_contains: InputMaybe<Scalars["String"]>;
  youTubeTrailerLink_exists: InputMaybe<Scalars["Boolean"]>;
  youTubeTrailerLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  youTubeTrailerLink_not: InputMaybe<Scalars["String"]>;
  youTubeTrailerLink_not_contains: InputMaybe<Scalars["String"]>;
  youTubeTrailerLink_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProjectLinkingCollections = {
  __typename?: "ProjectLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  projectListCollection: Maybe<ProjectListCollection>;
};

export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ProjectLinkingCollectionsProjectListCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Los proyectos en el orden en el que salen en la página web. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/projectList) */
export type ProjectList = Entry & {
  __typename?: "ProjectList";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<ProjectListLinkingCollections>;
  projectsCollection: Maybe<ProjectListProjectsCollection>;
  sys: Sys;
  title: Maybe<Scalars["String"]>;
};

/** Los proyectos en el orden en el que salen en la página web. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/projectList) */
export type ProjectListLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Los proyectos en el orden en el que salen en la página web. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/projectList) */
export type ProjectListProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Los proyectos en el orden en el que salen en la página web. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/projectList) */
export type ProjectListTitleArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

export type ProjectListCollection = {
  __typename?: "ProjectListCollection";
  items: Array<Maybe<ProjectList>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ProjectListFilter = {
  AND: InputMaybe<Array<InputMaybe<ProjectListFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ProjectListFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  projects: InputMaybe<CfProjectNestedFilter>;
  projectsCollection_exists: InputMaybe<Scalars["Boolean"]>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProjectListLinkingCollections = {
  __typename?: "ProjectListLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type ProjectListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum ProjectListOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ProjectListProjectsCollection = {
  __typename?: "ProjectListProjectsCollection";
  items: Array<Maybe<Project>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum ProjectOrder {
  CostumeDesignerAsc = "costumeDesigner_ASC",
  CostumeDesignerDesc = "costumeDesigner_DESC",
  DirectorAsc = "director_ASC",
  DirectorDesc = "director_DESC",
  DistributionAsc = "distribution_ASC",
  DistributionDesc = "distribution_DESC",
  JobAsc = "job_ASC",
  JobDesc = "job_DESC",
  ProductionAsc = "production_ASC",
  ProductionDesc = "production_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  YearAsc = "year_ASC",
  YearDesc = "year_DESC",
  YouTubeTrailerLinkAsc = "youTubeTrailerLink_ASC",
  YouTubeTrailerLinkDesc = "youTubeTrailerLink_DESC",
}

export type Query = {
  __typename?: "Query";
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  entryCollection: Maybe<EntryCollection>;
  gallery: Maybe<Gallery>;
  galleryCollection: Maybe<GalleryCollection>;
  project: Maybe<Project>;
  projectCollection: Maybe<ProjectCollection>;
  projectList: Maybe<ProjectList>;
  projectListCollection: Maybe<ProjectListCollection>;
  workshopPhotoGroup: Maybe<WorkshopPhotoGroup>;
  workshopPhotoGroupCollection: Maybe<WorkshopPhotoGroupCollection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"];
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<AssetFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<EntryFilter>;
};

export type QueryGalleryArgs = {
  id: Scalars["String"];
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

export type QueryGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<GalleryOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<GalleryFilter>;
};

export type QueryProjectArgs = {
  id: Scalars["String"];
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<ProjectFilter>;
};

export type QueryProjectListArgs = {
  id: Scalars["String"];
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

export type QueryProjectListCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<ProjectListOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<ProjectListFilter>;
};

export type QueryWorkshopPhotoGroupArgs = {
  id: Scalars["String"];
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

export type QueryWorkshopPhotoGroupCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<WorkshopPhotoGroupOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<WorkshopPhotoGroupFilter>;
};

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"];
  firstPublishedAt: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  publishedAt: Maybe<Scalars["DateTime"]>;
  publishedVersion: Maybe<Scalars["Int"]>;
  spaceId: Scalars["String"];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_exists: InputMaybe<Scalars["Boolean"]>;
  firstPublishedAt_gt: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_gte: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  firstPublishedAt_lt: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_lte: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id: InputMaybe<Scalars["String"]>;
  id_contains: InputMaybe<Scalars["String"]>;
  id_exists: InputMaybe<Scalars["Boolean"]>;
  id_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_not: InputMaybe<Scalars["String"]>;
  id_not_contains: InputMaybe<Scalars["String"]>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publishedAt: InputMaybe<Scalars["DateTime"]>;
  publishedAt_exists: InputMaybe<Scalars["Boolean"]>;
  publishedAt_gt: InputMaybe<Scalars["DateTime"]>;
  publishedAt_gte: InputMaybe<Scalars["DateTime"]>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedAt_lt: InputMaybe<Scalars["DateTime"]>;
  publishedAt_lte: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedVersion: InputMaybe<Scalars["Float"]>;
  publishedVersion_exists: InputMaybe<Scalars["Boolean"]>;
  publishedVersion_gt: InputMaybe<Scalars["Float"]>;
  publishedVersion_gte: InputMaybe<Scalars["Float"]>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  publishedVersion_lt: InputMaybe<Scalars["Float"]>;
  publishedVersion_lte: InputMaybe<Scalars["Float"]>;
  publishedVersion_not: InputMaybe<Scalars["Float"]>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

/** Un grupo de fotos. La primera foto en la lista será la que aparecerá como principal. El resto aparecerá en la galería deslizante tras hacer click en la foto principal. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/workshopPhotoGroup) */
export type WorkshopPhotoGroup = Entry & {
  __typename?: "WorkshopPhotoGroup";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<WorkshopPhotoGroupLinkingCollections>;
  slidesCollection: Maybe<AssetCollection>;
  sys: Sys;
  title: Maybe<Scalars["String"]>;
};

/** Un grupo de fotos. La primera foto en la lista será la que aparecerá como principal. El resto aparecerá en la galería deslizante tras hacer click en la foto principal. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/workshopPhotoGroup) */
export type WorkshopPhotoGroupLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Un grupo de fotos. La primera foto en la lista será la que aparecerá como principal. El resto aparecerá en la galería deslizante tras hacer click en la foto principal. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/workshopPhotoGroup) */
export type WorkshopPhotoGroupSlidesCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Un grupo de fotos. La primera foto en la lista será la que aparecerá como principal. El resto aparecerá en la galería deslizante tras hacer click en la foto principal. [See type definition](https://app.contentful.com/spaces/f3vrz52yvz69/content_types/workshopPhotoGroup) */
export type WorkshopPhotoGroupTitleArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

export type WorkshopPhotoGroupCollection = {
  __typename?: "WorkshopPhotoGroupCollection";
  items: Array<Maybe<WorkshopPhotoGroup>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type WorkshopPhotoGroupFilter = {
  AND: InputMaybe<Array<InputMaybe<WorkshopPhotoGroupFilter>>>;
  OR: InputMaybe<Array<InputMaybe<WorkshopPhotoGroupFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slidesCollection_exists: InputMaybe<Scalars["Boolean"]>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type WorkshopPhotoGroupLinkingCollections = {
  __typename?: "WorkshopPhotoGroupLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  galleryCollection: Maybe<GalleryCollection>;
  projectCollection: Maybe<ProjectCollection>;
};

export type WorkshopPhotoGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type WorkshopPhotoGroupLinkingCollectionsGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type WorkshopPhotoGroupLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum WorkshopPhotoGroupOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type CfProjectNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfProjectNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfProjectNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  costumeDesigner: InputMaybe<Scalars["String"]>;
  costumeDesigner_contains: InputMaybe<Scalars["String"]>;
  costumeDesigner_exists: InputMaybe<Scalars["Boolean"]>;
  costumeDesigner_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  costumeDesigner_not: InputMaybe<Scalars["String"]>;
  costumeDesigner_not_contains: InputMaybe<Scalars["String"]>;
  costumeDesigner_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  director: InputMaybe<Scalars["String"]>;
  director_contains: InputMaybe<Scalars["String"]>;
  director_exists: InputMaybe<Scalars["Boolean"]>;
  director_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  director_not: InputMaybe<Scalars["String"]>;
  director_not_contains: InputMaybe<Scalars["String"]>;
  director_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  distribution: InputMaybe<Scalars["String"]>;
  distribution_contains: InputMaybe<Scalars["String"]>;
  distribution_exists: InputMaybe<Scalars["Boolean"]>;
  distribution_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  distribution_not: InputMaybe<Scalars["String"]>;
  distribution_not_contains: InputMaybe<Scalars["String"]>;
  distribution_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  job: InputMaybe<Scalars["String"]>;
  job_contains: InputMaybe<Scalars["String"]>;
  job_exists: InputMaybe<Scalars["Boolean"]>;
  job_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  job_not: InputMaybe<Scalars["String"]>;
  job_not_contains: InputMaybe<Scalars["String"]>;
  job_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  photoSlider_exists: InputMaybe<Scalars["Boolean"]>;
  production: InputMaybe<Scalars["String"]>;
  production_contains: InputMaybe<Scalars["String"]>;
  production_exists: InputMaybe<Scalars["Boolean"]>;
  production_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  production_not: InputMaybe<Scalars["String"]>;
  production_not_contains: InputMaybe<Scalars["String"]>;
  production_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  year: InputMaybe<Scalars["Int"]>;
  year_exists: InputMaybe<Scalars["Boolean"]>;
  year_gt: InputMaybe<Scalars["Int"]>;
  year_gte: InputMaybe<Scalars["Int"]>;
  year_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  year_lt: InputMaybe<Scalars["Int"]>;
  year_lte: InputMaybe<Scalars["Int"]>;
  year_not: InputMaybe<Scalars["Int"]>;
  year_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  youTubeTrailerLink: InputMaybe<Scalars["String"]>;
  youTubeTrailerLink_contains: InputMaybe<Scalars["String"]>;
  youTubeTrailerLink_exists: InputMaybe<Scalars["Boolean"]>;
  youTubeTrailerLink_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  youTubeTrailerLink_not: InputMaybe<Scalars["String"]>;
  youTubeTrailerLink_not_contains: InputMaybe<Scalars["String"]>;
  youTubeTrailerLink_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CfWorkshopPhotoGroupNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfWorkshopPhotoGroupNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfWorkshopPhotoGroupNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slidesCollection_exists: InputMaybe<Scalars["Boolean"]>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProjectListEntryQueryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ProjectListEntryQueryQuery = {
  __typename?: "Query";
  projectList: {
    __typename?: "ProjectList";
    sys: { __typename?: "Sys"; id: string };
    projectsCollection: {
      __typename?: "ProjectListProjectsCollection";
      items: Array<{
        __typename?: "Project";
        title: string | null;
        job: string | null;
        year: number | null;
        costumeDesigner: string | null;
        director: string | null;
        production: string | null;
        distribution: string | null;
        youTubeTrailerLink: string | null;
        sys: { __typename?: "Sys"; id: string };
        photoSlider: {
          __typename?: "WorkshopPhotoGroup";
          slidesCollection: {
            __typename?: "AssetCollection";
            total: number;
            skip: number;
            limit: number;
            items: Array<{
              __typename?: "Asset";
              url: string | null;
              width: number | null;
              height: number | null;
              title: string | null;
            } | null>;
          } | null;
        } | null;
      } | null>;
    } | null;
  } | null;
};

export type WorkshopGalleryQueryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type WorkshopGalleryQueryQuery = {
  __typename?: "Query";
  gallery: {
    __typename?: "Gallery";
    title: string | null;
    sys: { __typename?: "Sys"; id: string };
    photoSlidersCollection: {
      __typename?: "GalleryPhotoSlidersCollection";
      items: Array<{
        __typename?: "WorkshopPhotoGroup";
        title: string | null;
        sys: { __typename?: "Sys"; id: string };
        slidesCollection: {
          __typename?: "AssetCollection";
          limit: number;
          skip: number;
          total: number;
          items: Array<{
            __typename?: "Asset";
            title: string | null;
            url: string | null;
            width: number | null;
            height: number | null;
          } | null>;
        } | null;
      } | null>;
    } | null;
  } | null;
};

export const ProjectListEntryQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "projectListEntryQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectList" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "StringValue",
                  value: "4I3FbAncqpeEcqKTQ7o686",
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sys" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projectsCollection" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sys" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "job" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "year" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "costumeDesigner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "director" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "production" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "distribution" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "youTubeTrailerLink",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photoSlider" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "slidesCollection",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "total",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "skip" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "limit",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "items",
                                          },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "url",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "width",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "height",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "title",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ProjectListEntryQueryQuery,
  ProjectListEntryQueryQueryVariables
>;
export const WorkshopGalleryQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "workshopGalleryQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "gallery" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "StringValue",
                  value: "4mO5GAdPRGISUXIGw1UwXY",
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sys" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photoSlidersCollection" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sys" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "slidesCollection" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "limit" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "skip" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "total" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "items" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "title",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "width",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "height",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  WorkshopGalleryQueryQuery,
  WorkshopGalleryQueryQueryVariables
>;
