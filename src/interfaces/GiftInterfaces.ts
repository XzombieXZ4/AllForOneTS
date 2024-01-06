export interface GiftProps {
  id: string;
  title: string;
  url: string;
}

export interface On {
  url: string;
}

export interface Size {
  width: string;
  height: string;
}

export interface Original_still extends Size {
  url: string;
  size: string;
}

export interface Downsized extends Original_still {
  size: string;
}

export interface Fixed_width_downsampled extends Downsized {
  webp: string;
  webp_size: string;
}

export interface Looping {
  mp4: string;
}

export interface Preview extends Size, Looping {
  mp4_size: string;
}

export interface Fixed_height extends Fixed_width_downsampled, Preview {}

export interface Original extends Fixed_height {
  frames: string;
}

export interface Images {
  fixed_height: Fixed_height;
  fixed_height_still: Original_still;
  fixed_height_downsampled: Fixed_width_downsampled;
  fixed_width: Fixed_height;
  fixed_width_still: Original_still;
  fixed_width_downsampled: Fixed_width_downsampled;
  fixed_height_small: Fixed_height;
  fixed_height_small_still: Original_still;
  fixed_width_small: Fixed_height;
  fixed_width_small_still: Original_still;
  downsized: Downsized;
  downsized_still: Original_still;
  downsized_large: Downsized;
  downsized_medium: Downsized;
  downsized_small: Downsized;
  original: Original;
  original_still: Original_still;
  looping: Looping;
  preview: Preview;
  preview_gif: Original_still;
  "480w_still": Original_still;
  hd: Original_still;
}

export interface Analytics {
  onclick: On;
  onload: On;
  onsent: On;
}

export interface User {
  analytics: Analytics;
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  description: string;
  profile_url: string;
  username: string;
  display_name: string;
  instagram_url: string;
  is_verified: boolean;
  website_url: string;
}

export interface GifProps {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  bitly_gif_url: string;
  is_sticker: number;
  embed_url: string;
  source: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  title: string;
  alt_text: string;
  images: Images;
  user: User;
  username: string;
  analytics_response_payload: string;
}
