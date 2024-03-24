import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`;
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}

export function makeMetaData({
  title = "Rent Gate",
  description = "Rent the perfect vehicle for your needs.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@khusanov_m_r",
    },
    icons,
    metadataBase: new URL("https://rent-gate.uz"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function formatPrice(amount: string | number | undefined) {
  if (amount && typeof amount === "string" && isNaN(Number(amount)))
    return amount;

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "USD",
  }).format(Number(amount));
}

export function getSearchParams(value: ReadonlyURLSearchParams) {
  const params = new URLSearchParams();
  value.forEach((value, key) => {
    params.set(key, value);
  });
  return params;
}